import React from 'react'
import Layout from '../../components/Layout'
import * as ReactDOM from 'react-dom';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import emoji from 'markdown-it-emoji'
import subscript from 'markdown-it-sub'
import superscript from 'markdown-it-sup'
import footnote from 'markdown-it-footnote'
import deflist from 'markdown-it-deflist'
import abbreviation from 'markdown-it-abbr'
import insert from 'markdown-it-ins'
import mark from 'markdown-it-mark'
import tasklists from 'markdown-it-task-lists'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import authService from '../../services/auth.service';
import axios from 'axios';
import { addRecord } from '../../services/crud.service';
import { navigate } from 'gatsby';


const projectTag = "zh2fEl4jSRwO6K5q";

let mdEditor;

// Initialize a markdown parser
const mdParser = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) { }
    }
    return '' // use external default escaping
  }
})
  .use(emoji)
  .use(subscript)
  .use(superscript)
  .use(footnote)
  .use(deflist)
  .use(abbreviation)
  .use(insert)
  .use(mark)
  .use(tasklists);

function handleEditorChange({ html, text }) {
  console.log('handleEditorChange', html, text);
}
const handleImageUpload = (file) => {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = data => {
      console.log(data.target.result)
      resolve(data.target.result);
    };
    reader.readAsDataURL(file);
  });
};





export default function AddBetaProduct() {

  const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm();
  
  const onSubmit = async (data) => {
    let toSend = {
      title: data.title
    }
    toSend.thumbnail = fileUrl;
    toSend.content = mdEditor && mdEditor.getMdValue();
    toSend.tags = data.tags.join(",");
    toSend.submit_date = new Date();
    console.log(`data`, JSON.stringify(toSend));
    try {
      await addRecord(projectTag, 'beta_products', toSend);
      toast.success('Product added successfully. It will be reviewed by admin. You will be notified once it is approved.');
      // navigate to the beta products page
      navigate("/beta")
    } catch (error) {
      toast.error('Error adding product');
    }

  };

  const [fileUrl, setFileUrl] = React.useState('');

  const uploadFile = (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('access', 'public')
    axios.post(`https://api.dotenx.com/objectstore/project/${projectTag}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + getToken()
      },
    }).then((resp) => {
      if (resp.status === 200) {
        console.log('File uploaded');
      }
      alert(resp.data.url);
      setFileUrl(resp.data.url);
      setValue('thumbnail', fileUrl);

    });
  };


  const validTags = ['startup', 'acquisition', 'finance', 'business', 'fund raising', 'investment', 'strategy', 'sales', 'technology'];

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center m-20">
        <h1 className="text-4xl font-bold">Add Beta Product</h1>
        {/* Make the form width 2/3 of page */}
        <form onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input {...register("title", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" />
            {errors?.title && <p className="text-red-500 text-xs italic">Please enter a title</p>}
          </div>

          {/* Add drag and drop image upload */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              Image
            </label>
            {/* <input {...register("image", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="file"
              placeholder="Image"
              onChange={async (e) => {
                console.log(e.target.files[0])
                // set thumbnail field to base64 of image
                const base64 = await handleImageUpload(e.target.files[0]);
                // setValue('thumbnail', base64);
                setThumbnail(base64);
              }}
            /> */}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="file"
              placeholder="Image"
              onChange={async (e) => {
                await uploadFile(e.target.files[0]);
              }}
            />
            {fileUrl && <img src={fileUrl} alt="image" />}
            {errors?.image && <p className="text-red-500 text-xs italic">Please enter a image</p>}
          </div>


          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
              Content
            </label>
            <MdEditor
              style={{ height: '500px' }}
              // value={'# Hello World!'}
              renderHTML={(text) => mdParser.render(text)}
              // onChange={handleEditorChange}
              onImageUpload={handleImageUpload}
              ref={(ref) => mdEditor = ref}
            />
          </div>
          {/* render tags as a required multi select field  */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">
              Tags
            </label>
            <select multiple {...register("tags", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tags">
              {validTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
            {errors.tags && <p className="text-red-500 text-xs italic">Please select a tag</p>}
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}



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

// Finish!
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

const handleGetMdValue = () => {
  const content = mdEditor && console.log(mdEditor.getMdValue());
}

export default function AddNews() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    // data.content = handleGetMdValue();
    console.log(data)
  };

  const validTags = ['startup', 'acquisition', 'finance', 'business', 'fund raising', 'investment', 'strategy', 'sales', 'technology'];

  return (
    <Layout>

      {/* Add form with tailwind css with fields: title, content and tags and button save.
      handle the form with react-hook-form and use the markdown editor with react-markdown-editor-lite.
      */}
      <div className="flex flex-col items-center justify-center m-20">
        <h1 className="text-4xl font-bold">Add News</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input {...register("tags", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" />
            {errors.tags && <p className="text-red-500 text-xs italic">Please enter a title</p>}
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
            <select {...register("tags", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tags">
              <option value="">Select tags</option>
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



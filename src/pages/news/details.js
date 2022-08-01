import axios from 'axios';
import React from 'react';
import Layout from "../../components/Layout"
import { useQueryParam, StringParam } from "use-query-params";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import moment from 'moment';
import { getRecordById } from '../../services/crud.service';


export default function NewsDetails() {


  const projectTag = "zh2fEl4jSRwO6K5q";
  const tableName = "news";

  const [news, setNews] = React.useState({})
  const [id, setId] = useQueryParam("id", StringParam);
  React.useEffect(async () => {
    try {
      const response = await getRecordById(projectTag, tableName, [], id);
      setNews(response);
    }
    catch (error) {
      console.log(error);
    }
  }, [])


  return (
    <Layout>
      {/* center div */}
      <div className="flex justify-around">
        
        <div className="w-2/3">
          {/* render title as a bold  header */}
          <h1 className="text-4xl font-bold mb-4 mt-10">{news.title}</h1>

          {/* render the date as a small text. Render the date with moment.js.*/}
          <p className="text-sm text-gray-600 mb-12">
            {moment(news.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
          </p>
          <div className="w-2/3">
          <img src={news.thumbnail} alt={news.title} />
        </div>

          {/* draw a divider line with div*/}


          <div className="border-b-1 border-gray-400"></div>
          <div className="w-2/3 min-h-screen">
            <ReactMarkdown children={news.content || ""} remarkPlugins={[remarkGfm]} />
          </div>
        </div>
      </div>


    </Layout>
  )
}
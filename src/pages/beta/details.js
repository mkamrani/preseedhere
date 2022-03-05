import axios from 'axios';
import React from 'react';
import Layout from "../../components/Layout"
import { useQueryParam, StringParam } from "use-query-params";


import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'



import moment from 'moment';


export default function ProductDetails() {


  // get the product details from the server. Get the id from the query string id
  const [product, setProduct] = React.useState({})
  const [id, setId] = useQueryParam("id", StringParam);
  React.useEffect(async () => {
    const url = process.env.GATSBY_API_URL || 'http://localhost:8001';
    try {
      const response = await axios.get(`${url}/product/id/${id}`);
      setProduct(response.data);
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
          <h1 className="text-4xl font-bold mb-4 mt-10">{product.title}</h1>

          {/* render the date as a small text. Render the date with moment.js.*/}
          <p className="text-sm text-gray-600 mb-12">
            {moment(product.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
            </p>

          {/* draw a divider line with div*/}
          <div className="border-b-1 border-gray-400"></div>
          <div className="w-2/3 min-h-screen">
              <ReactMarkdown children={product.content || ""} remarkPlugins={[remarkGfm]} />
          </div>
        </div>
      </div>


    </Layout>
  )
}
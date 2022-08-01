import axios from 'axios';
import React from 'react';
import Layout from "../../components/Layout"
import { useQueryParam, StringParam } from "use-query-params";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import moment from 'moment';
import { getRecordById } from '../../services/crud.service';


export default function ProductDetails() {


  const projectTag = "zh2fEl4jSRwO6K5q";
  const tableName = "beta_products";

  // get the product details from the server. Get the id from the query string id
  const [product, setProduct] = React.useState({})
  const [id, setId] = useQueryParam("id", StringParam);
  React.useEffect(async () => {
    try {
      // const response = await axios.get(`${url}/product/id/${id}`);
      const response = await getRecordById(projectTag, tableName, [], id);
      setProduct(response);
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
          <div className="w-2/3">
          <img src={product.thumbnail} alt={product.title} />
        </div>

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
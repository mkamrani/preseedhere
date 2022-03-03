import axios from 'axios'
import React from 'react'
import Layout from '../../components/Layout'
import MainRowCard from '../../components/MainRowCard'
import Paginator from '../../components/Paginator'
import ProductRow from './ProductRow'

export default function BetaProduct() {

  // get the beta products from the server
  const fetchProducts = async (page, perPage) => {
    console.log(`page: ${page}, perPage: ${perPage}`);
    const url = process.env.GATSBY_API_URL || 'http://localhost:8001';
    try {
      const response = await axios.get(`${url}/product?Page=${page}&PerPage=${perPage}&Query=beta`);
      console.log(`response.data: ${JSON.stringify(response.data)}`);
      console.log(`headers: ${JSON.stringify(response.headers)}`);
      return { data: response.data, totalCount: response.headers['x-total-count'] };
    }
    catch (error) {
      console.log(error);
      return [];
    }
  }

  return (
    <Layout>
      <div className="mx-auto flex items-center justify-center m-20">
        Beta Products
      </div>
      <Paginator ToRender={ProductRow} fetchData={fetchProducts} perPage={10} />
    </Layout>
  )
}

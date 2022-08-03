import axios from 'axios'
import React from 'react'
import Layout from '../../components/Layout'
import MainRowCard from '../../components/MainRowCard'
import Paginator from '../../components/Paginator'
import ProductRow from './ProductRow'
import { callPublicInteraction } from '../../services/interaction.service'

export default function Product() {

  const projectTag = "zh2fEl4jSRwO6K5q";
  const tableName = "released_products";
  const endpoint = '32caa8f1-1eb2-4d9b-ae34-db0f46a24426';

  const fetchData = async (page, perPage) => {
    const response = await callPublicInteraction(endpoint, {});
    return { data: response || [], totalCount: response?.headers?.['x-total-count'] || 10 };
  }

  return (
    <Layout>
      <div className="mx-auto flex items-center justify-center m-20">
        Products
      </div>
      <Paginator ToRender={ProductRow} fetchData={fetchData} perPage={10} />
    </Layout>
  )
}

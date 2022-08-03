import axios from 'axios'
import React from 'react'
import Layout from '../../components/Layout'
import MainRowCard from '../../components/MainRowCard'
import Paginator from '../../components/Paginator'
import ProductRow from './ProductRow'
import { callPublicInteraction } from '../../services/interaction.service'

export default function BetaProduct() {

  const endpoint = '8074d8b8-e61b-4536-bb8f-1ba80be12e91';

  const fetchData = async (page, perPage) => {
    const response = await callPublicInteraction(endpoint, {});
    return { data: response || [], totalCount: response?.headers?.['x-total-count'] || 10 };
  }

  return (
    <Layout>
      <div className="mx-auto flex items-center justify-center m-20">
        Beta Products
      </div>
      <Paginator ToRender={ProductRow} fetchData={fetchData} perPage={10} />
    </Layout>
  )
}

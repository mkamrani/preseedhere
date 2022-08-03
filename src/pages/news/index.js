import axios from 'axios'
import React from 'react'
import Layout from '../../components/Layout'
import MainRowCard from '../../components/MainRowCard'
import Paginator from '../../components/Paginator'
import { callPublicInteraction } from '../../services/interaction.service'
import NewsRow from './NewsRow'

export default function News() {

  const endpoint = 'bd800c52-bdda-4ae6-b45b-347d102aee8b';

  const fetchData = async (page, perPage) => {
    const response = await callPublicInteraction(endpoint, {});
    return { data: response || [], totalCount: response?.headers?.['x-total-count'] || 10 };
  }

  return (
    <Layout>
      <div className="mx-auto flex items-center justify-center m-20">
        News
      </div>
      <Paginator ToRender={NewsRow} fetchData={fetchData} perPage={10} />
    </Layout>
  )
}

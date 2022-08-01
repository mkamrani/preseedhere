import axios from 'axios'
import React from 'react'
import Layout from '../../components/Layout'
import MainRowCard from '../../components/MainRowCard'
import Paginator from '../../components/Paginator'
import NewsRow from './NewsRow'
import {getRecords, updateRecord, deleteRecord, addRecord} from "../../services/crud.service";

export default function News() {

  const projectTag = "zh2fEl4jSRwO6K5q";
  const tableName = "news";

  const fetchData = async (page, perPage) => {
    const response = await getRecords(projectTag, tableName);
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

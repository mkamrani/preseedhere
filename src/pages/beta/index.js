import axios from 'axios'
import React from 'react'
import Layout from '../../components/Layout'
import MainRowCard from '../../components/MainRowCard'
import Paginator from '../../components/Paginator'
import ProductRow from './ProductRow'
import {getRecords, updateRecord, deleteRecord, addRecord} from "../../services/crud.service";

export default function BetaProduct() {

  const projectTag = "zh2fEl4jSRwO6K5q";
  const tableName = "beta_products";

  const fetchData = async (page, perPage) => {
    const response = await getRecords(projectTag, tableName);
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

import React from 'react'
import Layout from '../../components/Layout'
import MainRowCard from '../../components/MainRowCard'

export default function News() {
  return (
    <Layout>
      <div className="mx-auto flex items-center justify-center m-20">
        News
      </div>
      <MainRowCard />
      <MainRowCard />
      <MainRowCard />
    </Layout>
  )
}

import React from 'react'
import Layout from '../components/Layout'
import MainRowCard from '../components/MainRowCard'

export default function Ready() {
  return (
    <Layout>
      <div className="mx-auto flex items-center justify-center m-20">
        List of products ready to be used in production
      </div>
      <MainRowCard />
      <MainRowCard />
      <MainRowCard />
    </Layout>
  )
}

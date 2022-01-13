import React from 'react'
import Layout from '../components/Layout'
import MainRowCard from '../components/MainRowCard'

export default function Beta() {
  return (
    <Layout>
      <div className="mx-auto flex items-center justify-center m-20">
        List of products in their public bets phase
      </div>
      <MainRowCard />
      <MainRowCard />
      <MainRowCard />
    </Layout>
  )
}

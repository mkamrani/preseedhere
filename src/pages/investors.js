import React from 'react'
import Layout from '../components/Layout'
import MainRowCard from '../components/MainRowCard'

export default function Investors() {
  return (
    <Layout>
      <div className="mx-auto flex items-center justify-center m-20">
        List of investors
      </div>
      <MainRowCard />
      <MainRowCard />
      <MainRowCard />
    </Layout>
  )
}

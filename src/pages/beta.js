import React from 'react'
import Layout from '../components/Layout'
import MainRowCard from '../components/MainRowCard'

export default function Beta() {
  return (
    <Layout>
      <div className="mx-auto flex items-center justify-center m-20">
        List of products in their public bets phase
      </div>
      <div className="mx-auto flex items-left justify-center m-20">
        <div class="box pt-6">
          <div class="box-wrapper">
            <div class=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
              <button class="outline-none focus:outline-none"><svg class=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
              <input type="search" name="" id="" placeholder="search..." x-model="q" class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" />
              <div class="select">
                <select name="" id="" x-model="image_type" class="text-sm outline-none focus:outline-none bg-transparent">
                  <option value="all" selected>All</option>
                  <option value="photo">B2B</option>
                  <option value="illustration">B2C</option>
                  <option value="vector">xyz</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainRowCard />
      <MainRowCard />
      <MainRowCard />
    </Layout >
  )
}

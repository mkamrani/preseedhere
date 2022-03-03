import axios from 'axios'
import React from 'react'
import Layout from '../../components/Layout'
import MainRowCard from '../../components/MainRowCard'
import Paginator from '../../components/Paginator'
import NewsRow from './NewsRow'

export default function News() {

  // get the news from the server
  const [news, setNews] = React.useState([])
  React.useEffect(async () => {
    const url = process.env.GATSBY_API_URL || 'http://localhost:8001';
    try {
      const response = await axios.get(`${url}/news`);
      setNews(response.data);
    }
    catch (error) {
      console.log(error);
    }
  }, [])

  const fetchNews = async (page, perPage) => {
    console.log(`page: ${page}, perPage: ${perPage}`);
    const url = process.env.GATSBY_API_URL || 'http://localhost:8001';
    try {
      const response = await axios.get(`${url}/news?Page=${page}&PerPage=${perPage}`);
      console.log(`response.data: ${JSON.stringify(response.data)}`);
      console.log(`headers: ${JSON.stringify(response.headers)}`);
      return {data: response.data, totalCount: response.headers['x-total-count']};
    }
    catch (error) {
      console.log(error);
      return [];
    }
  }

  return (
    <Layout>
      <div className="mx-auto flex items-center justify-center m-20">
        News
      </div>
      <Paginator ToRender={NewsRow} fetchData={fetchNews} perPage={10}/>        
    </Layout>
  )
}

import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// TODO: Get the data at build time
export default function ChangeLog() {
  const [changeLog, setChangeLog] = useState('')
  const repo = 'mkamrani/preseedhere';


  useEffect(() => {
    // get the changelog from GitHub api
    fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/vnd.github.v3+json',
      }),
      mode: 'cors',
      cache: 'default',
    })
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setChangeLog(resultData.body)
      }) // set data for the number of stars
  }, [])
  return (
    <Layout>
      <div className="mx-auto flex items-center justify-center m-20">
        {!changeLog ? <div>Change log not available now!</div> :
          <div>
            <ReactMarkdown children={changeLog} remarkPlugins={[remarkGfm]} />
          </div>
        }
      </div>
    </Layout>
  )
}

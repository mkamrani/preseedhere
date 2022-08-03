import { Link } from 'gatsby'
import React from 'react'

export default function ProductRow({ thumbnail, title, id }) {
  return (
    <div className="mx-auto flex items-center justify-center m-20 max-h-200">
      <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
        <div className="flex flex-col w-full md:flex-row">
          <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-200 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
            <div className="md:text-3xl">
              <img src={thumbnail} alt="thumbnail" />
            </div>
          </div>
          {/* <div className="p-4 font-normal text-gray-800 md:w-3/4">
            <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800 text-center">{title}</h1>
          </div> */}
          <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-black font-bold text-xl mb-2">
                <Link to={`/ready/details?id=${id}`}>{title}</Link>
              </div>
              <p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
            {/* <div className="flex items-center">
              <div className="text-sm">
                <p className="text-black leading-none">Jonathan Reinink</p>
                <p className="text-grey-dark">Aug 18</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

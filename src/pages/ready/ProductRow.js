import React from 'react'

export default function NewsRow({thumbnail, title, id}) {
  return (
    <div className="mx-auto flex items-center justify-center m-20">
      <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
        <div className="flex flex-col w-full md:flex-row">
          <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
            <div className="md:text-3xl">
              <img src={thumbnail} alt="thumbnail" />
            </div>
          </div>
          <div className="p-4 font-normal text-gray-800 md:w-3/4">
            <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

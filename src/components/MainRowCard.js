import React from 'react'

export default function MainRowCard({thumbnail, title, likes}) {
  return (
    <div className="mx-auto flex items-center justify-center m-20">
      <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
        <div className="flex flex-col w-full md:flex-row">
          <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
            <div className="md:text-3xl">Logo</div>
          </div>
          <div className="p-4 font-normal text-gray-800 md:w-3/4">
            <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">Awesome startup!</h1>
            <p className="leading-normal text-2xl">Slogan: We are the X of Y</p>
            <div className="flex flex-row items-center mt-4 text-gray-700">
              <div className="w-1/2">
                We build what you need the most
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
            <div className="md:text-3xl">100</div>
            <div className="md:text-6xl text-red-500	">&hearts;	</div>
          </div>
        </div>
      </div>
    </div>
  )
}

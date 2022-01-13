import React from 'react'

export default function Footer() {
  return (
    <footer className="flex justify-center px-4 text-gray-100 bg-gray-800">
      <div className="container py-6">
        <h1 className="text-center text-lg font-bold lg:text-2xl">
          Get early access, <br/> before anyone else!
        </h1>

        <div className="flex justify-center mt-6">
          <div className="bg-white rounded-lg">
            <div className="flex flex-wrap justify-between md:flex-row">
              <input type="email" className="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none" placeholder="Enter your email"/>
                <button className="w-full m-1 p-2 text-sm bg-gray-800 rounded-lg font-semibold uppercase lg:w-auto">subscribe</button>
            </div>
          </div>
        </div>

        <hr className="h-px mt-6 bg-gray-700 border-none"/>

          <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
            <div>
              <a href="#" className="text-xl font-bold">PreSeedHere</a>
            </div>
            <div className="flex mt-4 md:m-0">
              <div className="-mx-4">
                <a href="#" className="px-4 text-sm">About</a>
                <a href="#" className="px-4 text-sm">Blog</a>
                <a href="#" className="px-4 text-sm">News</a>
                <a href="#" className="px-4 text-sm">Contact</a>
              </div>
            </div>
          </div>
      </div>
    </footer>
  )
}

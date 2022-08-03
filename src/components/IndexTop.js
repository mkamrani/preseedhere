import { Link } from 'gatsby'
import React from 'react'

export default function IndexTop() {
  return (
    <section>
      <div className="juice3 bg-gray-100 bg-opacity-90 py-10">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row">
          <div className="juice relative lg:w-2/3 rounded-xl bg-secondary-lite bg-cover p-10">
            <p className="text-secondary text-4xl font-semibold pb-4">Community of pre-seed startups</p>
            <p className="text-secondary text-2xl font-semibold pb-4">Here for you when you need it the most</p>
            <p className="text-secondary text-2xl font-semibold">Let's make it fair and not compete with funded startups just launching their products!!</p>
            <div className="flex mt-6">
              <button
                type="button"
                // className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <Link
                  to={'/auth/register'}
                  className='hidden lg:block bg-green-400 text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Claim your spot now
                </Link>
              </button>
            </div>
          </div>
          <div className="juice2 m-6 lg:mt-0 lg:ml-6 lg:w-1/3 rounded-xl bg-primary-lite bg-cover p-16">
            <div className="max-w-sm">
              <p className="text-5xl font-semibold ">Reach your full potential</p>
              {/* <p className="mt-8 font-semibold">Syncthetic seeds<br />2.0 OZ</p>
                <button className="mt-20 bg-white font-semibold px-8 py-2 rounded">Shop Now</button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

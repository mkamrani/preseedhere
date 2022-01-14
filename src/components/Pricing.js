import React from 'react'

import Investor from '../images/investor.jpg'

export default function Pricing() {
  return (
    <header>

      <div class="bg-green-100 py-14">
        <h3 class="text-2xl tracking-widest text-green-600 text-center">Pricing</h3>

        <div class="md:flex md:justify-center md:space-x-8 md:px-14">

          <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div class="w-sm">
              <img class="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3b242447f922540fbe750cab/fdf.jpg" alt="" />
              <div class="mt-4 text-green-600 text-center">
                <h1 class="text-xl font-bold">Founder</h1>
                <p class="mt-4 text-gray-600">$49.90 For posting a new product on Released list</p>
                <p class="mt-4 text-gray-600">$19.90 For posting a new product on Beta list</p>
                <hr />
                <p class="mt-4 text-gray-600">Subscribe now and get %70 discount (next 2 weeks)</p>
                <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">Soon</button>
              </div>
            </div>
          </div>

          <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div class="w-sm">
              {/* <img class="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg" alt="" /> */}
              <img class="w-64" src={Investor} alt="" />
              <div class="mt-4 text-green-600 text-center">
                <h1 class="text-xl font-bold">Investor</h1>
                <p class="mt-4 text-gray-600">$1499.90 Annual subscription</p>
                <hr />
                <p class="mt-4 text-gray-600">Listing on Investors list</p>
                <p class="mt-4 text-gray-600">Access to analytics data</p>
                <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">Soon</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}

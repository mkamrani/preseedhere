import React from 'react'

export default function IndexTop() {
  return (
    <section>
      <div class="juice3 bg-gray-100 bg-opacity-90 py-10">
        <div class="container mx-auto px-4 flex flex-col lg:flex-row">
          <div class="juice relative lg:w-2/3 rounded-xl bg-secondary-lite bg-cover p-10">
            <p class="text-secondary text-4xl font-semibold">Here for you <br />when you need it the most</p>
            <p class="max-w-xs  mt-20 pr-10 text-secondary font-semibold mt-8">Subscribe for early access</p>
            {/* <input type="email" className="rounded-xl m-3 p-5 appearance-none text-gray-700 text-sm focus:outline-none" placeholder="Enter your email"/>
              <button class="mt-20 bg-cta-btn font-semibold px-8 py-2 rounded">Subscribe</button> */}
            <div className="flex mt-6">
              <div className="bg-white rounded-lg">
                <div className="flex flex-wrap justify-between md:flex-row">
                  <input type="email" className="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none" placeholder="Enter your email" />
                  <button className="w-full m-1 p-2 text-sm bg-cta-btn rounded-lg font-semibold  lg:w-auto">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
          <div class="juice2 m-6 lg:mt-0 lg:ml-6 lg:w-1/3 rounded-xl bg-primary-lite bg-cover p-16">
            <div class="max-w-sm">
              <p class="text-5xl font-semibold ">Reach your full potential</p>
              {/* <p class="mt-8 font-semibold">Syncthetic seeds<br />2.0 OZ</p>
                <button class="mt-20 bg-white font-semibold px-8 py-2 rounded">Shop Now</button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

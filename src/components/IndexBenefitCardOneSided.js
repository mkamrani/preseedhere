import React from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function IndexBenefitCardOneSided({title, body, children, reverse}) {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        {/* <div class="xl:flex flex-row-reverse xl:items-center xL:-mx-4"> */}
        <div className={classNames(
                          reverse ? 'flex-row-reverse' : '',
                          'xl:flex xl:items-center xL:-mx-4'
                        )}>
          <div class="xl:w-2/3 xl:mx-4">
            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">{title}</h1>

            <p class="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
              {body}
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8  xl:w-1/3 md:grid-cols-2">
            <div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

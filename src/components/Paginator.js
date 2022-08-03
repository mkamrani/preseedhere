import React, { useState } from "react";

export default function Paginator({ fetchData, ToRender, props, perPage = 5 }) {
  const [page, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  // fetch data on first render
  React.useEffect(async () => {
    const fetched = await fetchData(page, perPage);
    setData(fetched.data);
    console.log(`fetched.data: ${JSON.stringify(fetched.data)}`);
    setTotal(fetched.totalCount);
    setLoading(false);
  }, [page]);

  const handlePageChange = (page) => {
    setLoading(true);
    setCurrentPage(page);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <ToRender {...item} {...props} />
        </div>
      ))}
      <PaginatorControls
        isLoading={loading}
        currentPageLength={data.length}
        page={page}
        perPage={perPage}
        total={total}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

function PaginatorControls({ page, perPage, total, currentPageLength, onPageChange, isLoading }) {
  if (!total) {
    return null;
  }
  const totalPages = Math.ceil(total / perPage);
  // set pages to an array of numbers from 0 to total
  const pages = Array.from(Array(totalPages).keys());
  // const pages = Array.from(Array(totalPages).keys()).map((i) => i + 1);

  console.log(`pages: ${JSON.stringify(pages)}`);

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          <button
            className={`${page === 0 ? "opacity-50" : ""}`}
            disabled={page === 0 || isLoading}
            onClick={() => onPageChange(page - 1)}>
            Previous
          </button>
        </a>
        <li
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          <button
            disabled={page === totalPages - 1 || isLoading}
            onClick={() => onPageChange(page + 1)}>
            Next
          </button>
        </li>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{page * perPage + 1}</span> to <span className="font-medium">{(page * perPage) + (Math.min(perPage, currentPageLength))}</span> of{' '}
            <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <li
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
                <button
                  className={`${page === 0 ? "opacity-50" : ""}`}
                  disabled={page === 0 || isLoading}
                  onClick={() => onPageChange(page - 1)}>
                  Previous
                </button>
            </li>
            {pages.map((p) => (
              <li
                key={p}
                href="#"
                className={
                  p === page ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"}
              >
                <button
                  disabled={p === page || isLoading}
                 onClick={() => onPageChange(p)}>{p + 1}</button>
              </li>
            ))}
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">
                </span>
                <button
                className={`${page === totalPages - 1 ? "opacity-50" : ""}`}
                  disabled={page === totalPages - 1 || isLoading}
                  onClick={() => onPageChange(page + 1)}>
                  Next
                </button>
              
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}


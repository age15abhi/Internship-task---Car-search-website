import React from "react";

const Pagination = ({ carPerPage, totalCars, paginate }) => {
  const pageNumbers = [];
  console.log(pageNumbers);

  console.log(totalCars);
  for (let i = 1; i <= Math.ceil(totalCars / carPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="self-end">
      <ul class="flex items-center -space-x-px h-8 text-sm ">
        {" "}
        {pageNumbers.map(number => (
          <li key={number}>
            <a
              onClick={() => paginate(number)}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

import React from "react";

export default function Pagination({
  countriesPerPage,
  countries,
  pagination,
  currentPage,
}) {
  const pageNumbers = [];
  const math = Math.ceil((countries + 1) / countriesPerPage);

  for (let i = 1; i <= math; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li className={"paginado"} key={number}>
              <button
                className={
                  currentPage === number ? "activeBoton" : "paginadoButton"
                }
                onClick={() => pagination(number)}
              >
                {number}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
}

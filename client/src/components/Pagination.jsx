import React from "react";

export default function Pagination ({countriesPerPage, countries, pagination}){
    const pageNumbers= []

    for(let i=0; i<=Math.ceil(countries/countriesPerPage); i++){      
        pageNumbers.push(i+1)
    }
    return(
        <nav>
            <ul>
                {pageNumbers &&
                pageNumbers.map(number =>(
                    <li className={"paginado"} key={number}>
                        <button className="paginadoButton" onClick={()=> pagination(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
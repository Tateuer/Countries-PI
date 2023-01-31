import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  orderAlphabetical,
  orderContinent,
  orderPopulation,
  getActivities,
  byActivity,
} from "../redux/actions";
import Card from "./Card";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Search from "./Search";

export default function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.filteredCountries);
  const activities = useSelector((state) => state.activities);
  
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;
  const countriesPerFirstPage = 9
  

  const start = currentPage === 1 ? countriesPerFirstPage  : (currentPage * countriesPerPage) -1 ;
  const end = currentPage === 1 ? 0 : (start - countriesPerPage);
  const currentCountries = countries.slice(end, start);


  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  function handleOrderAbc(e) {
    e.preventDefault();
    dispatch(orderAlphabetical(e.target.value));
  }

  function handlePopulation(e) {
    e.preventDefault();
    dispatch(orderPopulation(e.target.value));
  }

  function handleContinent(e) {
    e.preventDefault();
    dispatch(orderContinent(e.target.value));
  }

  function handleFilteredActivity(e){
    e.preventDefault();
    dispatch(byActivity(e.target.value))
  }

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div>
      <Search />
      <div className="title">
      <Link  to='/activities'><button className="activitybutton">Add Activity</button></Link>
        <h1>
          «THE WORLD IS A BOOK, AND THOSE WHO DON'T TRAVEL READ ONLY ONE PAGE»
        </h1>
        <h3>HENRY COUNTRIES PI</h3>
      </div>
      <div className="filtros">
        <div className="ordertext">
          <span className="inputfiltros">Order Alphabetical</span>
          <select className="orderbutton" onChange={handleOrderAbc}>
            <option value="ascendente">A-Z</option>
            <option value="descendente">Z-A</option>
          </select>
        </div>
        <div className="ordertext">
          <span className="inputfiltros">Order Population</span>
          <select className="orderbutton" onChange={handlePopulation}>
            <option value="ascendente">Desc</option>
            <option value="descendente">Asc</option>
          </select>
        </div>
        <div className="ordertext">
          <span className="inputfiltros">Order Continent</span>
          <select className="orderbutton" onChange={handleContinent}>
            <option value="all">All</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className="ordertext">
        <span className="inputfiltros">Activities</span>
          <select className="orderbutton" onChange= {(e) => handleFilteredActivity(e)}>
                <option value="all">All</option>
                     {activities?.map((country) => {
                       return <option key={country.id} value={country.name}>{country.name}</option>
                    })}
         </select>
        </div>
      </div>
      <button
        className="reloadbutton"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Reload all
      </button>
      <div >
        {
          <Pagination
            countriesPerPage={countriesPerPage}
            countries={countries.length}
            pagination={pagination}
          />
        }
        <div className="countries">
        {currentCountries?.map((el) => {
          return (
            <Fragment key={el.id}>   
            <div className="country"> 
              <Link to={`/home/${el.id}`}>
                <Card
                  name={el.name}
                  flag={el.flag}
                  continent={el.continent}
                  id={el.id}
                />
              </Link>
            </div> 
            </Fragment>
          );
        })}
        </div>
      </div>
    </div>
  );
}


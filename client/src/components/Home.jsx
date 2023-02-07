import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getActivities } from "../redux/actions";

import Card from "./Card";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Search from "./Search";
import Filters from "./Filters";

export default function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;
  const countriesPerFirstPage = 9;

  const start =
    currentPage === 1
      ? countriesPerFirstPage
      : currentPage * countriesPerPage - 1;
  const end = currentPage === 1 ? 0 : start - countriesPerPage;
  const currentCountries = countries.slice(end, start);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
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
        <Link to="/activities">
          <button className="activitybutton">Add Activity</button>
        </Link>
        <h1>
          «THE WORLD IS A BOOK, AND THOSE WHO DON'T TRAVEL READ ONLY ONE PAGE»
        </h1>
      </div>
      <Filters />
      <button
        className="reloadbutton"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {" "}
        Reload all
      </button>
      <div>
        {
          <Pagination
            countriesPerPage={countriesPerPage}
            countries={countries.length}
            pagination={pagination}
            currentPage={currentPage}
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

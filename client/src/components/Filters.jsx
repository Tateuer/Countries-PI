import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  orderAlphabetical,
  orderContinent,
  orderPopulation,
  byActivity,
  // forActivity,
} from "../redux/actions";

const Filters = (props) => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

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
    props.setCurrentPage(1)
  }

  function handleFilteredActivity(e) {
    e.preventDefault();
    dispatch(byActivity(e.target.value));
    props.setCurrentPage(1);
  }
  //     function handleFilteredActivitySeason(e){
  //        e.preventDefault();
  //        dispatch(forActivity(e.target.value))
  //      }

  return (
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
        <select
          className="orderbutton"
          onChange={(e) => handleFilteredActivity(e)}
        >
          <option value="all">All</option>
          {activities?.map((country) => {
            return (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            );
          })}
        </select>
      </div>
      {/* <div className="ordertext">
//         <span className="inputfiltros">Activities</span>
//           <select className="orderbutton" onChange= {(e) => handleFilteredActivitySeason(e)}>
//                 <option value="all">All</option>
//                      {activities?.map((country) => {
//                        return <option key={country.id} value={country.season} >{country.season}</option>
//                     })}
                    
//          </select>
//         </div> */}
    </div>
  );
};

export default Filters;

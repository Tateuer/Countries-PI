import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function CountryDetail() {
  const [country, setCountry] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    axios.get(`/countries/${id}`).then((respuesta) => {
      setCountry(respuesta.data);
    });
  }, [id]);
  return (
    <div>
      <div className="countryDetail">
        {country ? (
          <div className="countryDetailDiv">
            <img className="detailflag" src={country.flag} alt="main-img" />
            <h2>{country.name}</h2>
            <h3>
              <span className="spandetail">Code ID:</span>
              {country.id}
            </h3>
            <h3>
              <span className="spandetail">Population:</span>
              {country.population}
            </h3>
            <h3>
              <span className="spandetail">Continent:</span>
              {country.continent}
            </h3>
            <h3>
              <span className="spandetail">Capital:</span>
              {country.capital}
            </h3>
            <h3>
              <span className="spandetail">Subregion:</span>
              {country.subregion}
            </h3>
            <h3>
              <span className="spandetail">Area:</span>
              {country.area} km2
            </h3>
            <h3>
              <span className="spandetail">Activities:</span>
              {country.Activities?.map(
                (
                  activity /*{country.Activities && `(${country.Activities.length})`}*/
                ) => (
                  <div>
                    <h5>{activity.name}</h5>
                    <h5>Difficulty:{activity.difficulty}</h5>
                    <h5>{activity.duration}hs</h5>
                    <h5>{activity.season}</h5>
                  </div>
                )
              )}
            </h3>

            <Link to="/home">
              <button className="detailbutton">Back to home</button>
            </Link>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </div>
  );
}

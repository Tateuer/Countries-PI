import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getActivities, getCountries } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export function validate(form) {
  let error = {};

  if (!form.name) {
    error.name = "Name is required";
  } else if (
    /[0-9]/.test(form.name) ||
    /[!@#$%^&*(),.?":{}|<>]/.test(form.name)
  ) {
    error.name = "Invalid name";
  }
  if (!form.difficulty) {
    error.difficulty = "Difficulty required";
  } else if (form.difficulty < 1 || form.difficulty > 5) {
    error.difficulty = "The difficulty must be between 1 and 5";
  }
  if (!form.season) {
    error.season = "Must enter a season";
  } else if (
    !["summer", "spring", "winter", "autumn"].includes(
      form.season.toLowerCase()
    )
  )
    error.season =
      "You must enter a valid season, summer, autumn, spring or winter";

  if (!form.countries.length) {
    error.countries = "You have to select a country";
  }

  if (!form.duration) {
    error.duration = "Duration required";
  } else if (form.duration < 1 || form.duration > 24) {
    error.duration = "The duration must be between 1 and 24 hours";
  }

  return error;
}

export default function AddActivities() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [error, setError] = useState({});

  const [form, setInput] = useState({
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
    countries: [],
  });

  function handleChange(e) {
    setInput({
      ...form,
      [e.target.name]: e.target.value,
    });
    let objError = validate({ ...form, [e.target.name]: e.target.value });
    setError(objError);
  }

  function handleSelect(e) {
    if (e.target.value) {
      setInput({
        ...form,
        countries: [...form.countries, e.target.value],
      });
    }
  }

  function handleRemoveCountry(countryId) {
    setInput({
      ...form,
      countries: form.countries.filter((id) => id !== countryId),
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(validate(form));
    if (
      form.name &&
      form.difficulty &&
      form.duration &&
      form.season &&
      form.countries.length &&
      !Object.keys(error).length
    ) {
      await axios({
        method: "post",
        url: "/activities/",
        data: form,
      });
      alert("Activity has been created successfully");
    } else {
      alert("All fields are required!!");
    }
  }

  useEffect(() => {
    dispatch(getActivities());
    dispatch(getCountries);
  }, [dispatch]);

  return (
    <div className="fondo-form">
      <div className="cardActivity">
        <Link to="/home">
          <button className="activities-button">Back</button>
        </Link>
        <h1 className="activities-header">CREATE ACTIVITY</h1>
        <form onSubmit={handleSubmit} className="activities-form">
          <div className="activities-form-row">
            <label className="activities-form-label">Country</label>
            <select
              onChange={handleSelect}
              className="activities-select"
              defaultValue="default"
            >
              <option value="">Select a Country</option>
              {countries
                ?.sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((country) => {
                  return (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  );
                })}
            </select>

            <ul className="activities-list">
              {form.countries.map((countryId) => (
                <li key={countryId}>
                  {countries.find((country) => country.id === countryId).name}
                  <button
                    className="removeCountry"
                    onClick={() => handleRemoveCountry(countryId)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>

            {error.countries && <p>{error.countries}</p>}
          </div>
          <div className="activities-form-row">
            <label className="activities-form-label">Name</label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              value={form.name}
              className="activities-form-input"
              placeholder="Enter the name"
            />
            {error.name && <p>{error.name}</p>}
          </div>
          <div className="activities-form-row">
            <label className="activities-form-label">Difficulty</label>
            <input
              onChange={handleChange}
              name="difficulty"
              type="text"
              min="1"
              max="5"
              value={form.difficulty}
              className="activities-form-input"
            />
            {error.difficulty && <p>{error.difficulty}</p>}
          </div>
          <div className="activities-form-row">
            <label className="activities-form-label">Duration</label>
            <input
              onChange={handleChange}
              name="duration"
              type="text"
              min="1"
              max="24"
              value={form.duration}
              className="activities-form-input"
            />
            {error.duration && <p>{error.duration}</p>}
          </div>
          <div className="activities-form-row">
            <label className="activities-form-label">Season</label>
            <input
              onChange={handleChange}
              name="season"
              type="text"
              value={form.season}
              className="activities-form-input"
              placeholder="Select the season"
            />
            {error.season && <p>{error.season}</p>}
          </div>
          {Object.keys(error).length === 0 && (
            <button type="submit" className="activities-submit">
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

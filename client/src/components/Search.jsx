import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountries } from "../redux/actions";

export default function Search() {
  const [search, setSearch] = useState("");
  let dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchCountries(search));
  }

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <div className="busquedafiltros">
      <form onSubmit={handleSubmit}>
        <input
          className="searchinput"
          type="text"
          onChange={handleChange}
          value={search}
          placeholder="Name of country"
        />
        <input className="searchbutton" type="submit" value="Search" />
      </form>
    </div>
  );
}

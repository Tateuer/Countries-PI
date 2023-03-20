import "./App.css";
import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./components/Home";
import AddActivities from "./components/AddActivities";
import CountryDetail from "./components/CountryDetail";
import axios from "axios";

axios.defaults.baseURL = "countries-pi-production-7bdd.up.railway.app/";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/activities" component={AddActivities} />
          <Route exact path="/home/:id" component={CountryDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

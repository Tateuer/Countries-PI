import { Link } from "react-router-dom";
import React from "react";

const Landing = () => {
    // Lógica y funcionalidad de la pantalla de países
    //traer lo de la api (line 8)
    return (
      <div className="landingcontainer">
        <div className="landinggroup">
        <div className="landing">
          <h1>Welcome</h1>
         <h3>To Milton Amelino COUNTRIES PI</h3>
        </div>
        <div className="landing2">
          <div>
            <h3>Click to enter the site</h3>
          </div>
            <div>
          <Link to="/home">
         <button className="landingbutton">Enter</button>
          </Link>
          </div>
        </div>
        </div>
      </div>
    )
  }
  
  export default Landing;
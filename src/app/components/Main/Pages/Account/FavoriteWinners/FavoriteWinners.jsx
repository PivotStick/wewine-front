import React from "react";

import ReturnContent from "../ReturnContent";
// import Winer from "./Winer";

const FavoriteWinners = ({ changeTab }) => {

  return(
    <section className="winers">
      {/* <div className="winers_opacity"> */}
        <ReturnContent changeTab={changeTab} newTab="" />
        {/* <div className="container">
          <h1>Mes Winers Favoris</h1>
          <div className="winers_grid">
            <Winer/>
            <Winer/>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default FavoriteWinners;
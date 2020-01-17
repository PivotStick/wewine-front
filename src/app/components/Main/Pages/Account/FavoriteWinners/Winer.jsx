import React from "react";

const Winer = (positionImgProfil, componentDidMount) => {

  positionImgProfil = index => {
    const img_profil = document.querySelector(".img_profil");
    if (index % 2 === 0) {
      img_profil.className = "img_profil_right";
    } else {
      img_profil.className = "img_profil_left";
    }
  };
  componentDidMount = () => {
    this.positionImgProfil(this.props.id);
  };

  return (

    <section className="winer">
    
      {/* <img className="img_profil" src={id1} alt="" /> */}
      <h2>Jorlan Dubois</h2>
      <p className="winer_bottle"> 50 bouteilles dans sa cave</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button className="button">Voir son profil</button>
    
    </section>

  );
}

export default Winer;



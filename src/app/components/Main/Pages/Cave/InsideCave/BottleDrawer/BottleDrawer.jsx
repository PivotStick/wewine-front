import React, { Component } from "react";
import Bottle from "../Bottle/Bottle";

import Montagne_Collioure from "./assets/Montagne_Collioure.png";
import Blanc_2013 from "./assets/Blanc_2013.png";
import Carmin_Brillant from "./assets/Carmin_Brillant.png";
import Gigondas from "./assets/Gigondas.png";
import Bourgogne_Chardonnay from "./assets/Bourgogne_Chardonnay.png";
import Rose_et_Or from "./assets/Rose_et_Or.png";
import Thevenet_Fils from "./assets/Thevenet_Fils.png";
import Clos_Cibonne from "./assets/Clos_Cibonne.png";
import Chateau_dEsclans from "./assets/Chateau_dEsclans.png";

import "./style.scss";
import id1 from "./assets/id1.jpg";

export default class WinerProfil extends Component {
  state = {
    user: {
      id: 1,
      img: id1,
      first_name: "Jorlan",
      last_name: "Dubois",
      nbr_bottle: "50",
      commun_nbr_bottle: "10",
      description:
        "Etudiant en ingénerie, je suis un petit amateur de vin. Je serais ravi d'en apprendre davantages sur l'œnologie grâce à tous les bons connaisseurs de cette application."
    },
    rouge: [
      {
        id: 3,
        img: Montagne_Collioure,
        name: "Montagne Collioure",
        domain: "Domaine de la Rectorie",
        nbr: "3"
      },
      {
        id: 5,
        img: Carmin_Brillant,
        name: "Carmin Brillant",
        domain: "Clos de Caveau",
        nbr: "9"
      },
      {
        id: 6,
        img: Gigondas,
        name: "Gigondas",
        domain: "Raspail-Ay",
        nbr: "1"
      }
    ],
    blanc: [
      {
        id: 4,
        img: Blanc_2013,
        name: "Blanc 2013",
        domain: "Villa Baulieu",
        nbr: "7"
      },
      {
        id: 7,
        img: Bourgogne_Chardonnay,
        name: "Bourgogne Chardonnay",
        domain: "Michel Bouzereau",
        nbr: "8"
      },
      {
        id: 9,
        img: Thevenet_Fils,
        name: "Thevenet & Fils",
        domain: "La Bongran Cuvée",
        nbr: "2"
      }
    ],
    rose: [
      {
        id: 8,
        img: Rose_et_Or,
        name: "Rosé et Or",
        domain: "Minuty",
        nbr: "2"
      },
      {
        id: 10,
        img: Clos_Cibonne,
        name: "Clos Cibonne",
        domain: "Cuvée Prestige Caroline Rosé",
        nbr: "1"
      },
      {
        id: 12,
        img: Chateau_dEsclans,
        name: "Château d'Esclanse",
        domain: "Whispering Angel Rosé",
        nbr: "10"
      }
    ]
  };

  componentDidMount = () => {
    this.changeTabs("blanc");
  }

  changeTabs = targetColor => {
    switch (targetColor) {
      case "blanc":
        console.log("tagetBlanc");
        document.querySelector("#activeBlanc").classList.add("change_active");
        document
          .querySelector("#activeRouge")
          .classList.remove("change_active");
        document.querySelector("#activeRose").classList.remove("change_active");
        document.querySelector("#blanc").style.display = "block";
        document.querySelector("#rouge").style.display = "none";
        document.querySelector("#rose").style.display = "none";
        break;
      case "rouge":
        console.log("targetRouge");
        document.querySelector("#activeRouge").classList.add("change_active");
        document
          .querySelector("#activeBlanc")
          .classList.remove("change_active");
        document.querySelector("#activeRose").classList.remove("change_active");
        document.querySelector("#blanc").style.display = "none";
        document.querySelector("#rouge").style.display = "block";
        document.querySelector("#rose").style.display = "none";
        break;
      case "rose":
        console.log("targetRose");
        document.querySelector("#activeRose").classList.add("change_active");
        document
          .querySelector("#activeBlanc")
          .classList.remove("change_active");
        document
          .querySelector("#activeRouge")
          .classList.remove("change_active");
        document.querySelector("#blanc").style.display = "none";
        document.querySelector("#rouge").style.display = "none";
        document.querySelector("#rose").style.display = "block";
        break;
    }
  };

  changeQty = (targetButton, value = 0) => {
    switch (targetButton) {
      case "open":
        document.querySelector(".bottle_changeqty").style.display = "block";
        break;
      case "close":
        document.querySelector(".bottle_changeqty").style.display = "none";
        document.querySelector(".bottle_infonbr_nbr").textContent = value;
        break;
    }




  };

  render() {
    return (
      <div className="winer_profil container">
        <div className="winer_profil_main">

          <div className="tab">
            <ul className="tab_list">
              <li
                id="activeBlanc"
                className="d-flex j-cont-center a-item-center change_active"
                onClick={e => {
                  let targetColor = "blanc";
                  this.changeTabs(targetColor);
                }}
              >
                Blanc
              </li>
              <li
                id="activeRouge"
                className="d-flex j-cont-center a-item-center"
                onClick={e => {
                  let targetColor = "rouge";
                  this.changeTabs(targetColor);
                }}
              >
                Rouge
              </li>
              <li
                id="activeRose"
                className="d-flex j-cont-center a-item-center"
                onClick={e => {
                  let targetColor = "rose";
                  this.changeTabs(targetColor);
                }}
              >
                Rosé
              </li>
            </ul>
            <div className="tab_content">
              <div id="blanc">
                <h2>Bouteilles de Blancs</h2>
                <div className="grid_bottle">
                  {this.state.blanc.map(bottle => {
                    return <Bottle
                      key={bottle.id}
                      infosBottle={bottle}
                      changeQty={this.changeQty} />;
                  })}
                </div>
              </div>
              <div id="rouge" className="d-none">
                <h2>Bouteilles de Rouges</h2>
                <div className="grid_bottle">
                  {this.state.rouge.map(bottle => {
                    return <Bottle
                      key={bottle.id}
                      infosBottle={bottle}
                      changeQty={this.changeQty} />;
                  })}
                </div>
              </div>
              <div id="rose" className="d-none">
                <h2>Rosés</h2>
                <div className="grid_bottle">
                  {this.state.rose.map(bottle => {
                    return <Bottle
                      key={bottle.id}
                      infosBottle={bottle}
                      changeQty={this.changeQty}
                    />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

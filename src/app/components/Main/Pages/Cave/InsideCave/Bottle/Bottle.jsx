import React, { Component } from "react";
import "./style.scss";

class OtherBottle extends Component {
  state = {};

  render() {
    return (
      <div className="bottle" id={this.props.infosBottle.id}>
        <div className="bottle_img">
          <img src={this.props.infosBottle.img} alt="bouteille de vin" />
        </div>
        <div className="bottle_info">
          <h3 className="bottle_info_name">{this.props.infosBottle.name}
            <br></br>
            <span className="bottle_info_domain">{this.props.infosBottle.domain}</span>
          </h3>
        </div>
        <div className="bottle_infonbr">
          <p className="bottle_infonbr_nbr">{this.props.infosBottle.nbr}</p>
          <p>Boutilles</p>
        </div>
        <p className="bottle_qty" onClick={e => {
          e.currentTarget.nextSibling.style.display = "block";
        }}><i>Changer la quantité</i></p>

        <div className="bottle_changeqty">
          <input name="new_qty" type="number" />
          <button onClick={e => {
            let targetButton = "close";
            const value = e.currentTarget.previousSibling.value;
            this.props.changeQty(targetButton, value);
          }}>OK</button>
        </div>
        <button className="button">Voir le produit</button>
      </div>
    );
  }
}

export default OtherBottle;

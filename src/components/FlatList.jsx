import React, { Component } from "react";
import flats from "../data/flats";

export default class FlatList extends Component {
  render() {
    return (
      <div className="row">
        {flats.map(flat => (
          <div className="flat-img col-6">
            <img src={flat.imageUrl} alt="flat" key={flat.imageUrl} />
            <p className="flat-name">{flat.name}</p>
            <p className="flat-price">
              {flat.price}
              {flat.priceCurrency}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

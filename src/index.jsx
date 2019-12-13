import React, { Component } from "react";
import ReactDOM from "react-dom";
import FlatList from "./components/FlatList";

import "../assets/stylesheets/application.scss";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Flat Lists</h1>
        <div className="col-6">
          <FlatList />
        </div>
      </div>
    );
  }
}

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(<App />, root);
}

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import NoMatch from "./components/NoMatch"

import Home from "./pages/Home";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div id="application">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route component={NoMatch} />
          </Routes>
        </div>

    )
  }
}
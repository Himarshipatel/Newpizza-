import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Confirmorder from "./Form/Confirmorder";
import Recipe from "./components/Recipe";
//import Order from "./components/Order";
import Order from "./Form/Order.js";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            {/* <Route path="/order" component={Confirmorder} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Order from "../Form/Order";
const Confirmorder = () => {
  return (
    <div>
      <Link to="/order">
        <button className="waves-effect waves-light btn">Confirm Order</button>
      </Link>
      <Switch>
        <Route path="/order" component={Order} />
      </Switch>
    </div>
  );
};

export default Confirmorder;

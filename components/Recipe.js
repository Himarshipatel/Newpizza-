import React, { Component } from "react";
import { useSelector } from "react-redux";

//import Confirmorder from "../Form/Confirmorder.js";
//import { addShipping } from './actions/cartActions'

const Recipe = () => {
  const total = useSelector((state) => state.total);

  // componentWillUnmount() {
  //   if (this.refs.shipping.checked) this.props.substractShipping();
  // }

  // handleChecked = (e) => {
  //   if (e.target.checked) {
  //     this.props.addShipping();
  //   } else {
  //     this.props.substractShipping();
  //   }
  // };

  return (
    <div className="container">
      <div className="collection">
        {/* <li className="collection-item"> */}
        {/* <label>
              <input
                type="checkbox"
                ref="shipping"
                onChange={this.handleChecked}
              />
              <span>Shipping(+6$)</span>
            </label> */}
        {/* </li> */}
        <li className="collection-item">
          <b>Total: {total} $</b>
        </li>
      </div>
      {/* <div className="checkout">{/* <Confirmorder /></div> */}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     addedItems: state.addedItems,
//     total: state.total,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addShipping: () => {
//       dispatch({ type: "ADD_SHIPPING" });
//     },
//     substractShipping: () => {
//       dispatch({ type: "SUB_SHIPPING" });
//     },
//   };
// };

export default Recipe;

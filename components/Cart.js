import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "./actions/cartActions";
import Recipe from "./Recipe";
import { Row, Col, Container } from "reactstrap";
import { Image } from "react-bootstrap";
const Cart = () => {
  const items = useSelector((state) => state.addedItems);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };
  const handleAddQuantity = (id) => {
    dispatch(addQuantity(id));
  };
  const handleSubtractQuantity = (id) => {
    dispatch(subtractQuantity(id));
  };

  return (
    <div>
      {items.map((item) => (
        <ul className="collection-item avatar" key={item.id}>
          <Container>
            <Row className="maindiv">
              <Col className="Imagelist" sm="4">
                <Image
                  src={item.img}
                  alt={item.img}
                  width="200px"
                  height="200px"
                  roundedCircle
                  className="Imagedes"
                />
              </Col>

              <Col className="itemdesc" sm="8">
                <span className="title">{item.title}</span>
                {item.desc}
                <p>
                  <b>Price: {item.price}$</b>
                </p>
                <p>
                  <b>Quantity: {item.quantity}</b>
                </p>
                <div className="add-remove">
                  <Link to="/cart">
                    <i
                      className="material-icons"
                      onClick={() => {
                        handleAddQuantity(item.id);
                      }}
                    >
                      arrow_drop_up
                    </i>
                  </Link>
                  <Link to="/cart">
                    <i
                      className="material-icons"
                      onClick={() => {
                        handleSubtractQuantity(item.id);
                      }}
                    >
                      arrow_drop_down
                    </i>
                  </Link>
                </div>
                <button
                  className="waves-effect waves-light btn pink remove"
                  onClick={() => {
                    handleRemove(item.id);
                  }}
                >
                  Remove
                </button>
              </Col>
            </Row>
          </Container>
        </ul>
      ))}

      <Recipe />
    </div>
  );
};
// return (
//   <div className="container">
//     <div className="cart">
//       <h5 className="title">You have ordered:</h5>
//       {/* <ul className="collection">{addedItems}</ul> */}
//     </div>
//     <Recipe />
//   </div>
// );

// const mapStateToProps = (state) => {
//   return {
//     items: state.addedItems,
//     //addedItems: state.addedItems
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeItem: (id) => {
//       dispatch(removeItem(id));
//     },
//     addQuantity: (id) => {
//       dispatch(addQuantity(id));
//     },
//     subtractQuantity: (id) => {
//       dispatch(subtractQuantity(id));
//     },
//   };
// };
export default Cart;

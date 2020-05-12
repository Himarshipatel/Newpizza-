import React, { useEffect } from "react";
//import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./actions/cartActions";
import Image from "react-bootstrap/Image";
import { Button, Card, CardImg, Row, Col, Container } from "reactstrap";

const Home = () => {
  // const items = useSelector((state) => ({
  //   items: state.cartReducer.items,
  // }));
  const items = useSelector((state) => state.items);

  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(addToCart(id));
  };

  return (
    <div>
      <div>
        <h3 className="natural">natural Ingredient</h3>
      </div>
      <div>
        <h1 className="menuuu">Menu</h1>
      </div>
      <Row className="carddrow">
        {items.map((item) => (
          <Col className="carddcol">
            <Card key={item.id} className="cardd">
              {/* <div className="card-image"> */}
              <Col className="Imagecol">
                <Image
                  src={item.img}
                  alt={item.title}
                  width="200px"
                  height="200px"
                  className="Image"
                  roundedCircle
                />
              </Col>
              <Col className="Title">{item.title}</Col>
              {/* <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              <i className="material-icons">add</i>
            </span> */}
              {/* </div> */}

              {/* <div className="card-content"> */}

              <Col>{item.desc}</Col>
              <Col>
                <b>Price: {item.price}$</b>
              </Col>

              <Col>
                <span
                  to="/"
                  //   className="btn-floating halfway-fab waves-effect waves-light red"
                  onClick={() => {
                    handleClick(item.id);
                  }}
                >
                  {/* <i className="material-icons">add</i> */}
                  <Button color="danger" className="Addtocart">
                    Add to Cart
                  </Button>
                </span>
              </Col>
            </Card>
          </Col>
          // <div className="box">{itemList}</div>
        ))}
      </Row>
    </div>
  );

  // return (
  //   <div className="container">
  //     <h3 className="menutitle">natural Ingredient</h3>
  //     <h2 className="menusubtitle">Menu</h2>
  //     <div className="box">{itemList}</div>
  //   </div>
  // );

  // const mapStateToProps = (state) => {
  //   return {
  //     items: state.items,
  //   };
  // };
  // const mapDispatchToProps = (dispatch) => {
  //   return {
  //     addToCart: (id) => {
  //       dispatch(addToCart(id));
  //     },
  //   };
  // };
};
export default Home;

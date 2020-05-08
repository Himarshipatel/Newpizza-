import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import Image from "react-bootstrap/Image";
import { Button, Card, CardImg, Row, Col } from "reactstrap";
class Home extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <Row className="carddrow">
          <Col className="carddcol">
            <Card key={item.id} className="cardd">
              {/* <div className="card-image"> */}
              <img
                src={item.img}
                alt={item.title}
                width="100%"
                height="200px"
              />
              <span>{item.title}</span>
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
              <div>
                <p>{item.desc}</p>
                <p>
                  <b>Price: {item.price}$</b>
                </p>
              </div>
              <div>
                <span
                  to="/"
                  //   className="btn-floating halfway-fab waves-effect waves-light red"
                  onClick={() => {
                    this.handleClick(item.id);
                  }}
                >
                  {/* <i className="material-icons">add</i> */}
                  <Button color="danger" className="Addtocart">
                    Add to Cart
                  </Button>
                </span>
              </div>
            </Card>
          </Col>
        </Row>
      );
    });

    return (
      <div className="container">
        <h3 className="menutitle">natural Ingredient</h3>
        <h2 className="menusubtitle">Menu</h2>
        <div className="box">{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

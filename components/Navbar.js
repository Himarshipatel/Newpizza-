import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  PopoverHeader,
  UncontrolledPopover,
  PopoverBody,
} from "reactstrap";

import Popover from "./Popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
//import { Image } from "react-bootstrap/Image";
const Navbar = () => {
  return (
    <div>
      <Row>
        <Col sm="6">
          <Row sm="6">
            <img
              src="https://image.shutterstock.com/image-vector/pizzeria-vector-emblem-on-blackboard-600w-635547866.jpg"
              alt=""
              height="90px"
              width="90px"
              className="logo"
            />

            <Link to="/" className="menu">
              Home
            </Link>
            <Link to="/" className="menu">
              Menu
            </Link>
            <Link to="/" className="menu">
              About
            </Link>
            <Link to="/" className="menu">
              Gallary
            </Link>
            <Link to="/" className="menu">
              Contact
            </Link>
          </Row>
          <div className="content">
            <div>Cheesy</div>
            <div>Pizza</div>
            <div className="subtitle">
              Incididunt ut labourdolore megna aliqua.urenim
            </div>
            <div className="subtitle">
              add minim vemiam,quis nostrud exercitation
            </div>
            <Button color="danger" className="moredeal">
              More deals
            </Button>
          </div>
        </Col>

        <Col sm="6" className="banner2">
          <Col className="cart">
            <Button id="PopoverLegacy" type="button" className="cartbut">
              <FontAwesomeIcon
                icon={faShoppingCart}
                color="white"
                className="carticon"
              />
            </Button>
            <UncontrolledPopover
              trigger="legacy"
              placement="bottom"
              target="PopoverLegacy"
            >
              <PopoverHeader>Added Item</PopoverHeader>
              <PopoverBody className="popoverr">
                <Popover />
              </PopoverBody>
            </UncontrolledPopover>
          </Col>
          <Col md="6">
            <Col className="offer">Special Offer</Col>
            <img
              src="https://image.shutterstock.com/image-photo/fresh-pizza-50-off-today-600w-1412884628.jpg"
              alt=""
              className="bannerimg"
            />
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;

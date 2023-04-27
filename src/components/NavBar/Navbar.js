import React, { Component } from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

class Navbar extends Component {
  changeOnOver = () => {
    const element = document.getElementsByClassName("flex-menu")[0];
    // console.log("element",element)
  };

  render() {
    return (
      <nav>
        <div className="conteneur">
          <div className="flex-menu" onMouseOver={() => this.changeOnOver()}>
            <Link to="/">Portfolio</Link>
            <Link to="/cv">Mon c.v.</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">contact</Link>
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                UseEffect
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/useEffectCompo">UseEffect</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Counter">Counter</Dropdown.Item>
                <Dropdown.Item as={Link} to="/SetIntervalCompo">SetIntervalCompo</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Mousemove">Mousemove</Dropdown.Item>
                <Dropdown.Item as={Link} to="/StyleGeneral">StyleGeneral</Dropdown.Item>
                <Dropdown.Item as={Link} to="/StyleSepare">StyleSepare</Dropdown.Item>
                <Dropdown.Item as={Link} to="/StyleBackTick">StyleBackTick</Dropdown.Item>
                <Dropdown.Item as={Link} to="/StyleFonction">StyleFonction</Dropdown.Item>
                <Dropdown.Item as={Link} to="/ApiGeneral">ApiGeneral</Dropdown.Item>
                <Dropdown.Item as={Link} to="/AxiosGet">AxiosGet</Dropdown.Item>
                <Dropdown.Item as={Link} to="/AxiosPost">AxiosPost</Dropdown.Item>
                <Dropdown.Item as={Link} to="/GetArticle">GetArticle</Dropdown.Item>
                <Dropdown.Item as={Link} to="/GetArticleById">GetArticleById</Dropdown.Item>
                <Dropdown.Item as={Link} to="/AddArticle">AddArticle</Dropdown.Item>
                <Dropdown.Item as={Link} to="/DeletArticle">DeletArticle</Dropdown.Item>
                <Dropdown.Item as={Link} to="/RouterGeneral">RouterGeneral</Dropdown.Item>
                <Dropdown.Item as={Link} to="/RouteDyn">RouteDyn</Dropdown.Item>
                <Dropdown.Item as={Link} to="/LinkExplication">LinkExplication</Dropdown.Item>
                <Dropdown.Item as={Link} to="/UseLocation">UseLocation</Dropdown.Item>

                <Dropdown.Item>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

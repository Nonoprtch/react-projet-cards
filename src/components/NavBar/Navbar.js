import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import { Dropdown } from "react-bootstrap"

const Navbar = () => {

  const changeOnOver = () => {
    const element = document.getElementsByClassName("flex-menu")[0]
    // console.log("element",element)
  }

  return (
    <nav>
      <div className="conteneur">
        <div className="flex-menu" onMouseOver={() => changeOnOver()}>
          <Link to="/" >Portfolio</Link>
          <Link to="/cv" >Mon c.v.</Link>
          <Link to="/blog" >Blog</Link>
          <Link to="/contact" >contact</Link>
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              UseEffect
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/useEffectCompo" >UseEffect</Dropdown.Item>
              <Dropdown.Item >Another action</Dropdown.Item>
              <Dropdown.Item as={Link} to="/Counter" >Counter</Dropdown.Item>

              <Dropdown.Item >Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
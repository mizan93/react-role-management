import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, withRouter } from "react-router-dom";
function Header(props) {
  const [isLogged, setisLogged] = useState(false);
  const logout = () => {
    setisLogged(false)
    localStorage.removeItem("userItem");
    props.history.push("/");
  };
  useEffect(() => {
    const userItem = JSON.parse(localStorage.getItem("userItem")) || undefined;
    console.log("typeof", typeof userItem);
    if (typeof userItem != "undefined") {
      if (userItem.username && userItem.username.length > 0) {
        setisLogged(true);
        
      } else {
        setisLogged(false);
      }
    } 
    // return () => {
    //   cleanup
    // }
  }, [props]);
  return (
    <Navbar bg="light" expand="lg">
      <div class="container">
       
          <Navbar.Brand href="#home">Roles & Permissions</Navbar.Brand>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
       
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {!isLogged && (
              <Nav.Link>
                <Link to="/"></Link>
              </Nav.Link>
            )}
            {isLogged && (
              <>
                <Nav.Link>
                  <Link to="/users">Users</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/posts">Post</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link onClick={logout}>Logout</Link>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default withRouter(Header);

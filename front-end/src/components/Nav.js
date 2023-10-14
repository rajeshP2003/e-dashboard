import React from "react";
import { Link } from "react-router-dom";

//In this project we are using react-router-dom
// basic css added to ul using the className attribute

// we use <Routes><Route></Route></Routes> tag from react-router-dom to assign routes to links
// Routes is done in App.js

const Nav = () => {
  return (
    <>
      <ul className="nav-ul">
        <li>
          <Link to={"/"}>Products</Link>
        </li>
        <li>
          <Link to={"/add"}>Add Product</Link>
        </li>
        <li>
          <Link to={"/update"}>Update Product</Link>
        </li>
        <li>
          <Link to={"/logout"}>Logout</Link>
        </li>
        <li>
          <Link to={"/profile"}>Profile</Link>
        </li>
        <li>
          <Link to={"/signup"}>SignUp</Link>
        </li>
      </ul>
    </>
  );
};
export default Nav;

import React from "react";
import NavMessage from "../NavMessage";
import "./style.css";

// Component for the Navbar

function Nav(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Click The Beans!</a>
        </li>
        <NavMessage score={props.score} topScore={props.topScore} />
        <li>
          Beans: {props.score} | Record Beans: {props.topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

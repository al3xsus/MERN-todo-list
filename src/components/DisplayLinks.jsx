import {Link} from "react-router-dom";
import React from "react";

const DisplayLinks = props => {
  if (props.loggedIn) {
    return (
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="#" className="nav-link" onClick={props._logout}>
            Logout
          </Link>
        </li>
      </ul>
    )
  } else {
    return (
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">
            Sign up
          </Link>
        </li>
      </ul>
    )
  }
}

export default DisplayLinks

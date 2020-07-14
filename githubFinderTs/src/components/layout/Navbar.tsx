import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export interface Props {
  icon: string;
  title: string;
}

const Navbar = ({ icon, title }: Props) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};

Navbar.propTypes = {
  /**
   * Nav title
   */
  title: PropTypes.string.isRequired,
  /**
   * Nav icon
   */
  icon: PropTypes.string.isRequired
};

export default Navbar;

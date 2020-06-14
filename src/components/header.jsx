import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header
    className="py-4 px-8 uppercase hover:shadow transition-all duration-200 ease-linear"
  >
    <div className="flex justify-between">
      <h1 className="text-xl font-medium tracking-wide">
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>

      <ul className="grid grid-flow-col gap-4">
        <li>
          <Link
            to="/"
            className="transition-colors duration-100 ease-linear text-gray-600 hover:text-purple-700"
            activeClassName="text-purple-700"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="transition-colors duration-100 ease-linear text-gray-600 hover:text-purple-700"
            activeClassName="text-purple-700"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className="transition-colors duration-100 ease-linear text-gray-600 hover:text-purple-700"
            activeClassName="text-purple-700"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className="transition-colors duration-100 ease-linear text-gray-600 hover:text-purple-700"
            activeClassName="text-purple-700"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="transition-colors duration-100 ease-linear text-gray-600 hover:text-purple-700"
            activeClassName="text-purple-700"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

import React from "react";
import { BsFillPersonFill, BsFillCartFill, BsSearch } from "react-icons/bs";
import "../CSS/HeaderCSS.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-main">
      <div className="navbar-wrapper">
        <div className="header-logo">
          <Link className="header-navlink" to="/home">
            THE KIRAANA STORE
          </Link>
        </div>

        <div className="header-categories">
          <ul>
            <li>
              <Link className="header-navlink" to="/categories">
                Categories
              </Link>
            </li>
            <li>
              <Link className="header-navlink" to="/deals">
                Deals
              </Link>
            </li>
            <li>
              <Link className="header-navlink" to="/whats-new">
                What's New
              </Link>
            </li>
          </ul>
        </div>

        <div className="header-search">
          <input placeholder="Search..." />
          <div>
            <BsSearch />
          </div>
        </div>

        <div className="header-right">
          <div className="header-right-profile">
            <BsFillPersonFill />
            <span>Profile</span>
          </div>

          <div className="header-right-cart">
            <BsFillCartFill />
            <span>5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

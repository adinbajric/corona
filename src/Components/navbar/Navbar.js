import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import "./Navbar.css";
import White from "../../assets/White.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  let history = useHistory();
  const redirect = () => {
    history.push("/Contacts");
  };
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const changeNavColor = () => {
    if (window.scrollY > 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  window.addEventListener("scroll", changeNavColor);

  return (
    <nav className="navbar">
      <div className="navbar__title">
        <Link to="/" onClick={closeMobileMenu}>
          <img src={White} alt="white logo" />
        </Link>
      </div>
      <div className="navbar__container">
        <ul
          className={
            click
              ? "navbar__options navbar__options--active"
              : "navbar__options"
          }
        >
          <li>
            <Link className="navbar__option" to="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Covid19"
              className="navbar__option"
              onClick={closeMobileMenu}
            >
              COVID-19
            </Link>
          </li>
          <li>
            <Link
              to="/Symptoms"
              className="navbar__option"
              onClick={closeMobileMenu}
            >
              Symptoms
            </Link>
          </li>

          <li>
            <Link
              to="/Blog"
              className="navbar__option"
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/Contacts"
              className="navbar__option"
              onClick={closeMobileMenu}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
      <button className="btn btn--contact" onClick={redirect}>
        Contact us
      </button>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="mobile-menu__icon" />
        ) : (
          <MenuIcon className="mobile-menu__icon" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

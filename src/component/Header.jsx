import React, { useEffect, useState } from "react";
import logo from "../assets/image/logo/tiger.png";
import logoScrolled from "../assets/image/logo/tiger-white.png";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import profile_img from '../assets/image/user-f.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // Function to check if the link is active
  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <header className={`p-2 ${isScrolled ? "scrolled" : ""}`}>
      <div className="menubar">
        <img
          src={isScrolled ? logo : logoScrolled}
          className="img-fluid logo"
          alt="Logo"
        />
        <nav className={`nav menu ${isScrolled ? "" : "scrolled-links"}`}>
          <li className="nav-item">
            <Link to="/" className={`nav-link px-2 ${isActive("/")}`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link px-2 ${isActive("/about")}`}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/species"
              className={`nav-link px-2 ${isActive("/species")}`}
            >
              Species
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/gallery"
              className={`nav-link px-2 ${isActive("/gallery")}`}
            >
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link px-2 ${isActive("/contact")}`}
            >
              Contact
            </Link>
          </li>
        </nav>
        <div className="d-flex align-items-center gap-3">
          <form className="search d-none d-lg-block" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
          <div className="dropdown text-end">
            <Link
              href="#"
              className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={profile_img}
                alt="Profile"
                style={{
                  width:'40px',
                  height:'40px',
                  objectFit:'cover'
                }}
                className="rounded-circle"
              />
            </Link>
            <ul className="dropdown-menu text-small">
              <li>
                <Link className="dropdown-item" to="">
                  New project...
                </Link>
              </li>
              <li>
                <Link to="/login" className="dropdown-item" >
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/profile" className="dropdown-item" >
                  Profile
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


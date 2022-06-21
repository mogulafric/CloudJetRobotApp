import React from "react";
import "./Header.css";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../Redux/Actions/UserActions";
import { useDispatch } from "react-redux";

const Header = () => {
  const path = useNavigate();

  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
    path("/");
  };
  return (
    <>
      {" "}
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Messages Dropdown Menu */}
          <li className="nav-item dropdown user user-menu">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
            >
              <img
                src="dist/img/user2-160x160.jpg"
                className="user-image img-circle elevation-2"
                alt="user image"
              />
              <span className="hidden-xs">Admin</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              {/* User image */}
              <li className="user-header bg-primary">
                <img
                  src="dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="User Image"
                />
                <p>
                  Admin
                  <small>Member since Nov. 2012</small>
                </p>
              </li>
              {/* Menu Body */}

              {/* Menu Footer*/}
              <li className="user-footer">
                <div className="float-left">
                  <Link to="/user/profile" className="btn btn-default btn-flat">
                    Profile
                  </Link>
                </div>
                <div className="float-right">
                  <Link
                    onClick={logoutHandler}
                    to="#"
                    className="btn btn-default btn-flat"
                  >
                    Sign out
                  </Link>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* /.navbar */}
    </>
  );
};

export default Header;

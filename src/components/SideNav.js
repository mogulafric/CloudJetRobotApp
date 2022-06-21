import "./SideNav.css";
import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      {" "}
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="#" className="brand-link">
          <img
            src="/assets/img/robot.png"
            alt="Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">
            Cloud Jet RobotApp
          </span>
        </a>

        {/* Sidebar */}
        <div className="sidebar">
          {/* SidebarSearch Form */}
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column sidebar-menu"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}

              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon fa fa-tachometer-alt text-aqua"></i>
                  <p>Dashboard</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon  fa fa-cogs text-aqua" />
                  <p>
                    Model Training
                    <i className="fa fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/trainingData" className="nav-link">
                      <i className="fa fa-calculator nav-icon" />
                      <p>Prepare training data</p>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </>
  );
};

export default SideNav;

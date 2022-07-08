import React from "react";
import { NavLink } from "react-router-dom";
import './sideBar.css';

const SideBar = () => {
  // manage users - super user only
  // manage projects - super user only
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link" activeclassname='nav-link-active' aria-current="page" to="dashboard">
              <span data-feather="home" className="align-text-bottom"></span>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeclassname='nav-link-active' to="users">
              <span data-feather="file" className="align-text-bottom"></span>
              Manage Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeclassname='nav-link-active' to="projects">
              <span data-feather="users" className="align-text-bottom"></span>
              Manage Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeclassname='nav-link-active' to="cases/all">
              <span data-feather="shopping-cart" className="align-text-bottom"></span>
              Cases
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeclassname='nav-link-active' to="profile">
              <span data-feather="layers" className="align-text-bottom"></span>
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideBar;
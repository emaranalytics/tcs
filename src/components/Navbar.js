import React from "react";
import { Link } from 'react-router-dom'

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Think Code Sleep
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav">
            <Link class="nav-link active" to="/">
              Home
            </Link>
            <Link class="nav-link" to="/service">
              Services
            </Link>
            <Link class="nav-link" to="/portfolio">
              Portfolio
            </Link>
            <Link class="nav-link" to="/skill">
              Skills
            </Link>
            <Link class="nav-link" to="/about">
              About
            </Link>
            <Link class="nav-link" to="/blog">
              Blog
            </Link>
          </div>
          <div class="navbar-nav ms-auto">
            <button type="button" class="btn btn-warning">
              <Link to="/hireme" style={{textDecoration: "none"}}>Hire Me</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

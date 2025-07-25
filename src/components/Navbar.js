import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link
        className="navbar-brand"
        to="/"
      >
        Dashboard
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/home"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/courses"
            >
              Courses
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/services"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link
                  className="dropdown-item"
                  to="/action"
                >
                  Action
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/another action"
                >
                  Another action
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/something else here"
                >
                  Something else here
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" aria-disabled="true">
              Disabled
            </Link>
          </li>
        </ul>
        <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault" style={{color: 'white'}}>Enable Mode</label>
</div>
        <form className="d-flex mx-1" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
  )
}

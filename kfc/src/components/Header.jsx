import React from 'react';
import HeroSection from './HeroSection';
import logo from "../assets/images/logo.png";
import bike from '../assets/images/bike.png';
import order from '../assets/images/order.png';


export default function Header() {
  return (
    <>
      <header className="header">
        <div className="nav-wrapper">
          <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container d-flex justify-content-between">
              <div className="first-nav d-flex align-items-center">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon">
                    <i className="fa-solid fa-bars" />
                  </span>
                </button>
                <a className="navbar-brand" href="#">
                  <img
                    className="ms-1"
                    src={logo}
                    alt=""
                    width={70}
                  />
                </a>
                <div className="order-options">
                  <button className="option-active">
                    <img src={bike} alt="" />
                    <span>Delivery</span>
                  </button>
                  <button style={{ marginLeft: 5 }}>
                    <img src={order} alt="" />
                    <span>Pickup</span>
                  </button>
                </div>
              </div>
              <div className="delivery-option">
                <button>
                  <h4>Delivery To</h4>
                  <p>House no.### Street no.### Islamabad</p>
                </button>
              </div>
              <div className="personal-option">
                <a href="">
                  <button className="bucket"></button>
                </a>
                <a href="">
                  <button>
                    <div>
                      <span>
                        <i className="fa-solid fa-user" />
                      </span>
                    </div>
                  </button>
                </a>
              </div>
              <div
                className="offcanvas offcanvas-start text-bg-dark"
                tabIndex={-1}
                id="offcanvasNavbar"
                aria-labelledby="offcanvasDarkNavbarLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title pt-4" id="offcanvasDarkNavbarLabel">
                    <img src="/images/logo.png" alt="" />
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <span>
                      <i
                        style={{ color: "white" }}
                        className="fa-solid fa-xmark"
                      />
                    </span>
                  </button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Link
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <form className="d-flex mt-3" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* /.nav-wrapper */}
        <div className="extra-main" />
      </header>
      {/* /.header */}

      <HeroSection/>

    </>
  );
}

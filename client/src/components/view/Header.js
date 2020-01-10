import React, { Component } from "react";
import "./../styles/header.css";
import DXC from "./../../photos/DXC.png";
import axios from "axios";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.logoutClicked = this.logoutClicked.bind(this);
    this.homePageClicked = this.homePageClicked.bind(this);
    this.contactUsClicked = this.contactUsClicked.bind(this);
  }

  homePageClicked() {
    window.location.href = "/api/chapters/get_all";
  }
  logoutClicked() {
    const SERVICE_API_URL = "http://localhost:3002";
    let firstName = localStorage.getItem("name");
    axios
      .get(`${SERVICE_API_URL}/api/users/logout/${firstName}`)
      .then(response => {
        console.log(response);
        console.log("Hi");
      });
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
  }

  contactUsClicked() {
    window.location.href = "/api/contact";
  }

  render() {
    return (
      <div>
        <div className="fixed-top">
          <header className="topbar">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="social-network">
                    <li>
                      <a
                        className="waves-effect waves-dark"
                        href="https://www.facebook.com/DXCTechnology"
                        target="_blank"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="waves-effect waves-dark"
                        href="https://twitter.com/dxctechnology"
                        target="_blank"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="waves-effect waves-dark"
                        href="https://www.linkedin.com/company/dxctechnology"
                        target="_blank"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="waves-effect waves-dark"
                        href="https://www.pinterest.com/OfficialDXC/"
                        target="_blank"
                      >
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="waves-effect waves-dark"
                        href="https://www.youtube.com/DXCTechnology"
                        target="_blank"
                      >
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="waves-effect waves-dark"
                        href="https://www.instagram.com/dxctechnology/"
                        target="_blank"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
            <div className="container">
              <a
                className="navbar-brand myClass"
                rel="nofollow"
                target="_blank"
                onClick={() => this.homePageClicked()}
              >
                <img src={DXC} width="50%" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a
                      className="nav-link myClass"
                      onClick={() => this.homePageClicked()}
                      target="_blank"
                    >
                      Chapters
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.dxc.technology/services"
                      target="_blank"
                    >
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.dxc.technology/industries"
                      target="_blank"
                    >
                      Industries
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.dxc.technology/insights"
                      target="_blank"
                    >
                      Insights
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.dxc.technology/about_us"
                      target="_blank"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item myClass">
                    <a
                      className="nav-link"
                      onClick={() => this.contactUsClicked()}
                    >
                      Support
                    </a>
                  </li>

                  <li className="nav-item myClass">
                    <a
                      className="nav-link"
                      onClick={() => this.logoutClicked()}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

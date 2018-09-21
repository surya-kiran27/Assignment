import React, { Component } from "react";
import "../Css/SideNav.css";

export default class SideNav extends Component {
  render() {
    return (
      <div className="sidebar-nav">
        <div className="row">
          <div className="col-3">
            <div className="navbar  ">
              <ul className="navbar-nav">
                <a className="navbar-brand text-light" href="">
                  LEADSENSE
                </a>

                <li className="nav-item mt-3">
                  <a className="nav-link text-light" href="">
                    <i
                      className="fa fa-2x fa-dashboard mr-1"
                      aria-hidden="true"
                    />
                    DASHBOARD
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-light" href="">
                    <i
                      className="fa fa-2x fa-bar-chart mr-1"
                      aria-hidden="true"
                    />
                    ANALYTICS
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-light" href="">
                    <i className="fa fa-2x fa-money mr-1" />
                    PAID MARKETING
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-light" href="">
                    <i className="fa fa-2x fa-cogs mr-1" />
                    SEO
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-light" href="">
                    <i className="fa fa-2x fa-search mr-1" />
                    CONTENT
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-light" href="">
                    <i className="fa fa-2x  fa-user mr-1" />
                    LEAD NINJA
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

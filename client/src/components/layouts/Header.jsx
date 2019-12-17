import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

import logo from "./steam.png";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { appPages } from "../../Redux/reducers/appReducer";

var classNames = require("classnames");

const Header = ({ page }) => {
  useEffect(() => {
    (simplyNavDuty => {
      const sideNav = document.querySelector(".nav-list"),
        toggleNavBtn = document.querySelector(".toggle-nav"),
        burger = document.querySelector(".burger"),
        pageOverlay = document.querySelector(".overlay"),
        navLinks = document.querySelectorAll(".link"),
        body = document.querySelector("body"),
        html = document.querySelector("html");

      // Disable page scroll
      function disablePageScroll() {
        if (sideNav.classList.contains("-open")) {
          body.classList.add("_disableScroll");
          html.classList.add("_disableScroll");
        } else {
          body.classList.remove("_disableScroll");
          html.classList.remove("_disableScroll");
        }
      }

      // Nav funtion (toggle)
      function toggleNav() {
        sideNav.classList.toggle("-open");
        burger.classList.toggle("open");
        disablePageScroll();
      }

      // To default
      const toDefaults = () => {
        // Close nav menu
        sideNav.classList.remove("-open");
        burger.classList.remove("open");
        // Make sure scrolling is enabled
        body.classList.remove("_disableScroll");
        html.classList.remove("_disableScroll");
      };

      // Event listeners
      toggleNavBtn.addEventListener("click", toggleNav);
      pageOverlay.addEventListener("click", toggleNav);

      // (on mobile) close nav menu when link is clicked
      // this is useful on mobile when clicking an anchor tag on the current page (eg. index.html#last-section)
      navLinks.forEach(el => {
        el.addEventListener("click", event => {
          toDefaults();
        });
      });

      // when browser is resized (past breakpoint) reset to defaults
      (function() {
        window.addEventListener("resize", resizeThrottler, false);
        let resizeTimeout;

        function resizeThrottler() {
          // ignore resize events as long as an actualResizeHandler execution is in the queue
          if (!resizeTimeout) {
            resizeTimeout = setTimeout(function() {
              resizeTimeout = null;
              actualResizeHandler();

              // The actualResizeHandler will execute at a rate of 15fps
            }, 66);
          }
        }

        function actualResizeHandler() {
          // handle the resize event

          // Window resized width
          let width = window.innerWidth;

          // If resized greater than BREAKPOINT (default: 800px), then reset nav functions
          if (width >= 800) {
            toDefaults();
          }
        }
      })();
    })();
  }, []);

  const linkClasses = state =>
    classNames({
      link: true,
      "-active": page === state
    });

  return (
    <header className="nav-wrapper -sticky">
      <nav className="nav">
        <button className="toggle-nav" type="button">
          <div className="burger -squeeze -offset" type="button">
            <span className="burger-lines"></span>
          </div>
        </button>
        <Link className="logo-link" to="/">
          <img className="logo" id="logo" src={logo} alt="Logo" />
        </Link>
        <ul className="nav-list" role="navigation">
          <div className="list -left">
            <li className="item">
              <Link className={linkClasses(appPages.store)} to="/">
                <Typography variant="h6">Store</Typography>
              </Link>
            </li>
            <li className="item">
              <Link className={linkClasses(appPages.library)} to="/library">
                <Typography variant="h6">Library</Typography>
              </Link>
            </li>
            <li className="item">
              <Link className={linkClasses(appPages.about)} to="/about">
                <Typography variant="h6">About</Typography>
              </Link>
            </li>
          </div>
          <div className="list -right">
            <div className="overlay"></div>
          </div>
        </ul>
      </nav>
    </header>
  );
};
const mapStateToProps = state => ({
  page: state.app.activePage
});
export default connect(mapStateToProps)(Header);

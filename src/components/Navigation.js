import React from "react";
import { NavLink } from "react-router-dom";
import avator from "../assets/img/profile.jpg";
import reactLogo from "../assets/img/react-dark-logo.png";

export default function Navigation() {
  const handleSmoothScroll = event => {
    const target = event.target;
    const scrollToElem = document.querySelector(
      `#${target.href.split("/")[target.href.split("/").length - 1]}`
    );

    window.scroll({
      top: 2500,
      left: 0,
      behavior: "smooth",
    });

    // Scroll certain amounts from current position
    window.scrollBy({
      top: 1500, // could be negative value
      left: 0,
      behavior: "smooth",
    });
    // Scroll to a certain element
    scrollToElem.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <nav className="position-relative h-100">
      <div className="profile pt-3 mt-auto mb-5">
        <div className="align-items-center avator d-flex justify-content-center mx-auto overflow-hidden rounded-circle text-center">
          <img src={avator} className="img-fluid" alt="avator" />
        </div>
        <button className="btn bg-light shadow-none nav-btn btn-block mx-auto my-4">
          Hire me!
        </button>
      </div>
      <img src={reactLogo} className="pic-art" alt="" />
      <ul className="nav-menu px-3">
        <li>
          <NavLink
            activeClassName="active-nav-link"
            to="/home"
            className="text-decoration-none d-block w-100 px-3 scroll-spy-tab rounded-sm"
            data-role="home"
            onClick={handleSmoothScroll}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active-nav-link"
            className="text-decoration-none d-block w-100 px-3 scroll-spy-tab rounded-sm"
            data-role="about"
            onClick={handleSmoothScroll}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active-nav-link"
            className="text-decoration-none d-block w-100 px-3 scroll-spy-tab rounded-sm"
            data-role="resume"
            onClick={handleSmoothScroll}
            to="/resume"
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active-nav-link"
            className="text-decoration-none d-block w-100 px-3 scroll-spy-tab rounded-sm"
            data-role="contact"
            onClick={handleSmoothScroll}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <ul className="social-network d-flex px-0 justify-content-center social-circle">
        <li className="px-1">
          <a
            href="https://myaccount.google.com/"
            className="rounded-circle position-relative shadow mx-1 d-block icoGoogle"
            title="Google +"
          >
            <i className="center fab fa-google-plus-g"></i>
          </a>
        </li>
        <li className="px-1">
          <a
            href="https://www.facebook.com/BrendonChirume"
            className="rounded-circle position-relative shadow mx-1 d-block icoFacebook"
            title="Facebook"
          >
            <i className="center fa fa-facebook"></i>
          </a>
        </li>
        <li className="px-1">
          <a
            href="https://twitter.com/b_chirume"
            className="rounded-circle position-relative shadow mx-1 d-block icoTwitter"
            title="Twitter"
          >
            <i className="center fa fa-twitter"></i>
          </a>
        </li>
        <li className="px-1">
          <a
            href="https://github.com/BrendonChirume"
            rel="noopener"
            className="rounded-circle position-relative shadow mx-1 d-block icoGithub"
            title="Github"
          >
            <i className="center fab fa-github"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

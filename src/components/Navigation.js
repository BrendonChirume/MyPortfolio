import React from "react";
import avator from "../assets/img/profile.jpg";

export default function Navigation() {
  return (
    <nav>
      <div className="profile pt-3">
        <div className="align-items-center avator d-flex justify-content-center mx-auto overflow-hidden rounded-circle text-center">
          <img src={avator} className="img-fluid" alt="avator" />
        </div>
        <h1 className="text-light text-center">
          <a
            href="index.html"
            className="text-decoration-none text-nowrap h3 text-white"
          >
            Brendon Chirume
          </a>
        </h1>
      </div>
    </nav>
  );
}

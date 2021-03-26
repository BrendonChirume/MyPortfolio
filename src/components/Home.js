import React from "react";

export default function Home({ isSideBarOpen, icons }) {
  return (
    <section data-role="scroll-to-page" id="home" className="shadow">
      <div className="name position-absolute">
        <h6 className="text-white">Hi there!, I'm</h6>
        <h1 className="">Brendon</h1>
        <h2 className="">Chirume</h2>
        <h6 className="text-white">
          The&nbsp;
          <span
            data-name="type-writer-effect"
            data-wait="3000"
            data-words='["Developer!","Designer!","Creator!"]'
          ></span>
          <span data-role="cursor"></span>
        </h6>
      </div>
      {window.innerWidth < 990 ? (
        <button
          className="border-0 btn position-fixed rounded-circle show-sidebar-btn"
          onClick={isSideBarOpen}
        >
          <div className="bg-dark center" />
          <img
            src={icons.menu}
            className="img-fluid center rounded-circle shadow"
            alt=""
          />
        </button>
      ) : undefined}
    </section>
  );
}

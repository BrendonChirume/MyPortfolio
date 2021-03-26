import React from "react";

export default function Services() {
  return (
    <section
      data-role="scroll-to-page"
      id="services"
      className="pb-3 overflow-hidden"
    >
      <div className="container-fluid px-lg-3 px-md-5 pb-3">
        <h2 className="mb-4 pb-3 position-relative pt-3">Services</h2>

        <div className="row">
          <div className="col-12 col-md-4">
            <div className="shadow-sm card-body text-center services-card">
              <h3 className="h5">Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat
                tenetur pariatur doloribus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

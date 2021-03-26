import React from "react";

export default function About({ avator }) {
  return (
    <section
      data-role="scroll-to-page"
      id="about"
      className="pb-3 overflow-hidden"
    >
      <div className="container-fluid px-lg-3 px-md-5">
        <h2 className="mb-4 pb-3 position-relative pt-3">About Me</h2>
        <p>
          My name is Brendon Chirume. I am a Web Developer, and I'm very
          passionate and dedicated to my work. I have two years of learner
          experience. I have acquired the skills and knowledge necessary to make
          your project a success. I enjoy every step of the design process, from
          discussion to collaboration.
        </p>
      </div>

      <div className="row px-3">
        <div className="col-12 col-md-4 " data-aos="fade-right">
          <img
            src={avator}
            className="img-fluid rounded img-thumbnail shadow"
            alt=""
          />
        </div>
        <div
          className="col-12 col-md-8  pt-4 pt-md-0 content"
          data-aos="fade-left"
        >
          <h3 className="h3">UI/UX Designer &amp; Web Developer.</h3>
          <p className="font-italic my-4"></p>
          <div data-aos="fade-left" className="row personal-details">
            <div className="col-12 col-md-6">
              <ul>
                <li>
                  <strong>Birthday:</strong> 11 February 2000
                </li>
                <li>
                  <strong>Phone:</strong> +263 (0) 71 881 3174
                </li>
                <li>
                  <strong>City:</strong> Bulawayo, Zimbambwe
                </li>
                <li>
                  <strong>Age:</strong> 21
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <ul>
                <li>
                  <strong>Degree:</strong> BSc in Informatics
                </li>
                <li>
                  <strong>Email:</strong> tchirume14@gmail.com
                </li>
                <li>
                  <strong>Freelance:</strong> Available
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-4">
            I help you build brand for your business at an affordable price. A
            number of clients have procured exceptional results. When an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. I deliver work within time and budget which meets
            your requirements and standards.
          </p>
        </div>
      </div>
    </section>
  );
}

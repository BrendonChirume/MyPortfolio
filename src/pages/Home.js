import React from "react";
import avator from "../assets/img/profile.jpg";

export default function Home({ clientWidth }) {
  console.log(clientWidth);
  return (
    <>
      {/* ======= Intro Section =======  */}
      <section className="h-100 position-relative shadow">
        <h1 className="text-white name position-absolute">Brendon Chirume</h1>
        <button className="btn float-right"></button>
      </section>
      {/* ======= End of Intro Section =======  */}
      {/* ======= About Section =======  */}
      <section id="about" className="about h-100 mt-4">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-12 col-md-3" data-aos="fade-right">
              <img
                src={avator}
                className="img-fluid rounded img-thumbnail shadow"
                alt=""
              />
            </div>
            <div
              className="col-lg-8 col-12 col-md-9 pt-4 pt-md-0 content"
              data-aos="fade-left"
            >
              <h3>UI/UX Designer &amp; Web Developer.</h3>
              <p className="font-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="row personal-details">
                <div className="col-lg-6">
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
                <div className="col-lg-6">
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
              <p>
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque. Aliquid amet
                quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                culpa magni laudantium dolores.
              </p>
            </div>
          </div>
        </div>{" "}
      </section>
      {/* End About Section */}
    </>
  );
}

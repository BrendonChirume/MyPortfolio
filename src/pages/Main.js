import React from "react";
import avator from "../assets/img/profile.jpg";
import icons from "../icons/icons";

export default function Main({ isSideBarOpen, clientWidth }) {
  const skills = [
    {
      skill: "HTML/CSS",
      score: 95,
    },

    {
      skill: "JavaScript",
      score: 42,
    },
    {
      skill: "Bootstrap",
      score: 95,
    },
    {
      skill: "C Programming",
      score: 5,
    },

    {
      skill: "React JS",
      score: "56",
    },
  ];
  return (
    <>
      {/* ======= Intro Section =======  */}
      <section
        data-role="scroll-to-page"
        id="home"
        className="home position-relative shadow"
      >
        <div className="name position-absolute">
          <h6 className="text-white">Hi there!, I'm</h6>
          <h1 className="">Brendon</h1>
          <h2 className="">Chirume</h2>
          <h6 className="text-white">Frontend Developer</h6>
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
      {/* ======= End of Intro Section =======  */}

      {/* ======= About Section =======  */}
      <section
        data-role="scroll-to-page"
        id="about"
        className="about mt-4"
        style={{
          marginLeft: clientWidth >= 990 ? 300 : 0,
        }}
      >
        <div className="container">
          <div className="section-title py-3">
            <h2>About</h2>
            <p>
              My name is Brendon Chirume. I am a Web Developer, and I'm very
              passionate and dedicated to my work. I have two years of learner
              experience. I have acquired the skills and knowledge necessary to
              make your project a success. I enjoy every step of the design
              process, from discussion to collaboration.
            </p>
          </div>

          <div className="row">
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
              <h3>UI/UX Designer &amp; Web Developer.</h3>
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
                I help you build brand for your business at an affordable price.
                A number of clients have procured exceptional results. When an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. I deliver work within time and budget which
                meets your requirements and standards.
              </p>
            </div>
          </div>
        </div>{" "}
      </section>
      {/* End About Section */}
      {/* Resume Section */}
      <section
        data-role="scroll-to-page"
        id="resume"
        className="resume px-3 mt-4"
        style={{
          marginLeft: clientWidth >= 990 ? 300 : 0,
        }}
      >
        <div className="container">
          <h2 className="py-3">Resume</h2>
          <h3>My Skills</h3>
          <div className="row skills-content">
            {skills.map((skill, index) => (
              <div key={index} className="col-lg-6 my-3" data-aos="fade-up">
                <strong className=" mb-2 d-flex justify-content-between">
                  <span>{skill.skill}</span>{" "}
                  <span className="val">{skill.score}%</span>
                </strong>
                <div className="progress-bar-wrap progress">
                  <div
                    className="progress-bar h-100"
                    style={{ width: skill.score + "%" }}
                    role="progressbar"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Resume Section */}
      {/* ======= Contact Section =======  */}
      <section data-role="scroll-to-page" id="contact" className="contact">
        <div className="container shadow-sm pb-3">
          <div className="section-title py-3">
            <h2>Get in Touch</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row">
            <div
              data-aos="fade-right"
              className="col-12 col-md-6 px-3 justify-content-center mt-5 mt-lg-0 d-flex align-items-stretch"
            >
              <form action="forms/contact.php" method="post" className="w-100">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    data-rule="required"
                    data-msg="Please write something for us"
                  ></textarea>
                  <div className="validate"></div>
                </div>
                {/* <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div> */}
                <div className="text-center mb-4">
                  <button type="submit" className="btn px-4 btn-dark">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div
              data-aos="fade-left"
              className="col-12 col-md-6 px-4 d-flex align-items-stretch"
            >
              <div className="info w-100">
                <div className="address">
                  <i className="icofont-google-map"></i>
                  <h4>Location:</h4>
                  <p>Cnr Cecil Avenue & Gwanda Road, Bulawayo</p>
                </div>

                <div className="email">
                  <i className="icofont-envelope"></i>
                  <h4>Email:</h4>
                  <p>tchirume14@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="icofont-phone"></i>
                  <h4>Call:</h4>
                  <p>+263 (0) 71 881 3174</p>
                </div>

                <iframe
                  title="location"
                  className="mr-2"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12597.388381864786!2d28.637287290447713!3d-20.166314620008805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb553660e6f6749%3A0x5d1e3dda4713d47!2sNational%20University%20of%20Science%20and%20Technology%2C%20Zimbabwe!5e0!3m2!1sen!2szw!4v1610225332899!5m2!1sen!2szw"
                  style={{ border: 0, width: "100%", height: "290px" }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>{" "}
        <footer className="d-flex justify-content-between py-5 px-4">
          <span>Copyright © 2020 Chirume. All Rights Reserved.</span>
          <span>Terms & Policy Disclaimer</span>
        </footer>
      </section>
      {/* End Contact Section */}
    </>
  );
}

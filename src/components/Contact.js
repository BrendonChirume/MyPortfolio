import React from "react";

export default function Contact() {
  return (
    <section
      data-role="scroll-to-page"
      id="contact"
      className="overflow-hidden"
    >
      <div className="container-fluid px-lg-3 px-md-5 shadow-sm pb-3">
        <div className="section-title py-3">
          <h2 className="mb-4 pb-3 position-relative pt-3">Get in Touch</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row">
          <div
            data-aos="fade-right"
            className="col-12 col-md-6 px-3 justify-content-center mt-5 mt-lg-0 d-flex align-items-stretch"
          >
            <form method="post" className="w-100">
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
                <button type="submit" className="btn btn-dark">
                  <i className="fas fa-paper-plane mr-2"></i>Send Message
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
      <footer className="d-flex justify-content-between py-3 smallnm px-4 text-muted">
        <span>Copyright © 2020 Chirume. All Rights Reserved.</span>
        <span>
          Terms & Policy <span className="pipe">|</span> Disclaimer
        </span>
      </footer>
    </section>
  );
}

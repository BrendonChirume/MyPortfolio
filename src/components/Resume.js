import React from "react";
import { Link } from "react-router-dom";

export default function Resume({ skills }) {
  return (
    <section
      data-role="scroll-to-page"
      id="resume"
      className="pb-3 overflow-hidden"
    >
      <div className="container-fluid px-lg-3 px-md-5">
        <h2 className="mb-4 pb-3 position-relative pt-3">Resume</h2>

        <div className="row credentials">
          <div className="col-12 col-md-6">
            <h3 className="h3">My Education</h3>
            <div className="card my-4 mr-md-3" data-aos="fade-up">
              <div className=" card-body ">
                <span className="badge badge-dark mb-3">2018 - 2020</span>
                <h4>A Level</h4>
                <p className="text-uppercase text-warning font-italic">
                  wise owl group of schools
                </p>
                <p>
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </p>
              </div>
              <div className="small card-footer">
                <a href="https://www.nust.ac.zw/" className="tag">
                  Website
                </a>
              </div>
            </div>
            <div className="card my-4 mr-md-3" data-aos="fade-up">
              <div className=" card-body pb-0">
                <span className="badge badge-dark mb-3">2018 - 2020</span>
                <h4>Informatics</h4>
                <p className="text-uppercase text-warning font-italic">
                  National University of science and technology
                </p>
                <p>
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </p>
              </div>
              <div className="small card-footer">
                <a href="https://www.nust.ac.zw/" className="tag">
                  Website
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="h3">My Experience</h3>
            <div className="card my-4 mr-md-3" data-aos="fade-up">
              <div className=" card-body ">
                <span className="badge badge-dark mb-3">2019</span>
                <h4>UI UX Designer</h4>
                <p className="text-uppercase text-warning font-italic">
                  Virtualskool
                </p>
                <p>
                  Supervised the assessment of all graphic materials in order to
                  ensure quality and accuracy of the design.
                </p>
              </div>
              <div className="small card-footer">
                <a href="https://virtualskool.co.za/" className="tag">
                  Website
                </a>
                <Link to="/reviews" className="tag ml-3">
                  Reviews
                </Link>
                <a
                  href="/"
                  onClick={e => e.preventDefault()}
                  className="tag ml-3"
                >
                  Comment
                </a>
              </div>
            </div>
            <div className="card my-4 mr-md-3" data-aos="fade-up">
              <div className=" card-body ">
                <span className="badge badge-dark mb-3">2019 - 2020</span>
                <h4>UI UX Designer</h4>
                <p className="text-uppercase text-warning font-italic">
                  Mallorar Technologies
                </p>
                <p>
                  Supervised the assessment of all graphic materials in order to
                  ensure quality and accuracy of the design.
                </p>
              </div>
              <div className="small card-footer">
                <a href="https://mallorar.com/" className="tag">
                  Website
                </a>
                <Link to="/reviews" className="tag ml-3">
                  Reviews
                </Link>
                <a
                  href="/"
                  onClick={e => e.preventDefault()}
                  className="tag ml-3"
                >
                  Comment
                </a>
              </div>
            </div>
          </div>

          <button className="bg-transparent border m-4 mx-auto py-2 show-more-btn text-center text-info w-50">
            Show More...
          </button>
        </div>

        <h3 className="h3">My Skills</h3>
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
  );
}

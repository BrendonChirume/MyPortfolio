import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Reviews() {
  return (
    <section
      data-role="scroll-page"
      id="reviews"
      className="pb-3 overflow-hidden"
    >
      <div className="container-fluid px-lg-3 px-md-5 pb-3">
        <h2 className="mb-4 pb-3 position-relative pt-3">What Clients Say</h2>
        <Splide
          options={{
            rewind: true,
            perPage: 1,
            focus: "center",
          }}
          className="mx-md-n3 mx-lg-3"
        >
          <SplideSlide>
            <div className="row jumbotron m-0 justify-content-around row">
              <div className="col-12 col-md-8">
                <i className="fas fa-quote-right quote-clients"></i>
                <p className="my-3">
                  I can't believe I got support and my problem resolved in just
                  minutes from posting my question. Simply amazing team and
                  amazing theme! Thank you very much guys for excellent support!
                </p>
                <div className="row px-3 align-items-center mt-2">
                  <div className="rounded-circle shadow-sm bg-light avator mr-3 d-flex justify-content-center align-items-center">
                    SR
                  </div>
                  <div className="">
                    <h6 className="text-capitalize h5">Steve Rogers</h6>
                    <span>Creator</span>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex col-md-4 justify-content-center justify-content-lg-start">
                <div className="mansory shadow overflow-hidden rounded-pill">
                  <img
                    className="img-fluid"
                    src="https://img.freepik.com/free-photo/man-black-suit-wearing-plastic-cup_23-2148401467.jpg?size=338&ext=jpg"
                    alt="mansory img"
                  />
                </div>
                <div></div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="row jumbotron m-0 justify-content-around row">
              <div className="col-12 col-md-8">
                <i className="fas fa-quote-right quote-clients"></i>
                <p className="my-3">
                  Good overall template. I am getting back into coding and had a
                  simple question for the author. They responded within 30
                  minutes and answered my question. Highly recommend.
                </p>
                <div className="row px-3 align-items-center mt-2">
                  <div className="rounded-circle shadow-sm bg-light avator mr-3 d-flex justify-content-center align-items-center">
                    NF
                  </div>
                  <div className="">
                    <h6 className="text-capitalize h5">Nelly Furtado</h6>
                    <span>App Developer</span>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex col-md-4 justify-content-center justify-content-lg-start">
                <div className="mansory shadow overflow-hidden rounded-pill">
                  <img
                    className="img-fluid"
                    src="https://i.pinimg.com/564x/25/9f/76/259f76bfd1bbbff232893b5288734727.jpg"
                    alt="mansory img"
                  />
                </div>
                <div></div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="row jumbotron m-0 justify-content-around row">
              <div className="col-12 col-md-8">
                <i className="fas fa-quote-right quote-clients"></i>
                <p className="my-3">
                  Awesome template, well written code and looks great on any
                  platform. The customer support is very helpful and as huge
                  asset to this template. Overall a good design, that I am quite
                  happy with.
                </p>
                <div className="row px-3 align-items-center mt-2">
                  <div className="rounded-circle shadow-sm bg-light avator mr-3 d-flex justify-content-center align-items-center">
                    JC
                  </div>
                  <div className="">
                    <h6 className="text-capitalize h5">Junior Collins</h6>
                    <span>Designer</span>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex col-md-4 justify-content-center justify-content-lg-start">
                <div className="mansory shadow overflow-hidden rounded-pill">
                  <img
                    className="img-fluid"
                    src="https://image.freepik.com/free-photo/man-black-suit-looking-confident_23-2148401452.jpg"
                    alt="mansory img"
                  />
                </div>
                <div></div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}

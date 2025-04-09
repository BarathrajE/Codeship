import wing from "../assets/wing.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import arrow from "../assets/right_arrow.png";
import { Button } from "react-bootstrap";

const Section_7 = () => {
  return (
    <div className="bg-dark ">
      <div className=" d-flex align-items-center justify-content-center py-4 ">
        <p className=" font_64   font_weight_600 font_family  text-white ">
          Our Latest Projects
        </p>
        <img
          src={wing}
          alt=""
          className="img-fluid position-absolute end-0 d-xl-block d-lg-block d-none   "
        />
      </div>
      <Swiper
        id="swiper_3"
        className="mySwiper position-relative py-5"
        slidesPerView={2}
        spaceBetween={60}
        modules={[Pagination]}
        centeredSlides={true}
      >
        <SwiperSlide className="text-white br_15" id="swiper-slide_3">
          <div className="position-absolute  inside_text text-white ">
            <p className="font_weight_600 text-start  font_70">
              Soyvita <br />
              Landing Page
            </p>
            <div className="d-flex gap-3">
              <button className="btn text-dark font_16 rounded-pill   bg-light">
                UX/UI
              </button>
              <button className="btn text-dark font_16 rounded-pill  bg-light">
                Website
              </button>
              <button className="btn text-dark font_16 rounded-pill  bg-light">
                E-commerce
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white br_15" id="swiper-slide_3">
          <div className="position-absolute  inside_text text-white ">
            <p className="font_weight_600 text-start  font_70">
              Soyvita <br />
              Landing Page
            </p>
            <div className="d-flex gap-3">
              <button className="btn text-dark font_16 rounded-pill   bg-light">
                UX/UI
              </button>
              <button className="btn text-dark font_16 rounded-pill  bg-light">
                Website
              </button>
              <button className="btn text-dark font_16 rounded-pill  bg-light">
                E-commerce
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white br_15" id="swiper-slide_3">
          <div className="position-absolute  inside_text text-white ">
            <p className="font_weight_600 text-start  font_70">
              Soyvita <br />
              Landing Page
            </p>
            <div className="d-flex gap-3">
              <button className="btn text-dark font_16 rounded-pill   bg-light">
                UX/UI
              </button>
              <button className="btn text-dark font_16 rounded-pill  bg-light">
                Website
              </button>
              <button className="btn text-dark font_16 rounded-pill  bg-light">
                E-commerce
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white br_15" id="swiper-slide_3">
          <div className="position-absolute  inside_text text-white ">
            <p className="font_weight_600 text-start  font_70">
              Soyvita <br />
              Landing Page
            </p>
            <div className="d-flex gap-3">
              <button className="btn text-dark font_16 rounded-pill   bg-light">
                UX/UI
              </button>
              <button className="btn text-dark font_16 rounded-pill  bg-light">
                Website
              </button>
              <button className="btn text-dark font_16 rounded-pill  bg-light">
                E-commerce
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white br_15" id="swiper-slide_3">
          <div className="position-absolute  inside_text text-white ">
            <p className="font_weight_600 text-start  font_70">
              Soyvita <br />
              Landing Page
            </p>
            <div className="d-flex gap-3">
              <button className="btn text-dark font_16 rounded-pill   bg-light">
                UX/UI
              </button>
              <button className="btn text-dark font_16 rounded-pill  bg-light">
                Website
              </button>
              <button className="btn text-dark font_16 rounded-pill  bg-light">
                E-commerce
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white br_15" id="swiper-slide_3">
          <div className="position-absolute  inside_text text-white ">
            <p className="font_weight_600 text-start  font_70">
              Soyvita <br />
              Landing Page
            </p>
            <div className="d-flex gap-3">
              <button className="btn text-dark font_16 rounded-pill   bg-light">
                UX/UI
              </button>
              <button className="btn text-dark font_16 rounded-pill  bg-light">
                Website
              </button>
              <button className="btn text-dark font_16 rounded-pill  bg-light">
                E-commerce
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white br_15" id="swiper-slide_3">
          <div className="position-absolute  inside_text text-white ">
            <p className="font_weight_600 text-start  font_70">
              Soyvita <br />
              Landing Page
            </p>
            <div className="d-flex gap-3">
              <button className="btn text-dark font_16 rounded-pill   bg-light">
                UX/UI
              </button>
              <button className="btn text-dark font_16 rounded-pill  bg-light">
                Website
              </button>
              <button className="btn text-dark font_16 rounded-pill  bg-light">
                E-commerce
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white br_15" id="swiper-slide_3">
          <div className="position-absolute  inside_text text-white ">
            <p className="font_weight_600 text-start  font_70">
              Soyvita <br />
              Landing Page
            </p>
            <div className="d-flex gap-3">
              <button className="btn text-dark font_16 rounded-pill   bg-light">
                UX/UI
              </button>
              <button className="btn text-dark font_16 rounded-pill  bg-light">
                Website
              </button>
              <button className="btn text-dark font_16 rounded-pill  bg-light">
                E-commerce
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="d-flex  justify-content-center pb-3 ">
        <Button
          href="#"
          className="px-4 py-2 mt-3 background-color_btn rounded-pill border-0 font_22 text-center"
        >
          View All
          <img src={arrow} alt="arrow icon" className="ms-2" />
        </Button>
      </div>
    </div>
  );
};
export default Section_7;

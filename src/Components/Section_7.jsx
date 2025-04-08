import wing from "../assets/wing.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

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
    </div>
  );
};
export default Section_7;

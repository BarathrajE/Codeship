import arrow from "../assets/right_arrow.png";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slide_data from "./Slide_data";

const Section_4 = () => {
  return (
    <div className="d-flex align-items-center justify-content-center py-5 ">
      <div className=" container-customize">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 mb-4 ">
            <div>
              <p className="text-muted mb-1">How we can help you</p>
              <p className="font_64 fw-bold">
                Services <br /> We Offer
              </p>
              <p className="font_24 text-secondary">
                We offer a comprehensive range of software development services
                tailored to meet the unique needs of your business. A
                full-service creative agency designing and building inventive
                digital experiences across all platforms and brand touchpoints.
              </p>
              <Button
                href="#"
                className="px-4 py-2 mt-3 background-color_btn rounded-pill border-0 font_22"
              >
                All Services
                <img src={arrow} alt="arrow icon" className="ms-2" />
              </Button>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <Swiper
              className="mySwiper shadow bg-body rounded br_15 "
              id="swiper_2"
              loop={true}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide
                className=" p-xl-5 p-4 bg-white "
                id="swiper-slide_2"
              >
                
                <Slide_data
                  icon="fa-solid fa-tv"
                  title="Web Development"
                  description=" Get a high-quality, responsive, and fully optimized website
                    designed to elevate your business. Our expert team ensures
                    seamless functionality across all devices, enhancing user
                    experience and driving results for your brand."
                />
              </SwiperSlide>
              <SwiperSlide
                className=" p-xl-5 p-4 bg-white "
                id="swiper-slide_2"
              >
                <Slide_data
                  icon="fa-solid fa-tv"
                  title="App Development"
                  description=" Get a high-quality, responsive, and fully optimized website
                    designed to elevate your business. Our expert team ensures
                    seamless functionality across all devices, enhancing user
                    experience and driving results for your brand."
                />
              </SwiperSlide>
              <SwiperSlide
                className=" p-xl-5 p-4 bg-white "
                id="swiper-slide_2"
              >
                <Slide_data
                  icon="fa-solid fa-tv"
                  title="UI/UX Design"
                  description=" Get a high-quality, responsive, and fully optimized website
                    designed to elevate your business. Our expert team ensures
                    seamless functionality across all devices, enhancing user
                    experience and driving results for your brand."
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_4;

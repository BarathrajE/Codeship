import arrow from "../assets/right_arrow.png";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
                className="px-4 py-2 mt-3 background-color_btn rounded-pill border-0 fs-5 d-inline-flex align-items-center"
              >
                All Services{" "}
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
              <SwiperSlide className=" p-xl-5 p-4 bg-white " id="swiper-slide_2">
                <div>
                  <div className="d-flex align-items-center    mb-3">
                    <i className="fa-solid fa-tv icon_background p-3 fs-3 text-white rounded-circle bg-primary"></i>
                  </div>
                  <h2 className="font_58 fw-bold ">Web Development</h2>
                  <p className="font_24 text-secondary">
                    Get a high-quality, responsive, and fully optimized website
                    designed to elevate your business. Our expert team ensures
                    seamless functionality across all devices, enhancing user
                    experience and driving results for your brand.
                  </p>
                  <p className="pt-3 ">
                    Read More
                    <i className="fa-solid fa-greater-than ms-1"></i>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="  p-xl-5 p-4 bg-white" id="swiper-slide_2">
                <div>
                  <div className="d-flex align-items-center  mb-3">
                    <i className="fa-solid fa-tv icon_background p-3 fs-3 text-white rounded-circle bg-primary"></i>
                  </div>
                  <h2 className="font_58 fw-bold ">App Development</h2>
                  <p className="font_24 text-secondary">
                    Get a high-quality, responsive, and fully optimized website
                    designed to elevate your business. Our expert team ensures
                    seamless functionality across all devices, enhancing user
                    experience and driving results for your brand.
                  </p>
                  <p className="pt-3 ">
                    Read More
                    <i className="fa-solid fa-greater-than ms-1"></i>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="  p-xl-5 p-4 bg-white" id="swiper-slide_2">
                <div>
                  <div className="d-flex align-items-center  mb-3">
                    <i className="fa-solid fa-tv icon_background p-3 fs-3 text-white rounded-circle bg-primary"></i>
                  </div>
                  <h2 className="font_58 fw-bold ">UI/UX Design</h2>
                  <p className="font_24 text-secondary">
                    Get a high-quality, responsive, and fully optimized website
                    designed to elevate your business. Our expert team ensures
                    seamless functionality across all devices, enhancing user
                    experience and driving results for your brand.
                  </p>
                  <p className="pt-3 ">
                    Read More
                    <i className="fa-solid fa-greater-than ms-1"></i>
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_4;

import wing from "../assets/wing.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import arrow from "../assets/right_arrow.png";
import { Button } from "react-bootstrap";
import icon_1 from "../assets/erp.png";
import icon_2 from "../assets/crm.png";
import icon_3 from "../assets/hrms.png";
import background_image from "../assets/Rectangle 4.png";
import Slide_data from "./Slide_data";
import web from "../assets/web.png";
import app from "../assets/app.png";
import UI from "../assets/ui.png";
import amc from "../assets/amc.png";
import service from "../assets/service.png";
import digital from "../assets/digital.png";
import useScrollAnimation from "./Animation";
import aws from "../assets/aws.png";
import angular from "../assets/angular.png";
import node from "../assets/node.png";
import react from "../assets/react.png";

const Section_1 = () => {
  useScrollAnimation();
  return (
    <>
      <div className="parent py-5 px-5">
        <div className="row ">
          <div className="child d-flex gap-5  ">
            <div className="col-xl-6">
              <div>
                <p className="text-muted mb-1">How we can help you</p>
                <p className="font_64 fw-bold">
                  Services <br /> We Offer
                </p>
                <p className="font_24 text-secondary">
                  We offer a comprehensive range of software development
                  services tailored to meet the unique needs of your business. A
                  full-service creative agency designing and building inventive
                  digital experiences across all platforms and brand
                  touchpoints.
                </p>
                <Button
                  href="#"
                  className="px-4 py-2 mt-3 background-color_btn rounded-pill border-0 font_22"
                >
                  All Services
                  <img src={arrow} alt="arrow icon" className="ms-2  " />
                </Button>
              </div>
            </div>
            <div className="col-xl-6  ">
              <Slide_data
                icon={web}
                title="Web Development"
                description=" Get a high-quality, responsive, and fully optimized website
                    designed to elevate your business. Our expert team ensures
                    seamless functionality across all devices, enhancing user
                    experience and driving results for your brand."
              />
            </div>
            <div className="col-xl-6 ">
              <Slide_data
                icon={app}
                title="App Development"
                description=" Get a high-quality, responsive, and fully optimized website
                    designed to elevate your business. Our expert team ensures
                    seamless functionality across all devices, enhancing user
                    experience and driving results for your brand."
              />
            </div>
            <div className="col-xl-6  ">
              <Slide_data
                icon={UI}
                title="UI/UX Design"
                description=" Get a high-quality, responsive, and fully optimized website
                    designed to elevate your business. Our expert team ensures
                    seamless functionality across all devices, enhancing user
                    experience and driving results for your brand."
              />
            </div>
            <div className="col-xl-6">
              <Slide_data
                icon={amc}
                title="AMC "
                description="Get a high-quality, responsive, and fully optimized website
                    designed to elevate your business. Our expert team ensures
                    seamless functionality across all devices, enhancing user
                    experience and driving results for your brand."
              />
            </div>
            <div className=" col-xl-6 ">
              <Slide_data
                icon={service}
                title="Servers "
                description=" Get a high-quality, responsive, and fully optimized website
                    designed to elevate your business. Our expert team ensures
                    seamless functionality across all devices, enhancing user
                    experience and driving results for your brand."
              />
            </div>
            <div className="col-xl-6">
              <Slide_data
                icon={digital}
                title="Digital "
                description=" Get a high-quality, responsive, and fully optimized website
                    designed to elevate your business. Our expert team ensures
                    seamless functionality across all devices, enhancing user
                    experience and driving results for your brand."
              />
            </div>
          </div>
        </div>
      </div>
      <div  className="bg-black "></div>

      <div className="d-flex align-items-center justify-content-center   default_section_padding_50 bg-dark position-relative overflow-hidden">
        <div className="container-customize  ">
          <div className="row">
            <div className="col-xl-2  text-white   ">
              <div className="d-flex gap-5 ">
                <div className="d-flex flex-column align-items-center   ">
                  <img
                    src={icon_1}
                    alt=""
                    className="icon_background p-2 rounded-circle "
                  />
                  <span className="icon_background_line p-1 "></span>
                </div>
                <span className="font_18 pt-3">ERP Software</span>
              </div>
              <div className="d-flex gap-5  ">
                <div className="d-flex flex-column align-items-center">
                  <img
                    src={icon_2}
                    alt=""
                    className="icon_background p-2 rounded-circle"
                  />
                  <span className="icon_background_line p-1 "></span>
                </div>

                <span className="font_18 pt-3">CRM Software</span>
              </div>
              <div className="d-flex gap-5   ">
                <div className="d-flex flex-column align-items-center">
                  <img
                    src={icon_3}
                    alt=""
                    className="icon_background p-2 rounded-circle"
                  />
                  <span className="icon_background_line p-1 "></span>
                </div>
                <span className="font_18 pt-3 ">HRMS Software</span>
              </div>
            </div>
            <div className="col-xl-10  pt-5  text-white z-3 position-relative  ">
              <div className="d-flex align-items-center flex-column">
                <img
                  src={background_image}
                  alt=""
                  className="img-fluid pb-3 "
                />
                <p className="font_28  ">
                  Custom Made ERP Softwares for your Needs
                </p>
              </div>
              <div className="text-center ">
                <Button
                  href="/contact"
                  className="px-4  background-color_btn  rounded-pill  border-0 mt-3 font_18 me-3 "
                >
                  View Live Demo
                </Button>
                <Button
                  href="/contact"
                  className="px-4  bg-transparent   rounded-pill  mt-3  font_18"
                >
                  Purchase Product
                </Button>
              </div>
            </div>
          </div>
          <div className="background-color_blue_1 position-absolute bottom-0 end-0 "></div>
        </div>
      </div>
      <div className="bg-dark py-5 child_1">
        <div>
          <div className=" d-flex  gap-3 align-items-center justify-content-center pt-5 ">
            <div className="bg-white border br_15 background_size child_2   ">
              <img src={aws} alt="" className="img-fluid pt-xl-4  " />
            </div>
            <div className="bg-white border br_15  background_size"></div>
            <div className="bg-white border br_15  background_size"></div>
            <div className="bg-white border br_15  background_size"></div>
            <div className="bg-white border br_15  background_size"></div>
          </div>

          <div className="d-flex  justify-content-center gap-3 pt-xl-4 pt-lg-4 pt-md-3 pt-2 ">
            <div className="bg-white border br_15   background_size"></div>
            <div className="bg-white border br_15   background_size"></div>
            <div className="bg-white border br_15   background_size"></div>
            <div className="bg-white border br_15   background_size">
              <img src={aws} alt="" className="img-fluid pt-xl-4 view_image" />
            </div>
            <div className="bg-white border br_15   background_size"></div>
            <div className="bg-white border br_15   background_size">
              <img src={node} alt="" className="img-fluid pt-xl-4" />
            </div>
            <div className="bg-white border br_15   background_size"></div>
          </div>
          <div className="d-flex  justify-content-center pt-xl-4 pt-lg-4 pt-md-3 pt-2  ">
            <div className="container-customize_box_5">
              <div className="row">
                <div className="d-flex   justify-content-center align-items-center  gap-3 ">
                  <div className="col-xl-3 col-lg-4 col-md-5 col-sm-3  d-flex gap-3">
                    <div>
                      <div className="bg-white border br_15 mb-3 background_size"></div>
                      <div className="bg-white border br_15 background_size">
                        <img src={react} alt="" className="img-fluid pt-xl-4" />
                      </div>
                    </div>
                    <div className="">
                      <div className="bg-white border br_15 mb-3 background_size">
                        <img
                          src={angular}
                          alt=""
                          className="img-fluid pt-xl-4"
                        />
                      </div>
                      <div className="bg-white border br_15 background_size"></div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-8 col-6  ">
                    <p className="font_weight_600 font_464 text-center  m-0 text-white     ">
                      Amazing tech stack in <br /> our pocket
                    </p>
                    <p className=" text-center  text-white font_16 d-xl-block d-lg-block d-none m-0">
                      Utilize our team’s specialized full-stack expertise in
                      software development to turn your product vision into
                      reality. We are committed to providing solutions that
                      adhere to the highest coding standards, ensuring
                      reliability, scalability,
                    </p>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-2  d-flex gap-3">
                    <div>
                      <div className="bg-white border br_15 mb-3 background_size">
                        <img src={aws} alt="" className="img-fluid pt-xl-4" />
                      </div>
                      <div className="bg-white border br_15 background_size"></div>
                    </div>
                    <div>
                      <div className="bg-white border br_15 mb-3 background_size"></div>
                      <div className="bg-white border br_15 background_size">
                        {" "}
                        <img src={node} alt="" className="img-fluid pt-xl-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex  justify-content-center gap-3 pt-xl-4 pt-lg-4 pt-md-3 pt-2  ">
            <div className="bg-white border br_15   background_size">
              <img src={angular} alt="" className="img-fluid pt-xl-4" />
            </div>
            <div className="bg-white border br_15   background_size"></div>
            <div className="bg-white border br_15   background_size"></div>
            <div className="bg-white border br_15   background_size"></div>
            <div className="bg-white border br_15   background_size">
              <img src={react} alt="" className="img-fluid pt-xl-4" />
            </div>
            <div className="bg-white border br_15   background_size"></div>
            <div className="bg-white border br_15   background_size"></div>
          </div>
          <div className=" d-flex  gap-3 align-items-center justify-content-center pt-xl-4 pt-lg-4 pt-md-3 pt-2  ">
            <div className="bg-white border br_15 background_size text-center   "></div>
            <div className="bg-white border br_15  background_size ">
              <img src={react} alt="" className="img-fluid pt-xl-4 " />
            </div>
            <div className="bg-white border br_15  background_size"></div>
            <div className="bg-white border br_15  background_size"></div>
            <div className="bg-white border br_15  background_size ">
              <img src={angular} alt="" className="img-fluid pt-xl-4" />
            </div>
          </div>
        </div>
      </div>
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
          loop={true}
          // centeredSlides={true}
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
    </>
  );
};
export default Section_1;

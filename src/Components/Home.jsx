import { Button } from "react-bootstrap";
import background_image from "../assets/Group 38.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import icon_1 from "../assets/Group.png";
import icon_2 from "../assets/🦆 icon _rocket launch_.png";
import icon_3 from "../assets/Group (1).png";
import icon_4 from "../assets/Vector.png";
import "swiper/css";
import "../index.css"
const Home = () => {
  return (
    <>
    <div className="d-flex align-items-center justify-content-center pt-5 pb-3 ">
      <div className="container-customize">
        <div className="row align-items-center justify-content-center ">
          <div className="col-12 col-md-6 col-lg-6 col-xl-7 mb-5 order-md-0  order-1">
            <p className="font_54 font_weight_500   ">
              A global development company providing comprehensive solutions for
              innovative brands.
            </p>
            <Button
              href="/contact"
              className="px-4 py-2 background-color_btn font_24  rounded-3 border-0 "
            >
              Let’s Talk!
            </Button>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xl-5 mb-3 ">
            <img
              src={background_image}
              alt="Background"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="">
      <Swiper
        className="mySwiper py-4 " 
        id="swiper_1"
        slidesPerView={5}
        loop={true}
        modules={[Autoplay]}
        speed={11000}
        autoplay={{
          delay: 2500,
          disableOnInteraction:false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          650: { slidesPerView: 2 },
          983: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
          1629: { slidesPerView: 5 },
        }}
      >
        <SwiperSlide id="swiper-slide_1">TOYOTA</SwiperSlide>
        <SwiperSlide id="swiper-slide_1">Ubar</SwiperSlide>
        <SwiperSlide id="swiper-slide_1">Amazon</SwiperSlide>
        <SwiperSlide id="swiper-slide_1">Coinbase</SwiperSlide>
        <SwiperSlide id="swiper-slide_1">Credit karma</SwiperSlide>
        <SwiperSlide id="swiper-slide_1">TOYOTA</SwiperSlide>
        <SwiperSlide id="swiper-slide_1">Ubar</SwiperSlide>
        <SwiperSlide id="swiper-slide_1">Amazon</SwiperSlide>
        <SwiperSlide id="swiper-slide_1">Coinbase</SwiperSlide>
        <SwiperSlide id="swiper-slide_1">Credit karma</SwiperSlide>
      </Swiper>
    </div>
    <div className="background-color  d-flex align-items-center justify-content-center pb-5 pt-4 " >
      <div className=" container-customize_map  d-flex align-items-center justify-content-center  ">
        <div className=" background_world_image d-flex flex-column justify-content-center">

        <p className="font_40  pb-3 px-3 text-center font_weight_400   "> 
          Since our founding in 2020, Codeship has rapidly grown into a dynamic
          and thriving company.
        </p>
        <p className="font_40 px-3  text-center font_weight_400 ">
          With a shared dedication to innovation and a customer-centric
          approach, our team brings a wealth of experience and skills to the
          table.
        </p>
        </div>
      </div>
    </div>  
    <div className="d-flex align-items-center justify-content-center ">
      <div className="container-customize">
        <div className="row">
          <div className="col-xl-6  text-xl-start  ">
            <h2 className="font_58 font_weight_600">Some of the <br />  things br we can do <br /> for you</h2>
            <p className="font_24 ">
              We offer a comprehensive range of <br /> software development services
              tailored <br /> to meet the unique needs of your business.
            </p>
          </div>
          <div className="col-xl-6">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-5 rotate">
                <div className="card_background br_15  default_section_padding px-4 text-white mt-3">
                  <div className="pb-4 ">
                    <img src={icon_1} alt="" />
                    <span className="ps-2  font_28 font_weight_500 ">
                      Discovery
                    </span>
                  </div>
                  <p className="font_18 font_weight_400">
                    Gain valuable insights and define the scope through
                    comprehensive analysis, research, and feasibility
                    assessments. Our expert team collaborates with you ensuring
                    a clear understanding of your project’s objectives and
                    requirements.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className=" br_15  default_section_padding px-4 bg-white  shadow  mb-5 bg-body rounded">
                  <div className="pb-4">
                    <img src={icon_2} alt="" />
                    <span className="ps-3  font_28 font_weight_500 ">
                      Development
                    </span>
                  </div>
                  <p className="font_18 font_weight_400">
                    Leverage our team’s specialized full-stack expertise in
                    software development to bring your product vision to life.
                    We are dedicated to delivering solutions that meet the
                    highest coding standards, ensuring reliability, scalability,
                    and security.
                  </p>
                </div>
              </div>
              <div className="col-xl-6  col-lg-6 col-md-6 col-sm-6 col-12 ">
                <div className=" br_15  default_section_padding px-4 bg-white  shadow  mb-5 bg-body rounded">
                  <div className="pb-4">
                    <img src={icon_3} alt="" />
                    <span className="ps-3  font_28 font_weight_500 ">
                      Testing
                    </span>
                  </div>
                  <p className="font_18 font_weight_400">
                    Ensure the quality and reliability of your software through
                    our comprehensive testing services. Our team performs a wide
                    range of testing activities such as functional and
                    regression testing in order to ensure quality.
                  </p>
                </div>
              </div>
              <div className="col-xl-6  col-lg-6 col-md-6 col-sm-6 col-12">
                <div className=" br_15  default_section_padding px-4 bg-white  shadow   bg-body rounded">
                  <div className="pb-4">
                    <img src={icon_4} alt="" />
                    <span className="ps-3  font_28 font_weight_500 ">
                      Project <br />
                    </span>
                  </div>
                  <p className="font_18 font_weight_400 pb-5">
                    Seamlessly execute your software development project with
                    the help of our experienced project managers. We tailor fit
                    the methodology to your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};
export default Home;

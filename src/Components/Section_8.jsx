import icon_1 from "../assets/🦆 icon _Dribble_.png";
import icon_3 from "../assets/linkedin.png";
import icon_2 from "../assets/insta.png";
import icon_4 from "../assets/x.png";
import profile from "../assets/profile.png";
import empty from "../assets/Rectangle 20.png";
import made from "../assets/made.png";

const Footer = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center pt-5  background-colors">
        <div className="container-customize">
          <div className="row">
            <div className="col-12">
              <p className="font_54 font_weight_600 pt-xl-5 pt-lg-5 p-0">
                Hear What Our <br /> Customers Are Saying!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center  py-5  background-colors">
        <div className="container-customize">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div>
                <span className="font_20 text-secondary  ">
                  "Working with Codeship Pvt Ltd to design and develop our
                  eCommerce website has been an absolute game-changer for our
                  business. The team was professional, responsive, and truly
                  understood our vision. The website they delivered is not only
                  visually stunning but also fast, secure, and easy to navigate.
                  Sales have significantly increased thanks to the seamless user
                  experience and mobile optimization. We couldn’t be happier
                  with the results, and we highly recommend Codeship for anyone
                  looking for a high-quality, custom-built eCommerce solution."
                </span>
              </div>
              <div>
                <div className="d-flex justify-content-between align-items-center pt-5 ">
                  <div className="d-flex align-items-center justify-content-center ">
                    <img src={profile} alt="" className="img-fluid" />
                    <div>
                      <p className="font_24 font_weight_600 ps-4">
                        Suyash Sharma
                      </p>
                      <p className="font_24 font_weight_600 ps-4">
                        Founder, Factory Made
                      </p>
                    </div>
                    <p></p>
                  </div>
                  <div>
                    <img src={made} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="d-flex gap-5 pt-4 mb-3  ">
                <button className=" background-color_blue px-4 py-3 border-0   rounded-circle">
                  <i className="fa-solid fa-less-than text-white "></i>
                </button>
                <button className=" background-color_blue px-4 py-3 border-0 rounded-circle ">
                  <i className="fa-solid fa-greater-than text-white"></i>
                </button>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="d-flex justify-content-end justify-content-md-center br_15">
                <img src={empty} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center background-colors">
        <div className="container-customize">
          <div className="row">
            <div className="col-12">
              <p className="font_62 font_weight_600">
                Have an innovative thought?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center background-colors">
        <div className="container-customize">
          <div className="row">
            <div className="col-12 col-xl-6 mb-4">
              <p className="font_48 font_weight_400">Tell us about it.</p>
            </div>

            <div className="col-12 col-xl-6 pt-5">
              <div className="row mb-3">
                <div className="col-12 col-xl-6 col-md-6">
                  <p>Name & Company</p>
                  <input
                    type="text"
                    className="border-0  border-dark border-bottom bg-transparent fouce"
                  />
                </div>
                <div className="col-12 col-xl-5  col-md-6 ">
                  <p>E-mail Id</p>
                  <input
                    type="text"
                    className="border-0  border-dark border-bottom bg-transparent fouce"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12 col-md-6 mb-2  ">
                  <p className="text-start">Mobile Number</p>
                  <input
                    type="text"
                    className="border-0  border-dark border-bottom bg-transparent fouce"
                  />
                </div>
                <div className="col-12 col-md-6 mb-2 ">
                  <p>Subject</p>
                  <input
                    type="text"
                    className="border-0  border-dark border-bottom bg-transparent fouce"
                  />
                </div>
              </div>

              <p className="mb-3 py-2">I’m Interested in</p>

              <div className="row  mb-2 ">
                <div className="col-6 col-xl-3 col-md-3  ">
                  <p className="btn border border-dark rounded-pill font_15 w-100  ">
                    Web Development
                  </p>
                </div>
                <div className="col-6 col-xl-3 col-md-3 ">
                  <p className="btn border border-dark rounded-pill font_15 w-100">
                    App Development
                  </p>
                </div>
                <div className="col-6 col-xl-3 col-md-3  ">
                  <p className="btn border border-dark rounded-pill font_15 w-100">
                    CRM & Tools
                  </p>
                </div>
                <div className="col-6 col-xl-3 col-md-3 ">
                  <p className="btn border border-dark rounded-pill font_15 w-100">
                    Digital Marketing
                  </p>
                </div>
              </div>

              <div className="row mb-2">
                <div className="col-6 col-md-3  col-xl-3  ">
                  <p className="btn border border-dark rounded-pill font_15 w-100">
                    UI / UX Design
                  </p>
                </div>
                <div className="col-6  col-xl-3  col-md-3 ">
                  <p className="btn border border-dark rounded-pill font_15 w-100 ">
                    AMC
                  </p>
                </div>
                <div className="col-6  col-xl-3  col-md-3">
                  <p className="btn border border-dark rounded-pill font_15 w-100">
                    Servers & Hosting
                  </p>
                </div>
                <div className="col-6   col-xl-3  col-md-3 ">
                  <p className="btn border border-dark rounded-pill font_15 w-100 ">
                    Other Services
                  </p>
                </div>
              </div>
              <div className="row ">
                <div className="col-12 ">
                  <p className="pb-3">Tell us more about your project</p>
                  <input
                    type="text"
                    className="border-0  w-100 border-dark border-bottom bg-transparent fouce"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-center py-5 background-colors">
        <div className="container-customize">
          <div className="row  align-items-center   ">
            <div className="col-xl-6 col-lg-6 font_family mb-4">
              <div>
                <p className="font_36  font_weight_500   ">Follow us on :</p>
                <div className="d-flex gap-4">
                  <img src={icon_1} alt="" />
                  <img src={icon_2} alt="" />
                  <img src={icon_3} alt="" />
                  <img src={icon_4} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 ">
              <div className="d-flex ">
                <button className="btn background-color_btn px-5 py-2 border-0 text-white  rounded-pill">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-light text-dark pt-5 d-flex align-items-center justify-content-center">
        <div className="container-customize   ">
          <div className="row">
            <div className="col-12">
              <h3 className="fw-bold font_80">Let’s Talk</h3>
            </div>
          </div>
          <div className="row  justify-content-between">
            <div className="col-md-6 col-xl-6 col-lg-6">
              <a
                href=""
                className=" font_32 text-decoration-underline text-dark"
              >
                support@codeship.in
              </a>
              <p className="pt-5 font_28">
                No 1, 1st Floor, Narasimhan St, Jothi Nagar, West Mambalam,
                Chennai, Tamil Nadu 600033
              </p>
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 mb-4  ">
              <div className="row ">
                <div className="col-6 font_25 pb-5 ">
                  <p>
                    <a
                      href="#"
                      className="text_black_color  text-decoration-underline font_30    "
                    >
                      Home
                    </a>
                  </p>
                  <p className="pt-4 ">
                    <a
                      href="#"
                      className="text_black_color text-decoration-underline font_30 "
                    >
                      About
                    </a>
                  </p>
                  <p className="pt-4">
                    <a
                      href="#"
                      className="text_black_color text-decoration-underline  font_30 "
                    >
                      Capabilities
                    </a>
                  </p>
                </div>
                <div className="col-6 font_25 ">
                  <p className="">
                    <a
                      href="#"
                      className="text_black_color text-decoration-underline font_30 "
                    >
                      Solutions
                    </a>
                  </p>
                  <p className="pt-4">
                    <a
                      href="#"
                      className="text_black_color text-decoration-underline font_30"
                    >
                      Our Works
                    </a>
                  </p>
                  <p className="pt-4">
                    <a
                      href="#"
                      className="text_black_color text-decoration-underline font_30"
                    >
                      Contact
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>
      <div className="d-flex align-items-center justify-content-center background-colors">
        <div className="container-customize">
          <div className="row ">
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 ps-5">
              <a
                href="#"
                className="me-3 text-dark text-decoration-underline font_25"
              >
                Privacy
              </a>
              <a
                href="#"
                className="me-3 text-dark text-decoration-underline font_25"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-dark text-decoration-underline font_25"
              >
                Sitemap
              </a>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <p className="font_25 text-xl-end text-lg-end  text-md-start text-sm-start pt-sm-2 ">
                @ 2021 - 2024 Codeship pvt Ltd.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

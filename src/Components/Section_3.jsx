import icon_1 from "../assets/Group.png";
import icon_2 from "../assets/🦆 icon _rocket launch_.png";
import icon_3 from "../assets/Group (1).png";
import icon_4 from "../assets/Vector.png";

const Section_3 = () => {
  return (
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
              <div className="col-xl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
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
              <div className="col-xl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
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
  );
};
export default Section_3;

import icon_1 from "../assets/erp.png";
import icon_2 from "../assets/crm.png";
import icon_3 from "../assets/hrms.png";
import background_image from "../assets/Rectangle 4.png";
import { Button } from "react-bootstrap";

const Section_5 = () => {
  return (
    <div className="d-flex align-items-center justify-content-center  default_section_padding_100 bg-dark position-relative">
      <div className="container-customize    ">
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
              <img src={background_image} alt="" className="img-fluid pb-3 " />
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
        <div className="background-color_blue_1 position-absolute bottom-0 end-0"></div>
      </div>
    </div>
  );
};
export default Section_5;

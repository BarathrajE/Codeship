import { Button } from "react-bootstrap";
import background_image from "../assets/Group 38.png";
const Home = () => {
  return (
    <div className="d-flex align-items-center justify-content-center pt-5 pb-3 ">
  <div className="container-customize">
    <div className="row align-items-center justify-content-center ">
      <div className="col-12 col-md-6 col-lg-6 col-xl-7 mb-5 order-md-0  order-1">
        <p className="font_54 font_weight_500   ">
          A global development  company providing comprehensive solutions for
          innovative brands.
        </p>
        <Button
          href="/contact"
          className="px-4 py-2 background-color_btn font_24  rounded-3 border-0 mt-3"
        
        > 
           Let’s Talk!
        </Button>
      </div>
      <div className="col-12 col-md-6 col-lg-6 col-xl-5 mb-3">
        <img src={background_image} alt="Background" className="img-fluid" />
      </div>
    </div>
  </div>
</div>

  );
};
export default Home;

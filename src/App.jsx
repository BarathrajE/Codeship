import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./Components/navbar";
import "./utility.css";
import Home from "./Components/Home";
import Section_1 from "./Components/Section_1";
import Section_2 from "./Components/Section_2";
import Section_3 from "./Components/Section_3";
import Section_4 from "./Components/Section_4";
import Section_5 from "./Components/Section_5";
import Section_6  from "./Components/Section_6";
import Footer  from "./Components/Section_8";
import Section_7 from "./Components/Section_7";


function App() {
  return (
    <div >
    
      <Navbars />
      <Home />
      <Section_1 />
      <Section_2 />
      <Section_3 /> 
      <Section_4 /> 
      <Section_5 />
      <Section_6 />
      <Section_7 />
      <Footer />
    </div>
  );
}

export default App;

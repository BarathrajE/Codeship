import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./Components/navbar";
import "./utility.css";
import Home from "./Components/Home";
import Section_1 from "./Components/Section_1";
import Footer  from "./Components/Footer";
function App() {
  return (
    <div >
    
      <Navbars />
      <Home />
      <Section_1 />
      <Footer />
    </div>
  );
}

export default App;

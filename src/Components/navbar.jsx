import { Navbar, Nav, Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import logo from "../assets/logo 1.png";
import dot from "../assets/dot.png";

const Navbars = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="d-flex align-items-center justify-content-center background-color">
      <Navbar
        className="bg-white nav_container_customize background-color"
        expand="xl"
      >
        <div>
          <Button
            className=" d-xl-none bg-white py-2 px-0 text-dark border-0   "
            onClick={handleShow}
          >
            <i className="fa-solid fa-bars-staggered m-0 font_18   "></i>
          </Button>
          <Navbar.Brand href="/" className="ps-4 ps-xl-0 ">
            <img src={logo} alt="Logo" className="img-fluid" />
          </Navbar.Brand>
        </div>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/" className="font_24 pe-4">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="font_24 pe-4">
              About
            </Nav.Link>
            <Nav.Link href="/services" className="font_24 pe-4">
              Services
            </Nav.Link>
            <Nav.Link href="/solutions" className="font_24 pe-4">
              Solutions
            </Nav.Link>
            <Nav.Link href="/works" className="font_24 pe-4">
              Our Works
            </Nav.Link>
            <Nav.Link href="/contact" className="font_24 pe-4">
              Contact
            </Nav.Link>
            <Button
              href="/contact"
              className="px-3 pt-1 background-color_btn rounded-pill border-0 font_24"
            >
              <img src={dot} alt="" className="pe-1" /> Let’s Talk!
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="img-fluid" />
          </Navbar.Brand>
        </Offcanvas.Header>
        <Offcanvas.Body className="">
          <Navbar className="bg-white nav_container_customize ">
            <Navbar.Collapse id="navbar-nav">
              <Nav className="d-flex flex-column">
                <Nav.Link href="/" className="font_24 pe-4">
                  Home
                </Nav.Link>
                <Nav.Link href="/about" className="font_24 pe-4">
                  About
                </Nav.Link>
                <Nav.Link href="/services" className="font_24 pe-4">
                  Services
                </Nav.Link>
                <Nav.Link href="/solutions" className="font_24 pe-4">
                  Solutions
                </Nav.Link>
                <Nav.Link href="/works" className="font_24 pe-4">
                  Our Works
                </Nav.Link>
                <Nav.Link href="/contact" className="font_24 pe-4">
                  Contact
                </Nav.Link>
                <Button
                  href="/contact"
                  className="px-3 pt-1 background-color_btn rounded-pill border-0 font_24"
                >
                  <img src={dot} alt="" className="pe-1" /> Let’s Talk!
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Navbars;

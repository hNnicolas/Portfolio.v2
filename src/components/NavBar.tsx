import "../scss/NavBar.scss"; // Importing navbar-specific styles
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ThemeToggleButton from "./ThemeButton";
import MyPicture from "../assets/images/my_image.jpg"

const NavBar: React.FC = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid className="px-0">
        <div className="image-title">
        <img src={MyPicture} alt="profile image" className="profile-image" />
        <Navbar.Brand as={NavLink} to="/" className="title">
          <div className="main-title">Nicolas</div>
          <div className="main-title">HUANG</div>
          <div className="subtitle">PORTFOLIO</div>
        </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />

        <Navbar.Collapse
          id="basic-navbar-nav"
        >
          <Nav className="nav-links mx-auto">
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active-nav-link" : "")
              }
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active-nav-link" : "")
              }
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active-nav-link" : "")
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active-nav-link" : "")
              }
              to="/contact"
            >
              Contact
            </NavLink>            
          </Nav>
          <div className="d-lg-none d-flex justify-content-end w-100">
              <ThemeToggleButton />
            </div>
          <div className="d-none d-lg-block">
            <ThemeToggleButton />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

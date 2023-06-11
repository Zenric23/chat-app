import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { MdPermContactCalendar } from "react-icons/md";
import { RiNotification2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Fade from "react-bootstrap/Fade";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";


const Header = ({username, socket}) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);


  const handleLeave = () => {
    socket.emit('leave', username)
    navigate('/')
}

  return (
    <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
      <Container fluid className="px-4">
        <Navbar.Brand as={NavLink} to="/">
          Hi, {username}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-warning">
              <NavLink
                to="/a"
                className={({ isActive }) =>
                  isActive ? "text-warning" : "text-white"
                }
              >
                <BsFillChatLeftTextFill size={23} />
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/b"
                className={({ isActive }) =>
                  isActive ? "text-warning" : "text-white"
                }
              >
                <MdPermContactCalendar size={24} />
              </NavLink>
            </Nav.Link>
            <Nav.Link as="span" className="position-relative text-white">
              <span>
                <RiNotification2Fill size={24} onClick={() => setOpen(!open)} style={{cursor: 'pointer'}} />
                <Fade in={open} className="position-absolute end-50 top-100" style={{width: 300, zIndex: 1000}}>
                  <Card className="text-black">
                    <h6 className="border-bottom p-3 text-center text-secondary">Notification</h6>
                    <p className="border-bottom p-2" style={{cursor: 'pointer'}}><strong>Zenric Clarete</strong> has new message...</p>
                    <p className="border-bottom p-2" style={{cursor: 'pointer'}}><strong>Zenric Clarete</strong> has new message...</p>
                    <p className="border-bottom p-2" style={{cursor: 'pointer'}}><strong>Zenric Clarete</strong> has new message...</p>
                    <p className="border-bottom p-2" style={{cursor: 'pointer'}}><strong>Zenric Clarete</strong> has new message...</p>
                    <p className="border-bottom p-2" style={{cursor: 'pointer'}}><strong>Zenric Clarete</strong> has new message...</p>
                  </Card>
                </Fade>
              </span>
            </Nav.Link>
            <Nav.Link
              as="span"
              className="fw-bold text-white d-none d-lg-inline"
            >
              |
            </Nav.Link>
            <Nav.Link 
              as="span" 
              style={{ textDecoration: "underline", color: "white", cursor: 'pointer' }} 
              onClick={handleLeave}
            >
              Leave
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

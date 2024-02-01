import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/file/small_logo.png'
import { AiOutlineDown, AiOutlineKey } from 'react-icons/ai'
import { useState } from 'react';

function Header() {

  const [show, setShow] = useState(false);

  return (
    <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" bg='dark' >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt='brn' width='150px' height='30px' className='object-fit-cover' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/NewDailyStatusUpdate">Daily Status Update</Nav.Link>
            <Nav.Link href="/UserTasks">Tasks</Nav.Link>
            <Nav.Link href="/UserMessages">Messages</Nav.Link>
            <NavDropdown title="More" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/NewRequest">Create a Request</NavDropdown.Item>
              <NavDropdown.Item href="/NewLeave">
                Apply Leave
              </NavDropdown.Item>
              <NavDropdown.Item href="/curriculum">Curriculum</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <div className='text-white-50 position-relative' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} >
              <img
                src="https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg"
                alt="MS Dhoni"
                width='40px'
                height='40px'
                className='rounded-circle'
              />{" "}
              <span className="">
                @username <AiOutlineDown />
              </span>
              {show && <div className="position-absolute top-150 start-50" onClick={''}>
                <AiOutlineKey />
                <span>Log Out</span>
              </div>}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';



import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#2E8B57', minHeight: '150vh' }}>
        
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/home">My Personal Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/" style={{ textDecoration: 'none', marginRight: '10px' }}>
                  <Button variant="outline-primary">Home</Button>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none', marginRight: '10px' }}>
                  <Button variant="outline-success">About</Button>
                </Link>
                <Link to="/education" style={{ textDecoration: 'none', marginRight: '10px' }}>
                  <Button variant="outline-warning">Education</Button>
                </Link>
                <Link to="/hobbies" style={{ textDecoration: 'none', marginRight: '10px' }}>
                  <Button variant="outline-danger">Hobbies</Button>
                </Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                 Contact
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="mailto:emazo@gbox.ncf.edu.ph">Email Me</Dropdown.Item>
                <Dropdown.Item href="09923309349">Call Me</Dropdown.Item>
                <Dropdown.Item href="/about">About</Dropdown.Item>
                
              </Dropdown.Menu>
                </Dropdown>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

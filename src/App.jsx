import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true, // Opt-in for v7 startTransition behavior
        v7_relativeSplatPath: true, // Opt-in for v7 splat path behavior
      }}
    >
      <div style={{ backgroundColor: '#2E8B57', minHeight: '150vh' }}>
        
        {/* Navigation Bar */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">My Personal Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" style={{ marginRight: '10px' }}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" style={{ marginRight: '10px' }}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/education" style={{ marginRight: '10px' }}>
                  Education
                </Nav.Link>
                <Nav.Link as={Link} to="/hobbies" style={{ marginRight: '10px' }}>
                  Hobbies
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" style={{ marginRight: '10px' }}>
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Routes */}
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


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';



function Header(){
    return (
        <div >
          <Navbar expand="lg" className="bg-danger " >
            <Link to="/" className=" text-light ms-4 text-decoration-none fs-1 fw-bold"><span className='text-dark'>Cake</span> Bees</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className=" d-flex align-items-center justify-content-evenly fs-4 mx-4 w-100 ">
            <Link to="/" className="text-light text-decoration-none mx-2">Home</Link>
            <Link to="/Shop" className="text-light text-decoration-none mx-2">Shop</Link> 
            <Link to="/About" className="text-light text-decoration-none mx-2">About</Link>        
          </Nav>
        </Navbar.Collapse>
    </Navbar>

   
        </div>
    )
}


export default Header;
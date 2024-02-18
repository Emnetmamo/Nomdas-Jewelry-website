import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/lgo.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* Logo on the left */}
      <Link className="navbar-brand" to="/">
        <img  src={Logo} alt="Nomdas Logo" className="logo-img" style={{width: "250px", height: "100px", borderRadius:'50px'}} />
      </Link>

      {/* Links in the middle */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto" style={{marginLeft:"350px"}}>
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shop">Shop</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Order Now button on the right */}
      <div className="order-now-btn">
        <button className="btn btn-warning">Order Now</button>
      </div>
    </nav>
  );
}

export default Navbar;

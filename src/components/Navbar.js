import React from 'react';
import { Link } from "react-router-dom";

/**
 * 3. Function Component
 * 6. Extracting Component
 */
function Navbar() {
    return (
        <div className="">
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <Link to="/" className="navbar-brand" >
                    UWUdemy
                </Link>
            
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home <span className="sr-only">(current)</span>
                            </Link>                
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link">
                                Products
                            </Link>                
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link">
                                Cart
                            </Link>                
                        </li>
                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact-us" className="nav-link">
                                Contact Us
                            </Link>                
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;


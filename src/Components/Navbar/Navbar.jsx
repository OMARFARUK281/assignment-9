import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
        <nav className="navbar">

          <h1 className="title-bar">CareerHub</h1>

         <div className="menu-bar">
           <Link to="/"> <span className="jobs">Statistics</span> </Link>
           <Link to="/Applied Jobs"><span className="applied-job">Applied Jobs</span></Link>
           <Link to="/Blog"><span className="applied-job">Blog</span></Link>
         </div>

           <button className="btn-apply">Star Applying</button>

        </nav>
  );
};

export default Navbar;

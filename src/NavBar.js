import React from "react";
import "./styles.css"
import {Link,NavLink} from "react-router-dom";

const NavBar = () =>{
   return (
    <div className="navbar">
    <Link to ="/">Home</Link>
    <Link to="/Home">Home</Link>
    <Link to="/About">About</Link>
    <Link to="/Blogs">Bolgs</Link>
    </div>

   );
}

export default NavBar;


// Link  is used for routing and it takes the path as a prop and its prevent the default behaviour 
// Same way we can use NavLink == extra feature apart from Link is it create class  active when the link is clicked 

// {/* <a href="/Home" className="nav-item"> Home </a>
//         <a href="/About" className="nav-item"> About </a>
//         <a href="/Blogs" className="nav-item"> Blogs </a> */}
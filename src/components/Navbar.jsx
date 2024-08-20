import "../Stylesheets/navbar.scss";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10)
    })
  }, [])

  function toggleMenu(){
    setMenu(!menu);
  }

  return(
    <div className={scroll ? " nav-container bg-color" : "nav-container"}>
      <div className="nav-logo">
        <img />
        <Link className="nav-name">
          <h1>GYM</h1>
          <h2>GYM CENTER</h2>
        </Link>
      </div>

      <ul className="nav-links">
        <Link to={"/"} className="nav-link">Home</Link>
        <Link to={"/about"} className="nav-link">About</Link>
        <Link to={"/gallery"} className="nav-link">Gallery</Link>
        <Link to={"/schedule/monday"} className="nav-link">Schedule</Link>
        <Link to={"/pricing"} className="nav-link">Pricing</Link>
        <Link to={"/classes"} className="nav-link">Classes</Link>
        <Link to={"/contact"} className="nav-link">Contact</Link>
      </ul>

      <div className={menu ? "mobile-menu menu-open" : "mobile-menu menu-clossed"}>
        <p onClick={toggleMenu}>X</p>
        <ul className="mobile-link">
          <li><Link to={"/"} onClick={toggleMenu}>Home</Link></li>
          <li><Link to={"/about"} onClick={toggleMenu}>About</Link></li>
          <li><Link to={"/gallery"} onClick={toggleMenu}>Gallery</Link></li>
          <li><Link to={"/schedule/monday"} onClick={toggleMenu}>Schedule</Link></li>
          <li><Link to={"/pricing"} onClick={toggleMenu}>Pricing</Link></li>
          <li><Link to={"/classes"} onClick={toggleMenu}>Classes</Link></li>
          <li><Link to={"/contact"} onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div> 


      <div className="nav-buttons">
        <div className="hamburger-menu">
          <IoMdMenu onClick={toggleMenu} />
        </div>
        <div className="join-button">
          <Link>
            <div><FaPlus /></div>
            <p>JOIN US</p>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Navbar;
import "../Stylesheets/footer.scss";
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";

function Footer(){
  return(
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <img />
          <p>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
          <div className="footer-icons">
            <div className="footer-icon"><FaFacebookF /></div>
            <div className="footer-icon"><FaTwitter /></div>
            <div className="footer-icon"><FaYoutube /></div>
            <div className="footer-icon"><FaPinterest /></div>
          </div>
          <p>Privacy Policy | © 2024 Gymate</p>
        </div>

        <div className="footer-column">
          <p className="footer-column-title">Our Classes</p>
          <span></span>
          <div className="classes-column">
            <p>Fitness Classes</p>
            <p>Aerobics Classes</p>
            <p>Power Yoga</p>
            <p>Learn Machines</p>
            <p>Full-body Strength</p>
          </div>
        </div>

        <div className="footer-column">
          <p className="footer-column-title">Working Hours</p>
          <span></span>
          <div className="footer-schedule">
            <p className="day">Monday - Friday:</p>
            <p>7:00am - 9:00pm</p>
            <p className="day">Saturnay:</p>
            <p>8:00am - 8:00pm</p>
            <p className="day">Sunday - Closed</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
import "../../Stylesheets/contact.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";

function Contact(){

  return(
    <section id="contact-section">
      <div className="contact-container">
        <div className="contact-left-column">
          <h2>We are here for help you! To Shape Your Body.</h2>
          <p>At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>
          <div className="contact-grid-info">

            <div className="contact-info-container">
              <p className="contact-info-title">New York City, USA</p>
              <span></span>
              <p>85 Briston Mint Street, <br/>
              London, E1 8LG, USA</p>
            </div>

            <div className="contact-info-container">
              <p className="contact-info-title">Opening Hours</p>
              <span></span>
              <p>Mon to Fri: 7:30 am — 1:00 am <br/>
              Mon to Fri: 7:30 am — 1:00 am</p>
            </div>

            <div className="contact-info-container">
              <p className="contact-info-title">Information</p>
              <span></span>
              <p>+800-123-4567 <br/>
                gymat@gymail.com</p>
            </div>

            <div className="contact-info-container">
              <p className="contact-info-title">Follow Us On</p>
              <span></span>
              <div className="contact-info-icons-container">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaPinterestP />
              </div>
            </div>

          </div>
        </div>

        <div className="contact-right-column">
          <h3>Leave Us Your Info</h3>
          <span></span>
          <form className="contact-form-container">
            <input type="text" placeholder="Full Name*" required/>
            <input type="text" placeholder="Email Address*" required/>
            <select name="Class">
              <option value="" disabled selected>Select Class</option>
              <option value="cycling">Cycling</option>
              <option value="meditation">Meditation</option>
              <option value="boxing">Boxing</option>
              <option value="workout">Workout</option>
              <option value="power">Power</option>
              <option value="karate">Karate</option>
              <option value="yoga">Yoga</option>
              <option value="mma">MMA</option>
              <option value="crossfit">Crossfit</option>
              <option value="fitness">Fitness</option>
              <option value="body building">Body Building</option>
              <option value=""></option>
            </select>
            <textarea placeholder="Comment"/>
          </form>
          <button>SUBMIT NOW</button>
        </div>

      </div>

      <div className="contact-map">

      </div>
    </section>
  )
}

export default Contact;
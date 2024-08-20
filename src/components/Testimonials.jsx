import "../Stylesheets/testimonials.scss";
import highlight from "../Assets/about/highlight.svg";
import testimonialImg from "../Assets/testimonials/testimonial.jpg";
import quote from "../Assets/testimonials/quote.png";
import sponsor1 from "../Assets/testimonials/sponsor-1.png";
import sponsor2 from "../Assets/testimonials/sponsor-2.png";
import sponsor3 from "../Assets/testimonials/sponsor-3.png";
import sponsor4 from "../Assets/testimonials/sponsor-4.png";
import sponsor5 from "../Assets/testimonials/sponsor-5.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Testimonials(){
  return(
    <section id="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-title">
          <p>TESTIMONIALS</p>
          <img src={highlight} />
        </div>

        <div className="testimonials-slider">
          <div className="testimonial-slider-container">
            <img src={testimonialImg} alt="Testimonial image" />
            <div className="slider-container-text">
              <img src={quote} />
              <p>“I've been a member of Gymate for the past 6 months and it has been an amazing experience. The trainers are knowledgeable and supportive, the equipment is top-notch, and the community of members is friendly and encouraging.”</p>
              <p className="testimonial-text-name">Harry Potter</p>
              <p>CEO of Hogwarts</p>
            </div>
            <div className="testimonials-buttons">
              <button><FaArrowLeft /></button>
              <button><FaArrowRight /></button>
            </div>
          </div>
        </div>

        <div className="testimonials-sponsors">
          <img src={sponsor1} alt="testimonial sponsor" />
          <img src={sponsor2} alt="testimonial sponsor" />
          <img src={sponsor3} alt="testimonial sponsor" />
          <img src={sponsor4} alt="testimonial sponsor" />
          <img src={sponsor5} alt="testimonial sponsor" />
        </div>
      </div>
    </section>
  )
}

export default Testimonials;
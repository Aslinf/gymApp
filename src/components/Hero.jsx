import { Link } from "react-router-dom";
import "../Stylesheets/hero.scss";

function Hero(){
  return(
    <section id="hero-section">
      <div className="hero-info">
        <div className="hero-text">
          <p>Find your energy</p>
          <h2>make your body <br/> <span>fit & perfect </span></h2>
          <Link to={"/classes"}>OUR CLASSES</Link>
        </div>

        <div className="hero-share">
          <p>SHARE</p>
          <span></span>
          <div>
            links
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;

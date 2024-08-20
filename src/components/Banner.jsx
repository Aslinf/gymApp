import { Link } from "react-router-dom";
import "../Stylesheets/banner.scss";

function Banner(){
  return(
    <section id="banner-section">
      <div className="banner-container">
        <h3>Need a Fitness Trainer?</h3>
        <p><span>Call:</span> +12-345678910</p>
        <Link>PURCHASE NOW</Link>
      </div>
    </section>
  )
}

export default Banner;
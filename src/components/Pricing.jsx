import { Link } from "react-router-dom";
import "../Stylesheets/pricing.scss"
import highlight from "../Assets/about/highlight.svg";
import price1 from "../Assets/pricing/price-1.jpg";
import price2 from "../Assets/pricing/price-2.jpg";
import price3 from "../Assets/pricing/price-3.jpg";

function Pricing(){
  return(
    <section id="pricing-section">
      <div className="pricing-container">
        <div className="pricing-title">
          <p>PRICING</p>
          <img src={highlight}/>
          <h3>Exclusive Price</h3>
          <p>Gymat an unknown printer took a galley of type and scrambled <br />
          make a type specimen book.</p>
        </div>

        <div className="pricing-grid">

          <div className="price-container">
            <div className="price-container-head">
              <img src={price1} />
              <p>Beginners</p>
            </div>
            <div className="price-container-text">
              <p className="price-text">$ <span className="price">39</span> p/m</p>
              <p>Free Hand</p>
              <p>Gym Fitness</p>
              <p>Weight Loss</p>
              <p>Personal Trainer</p>
              <p>Cycling</p>
              <Link to={"/contact"}>PURCHASE NOW</Link>
            </div>
          </div>

          <div className="price-container">
          <div className="price-container-head">
              <img src={price2} />
              <p>Beginners</p>
            </div>
            <div className="price-container-text">
              <p className="price-text">$ <span className="price">65</span> p/m</p>
              <p>Free Hand</p>
              <p>Gym Fitness</p>
              <p>Weight Loss</p>
              <p>Personal Trainer</p>
              <p>Cycling</p>
              <Link to={"/contact"}>PURCHASE NOW</Link>
            </div>
          </div>

          <div className="price-container">
            <div className="price-container-head">
              <img src={price3} />
              <p>Beginners</p>
            </div>
            <div className="price-container-text">
              <p className="price-text">$ <span className="price">100</span> p/m</p>
              <p>Free Hand</p>
              <p>Gym Fitness</p>
              <p>Weight Loss</p>
              <p>Personal Trainer</p>
              <p>Cycling</p>
              <Link to={"/contact"}>PURCHASE NOW</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing;
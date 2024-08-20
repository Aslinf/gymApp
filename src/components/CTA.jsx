import { Link } from "react-router-dom";
import "../Stylesheets/cta.scss";
import { IoIosArrowRoundForward } from "react-icons/io";

function CTA(){
  return(
    <div className="cta-container">
      <div className="cta-content">
        <h3>We Are Providing Best <br/> Fitness Service For You</h3>
        <Link to={"/contact"}>JOIN US <IoIosArrowRoundForward /></Link>
      </div>
    </div>
  )
}

export default CTA;
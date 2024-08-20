import { Link } from "react-router-dom";
import "../../Stylesheets/about.scss";
import img from "../../Assets/about/girl.png";
import trainers from "../../Assets/about/trainers-logo.png";
import equipment from "../../Assets/about/equipment-logo.png";
import machines from "../../Assets/about/machines-logo.png";
import highlight from "../../Assets/about/highlight.svg";

function WhoWeAre(){
  return(
    <div className="who-we-are-info">
      <div className="who-we-are-text">
        <div className="who-we-are-text-title">
          <p className="highlight">WHO WE ARE</p>
          <img src={highlight} />
          <h3>Take Your Health And Body To <br/> The Next Level</h3>
          <p>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
        </div>
        
        <div className="who-we-are-highlight">
          <div className="highlight-item">
            <img src={trainers} alt="icon" />
            <p>PROFESSIONAL <br/> TRAINERS</p>
          </div>
          <div className="highlight-item borders">
            <img src={equipment} alt="icon" />
            <p>MODERN <br/> EQUIPMENTS</p>
          </div>
          <div className="highlight-item">
            <img src={machines} alt="icon" />
            <p>FANCY GYM <br/> MACHINES</p>
          </div>
        </div>

        <Link to={"/classes"} className="cta-button">CLASSES </Link>
      </div>

      <div className="who-we-are-img">
        <img src={img} alt="girl jumping" />
      </div>
    </div>
  )
}

export default WhoWeAre;
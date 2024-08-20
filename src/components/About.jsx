import "../Stylesheets/about.scss";
import progression from "../Assets/about/progression-logo.png";
import workout from "../Assets/about/workout-logo.png";
import nutritions from "../Assets/about/nutrition-loogo.png";
import WhoWeAre from "./AboutPage/WhoWeAre";
import img from "../Assets/about/girl.png";
import trainers from "../Assets/about/trainers-logo.png";
import equipment from "../Assets/about/equipment-logo.png";
import machines from "../Assets/about/machines-logo.png";
import highlight from "../Assets/about/highlight.svg";
import { Link } from "react-router-dom";

function About(){
  return(
    <section id="who-we-are-section">
      <div className="who-we-are-grid">
        <div className="gym-info">
          <img src={progression} alt="icon" />
          <p>PROGRESSION</p>
          <p>Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.</p>
        </div>
        <div className="gym-info">
          <img src={workout} alt="icon" />
          <p>WORKOUT</p>
          <p> With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.</p>
        </div>
        <div className="gym-info">
          <img src={nutritions} alt="icon" />
          <p>NUTRITIONS</p>
          <p>Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.</p>
        </div>
      </div>

      <WhoWeAre />

    </section>
  )
}

export default About;
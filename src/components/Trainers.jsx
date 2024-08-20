import coachBG from "../Assets/trainers/coach-bg.png";
import coach1 from "../Assets/trainers/coach-1.png";
import coach2 from "../Assets/trainers/coach-2.png";
import coach3 from "../Assets/trainers/coach-3.png";
import highlight from "../Assets/about/highlight.svg";
import "../Stylesheets/trainers.scss";

function Trainers(){
  return(
    <section id="trainers-section">
      <div className="trainers-container">
        <div className="coaches-title">
          <p>GYM TRAINERS</p>
          <img src={highlight} />
          <h3>Team Of Experts Coaches</h3>
          <p>Expert team of coaches helps you succeed in any goal,<br/> personalized guidance and motivation provided! </p>
        </div>

        <div className="coaches-grid">
          <div className="coach-container">
            <img src={coach1} alt="coach photo" />
            <img src={coachBG} />
            <div className="coach-info">
              <p>Ana June</p>
              <p>title</p>
              <div className="coach-icons">
                iconos
              </div>
            </div>
          </div>

          <div className="coach-container">
            <img src={coach2} alt="coach photo" />
            <img src={coachBG} />
            <div className="coach-info">
              <p>John Doe</p>
              <p>title</p>
              <div className="coach-icons">
                iconos
              </div>
            </div>
          </div>

          <div className="coach-container">
            <img src={coach3} alt="coach photo" />
            <img src={coachBG} />
            <div className="coach-info">
              <p>Will Lewis</p>
              <p>title</p>
              <div className="coach-icons">
                iconos
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Trainers;
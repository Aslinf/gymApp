import "../Stylesheets/featured.scss";
import highlight from "../Assets/about/highlight.svg";

function Featured(){
  return(
    <section id="featured-section">
      <div className="featured-container">
        <div className="featured-title">
          <p className="highlight">OUR FEATURED CLASS</p>
          <img src={highlight} />
          <h3>We Are Offering The Best Flexible Classes</h3>
        </div>

        <div className="featured-grid">

          <div className="grid-item-1 grid-item">
            <div className="grid-img grid-item-1-img"></div>
            <div className="grid-text">
              <p>Cycling</p>
              <p>Wednesday: 9:00-10:00am</p>
            </div>
          </div>

          <div className="grid-item-2 grid-item">
            <div className="grid-img grid-item-2-img"></div>
            <div className="grid-text">
              <p>Karate</p>
              <p>Friday: 10:00-11:00am</p>
            </div>
          </div>

          <div className="grid-item-3 grid-item">
           <div className="grid-img grid-item-3-img"></div>
            <div className="grid-text">
              <p>Power</p>
              <p>Wednesday: 9:00-10:00am</p>
            </div>
          </div>

          <div className="grid-item-4 grid-item">
            <div className="grid-img grid-item-4-img"></div>
            <div className="grid-text">
              <p>Meditation</p>
              <p>Friday: 1:00-2:00pm</p>
            </div>
          </div>

          <div className="grid-item-5 grid-item">
           <div className="grid-img grid-item-5-img"></div>
            <div className="grid-text">
              <p>Martial Arts</p>
              <p>Sunday: 6:00-7:00pm</p>
            </div>
          </div>

          <div className="grid-item-6 grid-item">
            <div className="grid-img grid-item-6-img"></div>
            <div className="grid-text">
              <p>Workout</p>
              <p>Monday: 4:00-5:00pm</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Featured;
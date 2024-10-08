import { Link } from "react-router-dom";

function Monday(){

  return(
    <>
      <ul className="schedule-class">
        <li className="schedule-class-info">
          <p className="schedule-class-info-title">Class Name</p>
          <p className="schedule-class-info-text">Fitness</p>
        </li>
        <li className="schedule-class-info">
          <p className="schedule-class-info-title">Time</p>
          <p className="schedule-class-info-text">9:00am - 10:00am</p>
        </li>
        <li className="schedule-class-info">
          <p className="schedule-class-info-title">Trainer</p>
          <p className="schedule-class-info-text">David Vila</p>
        </li>
        <li className="schedule-class-info">
          <Link to={"/contact"}>Join Now</Link>
        </li>
      </ul>

      <ul className="schedule-class">
        <li className="schedule-class-info">
          <p className="schedule-class-info-title">Class Name</p>
          <p className="schedule-class-info-text">Body Building</p>
        </li>
        <li className="schedule-class-info">
          <p className="schedule-class-info-title">Time</p>
          <p className="schedule-class-info-text">10:00am - 11:00am</p>
        </li>
        <li className="schedule-class-info">
          <p className="schedule-class-info-title">Trainer</p>
          <p className="schedule-class-info-text">Jhon Weights</p>
        </li>
        <li className="schedule-class-info">
          <Link to={"/contact"}>Join Now</Link>
        </li>
      </ul>

      <ul className="schedule-class">
        <li className="schedule-class-info">
          <p className="schedule-class-info-title">Class Name</p>
          <p className="schedule-class-info-text">Cycling</p>
        </li>
        <li className="schedule-class-info">
          <p className="schedule-class-info-title">Time</p>
          <p className="schedule-class-info-text">4:00pm - 5:00pm</p>
        </li>
        <li className="schedule-class-info">
          <p className="schedule-class-info-title">Trainer</p>
          <p className="schedule-class-info-text">Jane Jonas</p>
        </li>
        <li className="schedule-class-info">
          <Link to={"/contact"}>Join Now</Link>
        </li>
      </ul>

      <ul className="schedule-class">
        <li className="schedule-class-info">
          <p className="schedule-class-info-title">Class Name</p>
          <p className="schedule-class-info-text">Yoga</p>
        </li>
        <li className="schedule-class-info">
          <p className="schedule-class-info-title">Time</p>
          <p className="schedule-class-info-text">6:00pm - 7:00pm</p>
        </li>
        <li className="schedule-class-info">
          <p className="schedule-class-info-title">Trainer</p>
          <p className="schedule-class-info-text">Robert Louis</p>
        </li>
        <li className="schedule-class-info">
          <Link to={"/contact"}>Join Now</Link>
        </li>
      </ul>
    </>
  )
}


export default Monday;
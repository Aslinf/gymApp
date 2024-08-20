import { Outlet, Link } from "react-router-dom";
import "../../Stylesheets/schedule.scss";

function ScheduleDays(){

  return(
    <section id="schedule-section">
      <div className="schedule-container">
        <div className="schedule-weekdays">
          <Link to={"/schedule/monday"}>Monday</Link>
          <Link to={"/schedule/tuesday"}>Tuesday</Link>
          <Link to={"/schedule/wednesday"}>Wednesday</Link>
          <Link to={"/schedule/thursday"}>Thursday</Link>
          <Link to={"/schedule/friday"}>Friday</Link>
          <Link to={"/schedule/saturday"}>Saturday</Link>
          <Link to={"/schedule/sunday"}>Sunday</Link>
        </div>
        
        <div className="schedule-classes">
          <Outlet />
        </div>
      </div>
    </section>
  )
}


export default ScheduleDays;
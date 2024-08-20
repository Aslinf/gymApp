import hicon1 from "../../Assets/about/history-icon-1.png";
import hicon2 from "../../Assets/about/history-icon-2.png";

function History(){

  return(
      <div className="history-container">
        <div className="history-grid">

          <div className="history-grid-item">
            <img src={hicon1}/>
            <h3>Our History</h3>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat.</p>
          </div>

          <div className="history-grid-item history-item-2">
          </div>

          <div className="history-grid-item history-item-3">
          </div>

          <div className="history-grid-item">
            <img src={hicon2}/>
            <h3>Our History</h3>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat.</p>
          </div>

        </div>
      </div>
  )
}

export default History;
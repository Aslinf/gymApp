import { useState } from "react";
import "../Stylesheets/bmi.scss";

function BMICalc(){
  const [BMI, setBMI] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const calcuateBMI = (we, he) => {
    console.log(we, he);
    const BMICalculated = we / Math.pow(he/100, 2);
    setBMI(BMICalculated.toFixed(2))
  }

  function handleChange(e, type) {
    switch(type){
      case "weight":
        setWeight(e.target.value);
        break;
      case "height":
        setHeight(e.target.value);
        break;
    }
  }

  return(
    <section id="bmi-calc-section">
      <div className="bmiCalc-container">
        <h3>Let's Calculate Your <span>BMI</span></h3>
        <p>Easily determine your body mass index with our accurate calculation tool.</p>

        <form className="calculator-form">
          <input onChange={(e) => handleChange(e, "weight")} placeholder="Weight / kg" />
          <input onChange={(e) => handleChange(e, "height")} placeholder="Height / cm" />
        </form>
        <p>Your BMI is: {BMI}</p>
        <button onClick={() => calcuateBMI(weight, height)}>CALCULATE</button>
      </div>
    </section>
  )
}

export default BMICalc;
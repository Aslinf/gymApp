import { Link } from "react-router-dom";
import "../../Stylesheets/classes.scss";
import { IoPersonOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";

function Classes(){
  const [showMore, setShowMore] = useState(false);


  return(
    <section id="classes-section">
      <div className="classes-container">

        <div className="class-container class-1">
          <span></span>
          <div className="class-info-container">
            <p className="class-title">Cycling</p>
            <span className="under-line"></span>
            <div className="class-information">
              <p>
              <IoPersonOutline />
              </p>
              <p>
              <LuClock />
              </p>
            </div>
            <Link>Join Now <IoIosArrowRoundForward /></Link>
          </div>
        </div>

        <div className="class-container class-2">
          <span></span>
          <div className="class-info-container">
            <p className="class-title">Meditation</p>
            <span className="under-line"></span>
            <div className="class-information">
              <p>
              <IoPersonOutline />
              </p>
              <p>
              <LuClock />
              </p>
            </div>
            <Link>Join Now <IoIosArrowRoundForward /></Link>
          </div>
        </div>

        <div className="class-container class-3">
          <span></span>
          <div className="class-info-container">
            <p className="class-title">Boxing</p>
            <span className="under-line"></span>
            <div className="class-information">
              <p>
              <IoPersonOutline />
              </p>
              <p>
              <LuClock />
              </p>
            </div>
            <Link>Join Now <IoIosArrowRoundForward /></Link>
          </div>
        </div>

        <div className="class-container class-4">
          <span></span>
          <div className="class-info-container">
            <p className="class-title">Karate</p>
            <span className="under-line"></span>
            <div className="class-information">
              <p>
              <IoPersonOutline />
              </p>
              <p>
              <LuClock />
              </p>
            </div>
            <Link>Join Now <IoIosArrowRoundForward /></Link>
          </div>
        </div>

        <div className="class-container class-5">
          <span></span>
          <div className="class-info-container">
            <p className="class-title">Power Lifting</p>
            <span className="under-line"></span>
            <div className="class-information">
              <p>
              <IoPersonOutline />
              </p>
              <p>
              <LuClock />
              </p>
            </div>
            <Link>Join Now <IoIosArrowRoundForward /></Link>
          </div>
        </div>

        <div className="class-container class-6">
          <span></span>
          <div className="class-info-container">
            <p className="class-title">Workout</p>
            <span className="under-line"></span>
            <div className="class-information">
              <p>
              <IoPersonOutline />
              </p>
              <p>
              <LuClock />
              </p>
            </div>
            <Link>Join Now <IoIosArrowRoundForward /></Link>
          </div>
        </div>

        {showMore ? 
          <>
            <div className="class-container class-7">
              <span></span>
              <div className="class-info-container">
                <p className="class-title">Crossfit</p>
                <span className="under-line"></span>
                <div className="class-information">
                  <p>
                  <IoPersonOutline />
                  </p>
                  <p>
                  <LuClock />
                  </p>
                </div>
                <Link>Join Now <IoIosArrowRoundForward /></Link>
              </div>
            </div>

            <div className="class-container class-8">
              <span></span>
              <div className="class-info-container">
                <p className="class-title">MMA</p>
                <span className="under-line"></span>
                <div className="class-information">
                  <p>
                  <IoPersonOutline />
                  </p>
                  <p>
                  <LuClock />
                  </p>
                </div>
                <Link>Join Now <IoIosArrowRoundForward /></Link>
              </div>
            </div>

            <div className="class-container class-9 ">
              <span></span>
              <div className="class-info-container">
                <p className="class-title">Yoga</p>
                <span className="under-line"></span>
                <div className="class-information">
                  <p>
                  <IoPersonOutline />
                  </p>
                  <p>
                  <LuClock />
                  </p>
                </div>
                <Link>Join Now <IoIosArrowRoundForward /></Link>
              </div>
            </div>

            <div className="class-container class-10">
              <span></span>
              <div className="class-info-container">
                <p className="class-title">Fitness</p>
                <span className="under-line"></span>
                <div className="class-information">
                  <p>
                  <IoPersonOutline />
                  </p>
                  <p>
                  <LuClock />
                  </p>
                </div>
                <Link>Join Now <IoIosArrowRoundForward /></Link>
              </div>
            </div>
          </>
            
        :""}

      </div>
      <button onClick={() => setShowMore(!showMore)}>{showMore ? "Show Less" : "Show More"}</button>
    </section>
  )
}

export default Classes;
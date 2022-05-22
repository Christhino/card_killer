/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../styles/plan.css"
import iconChevronLeft from "../assets/iconChevronLeft.svg"
import iconImage from "../assets/iconImage.svg"
import Free from "./PlanFree"
import Pro from "./PlanPro"
import Head from "./PlanHead.js"
export default function Plan() {
  
  return (
    <> 
       <div className="divG">
          <Head />
          <div className="backW1">
              <div className="backwrite">
                    <div className="rectanlge"></div> 
                    <img className="imgiconImage" src={iconImage} />
                    <div className="RectB" >
                        <p className="Start">
                           SELECT
                        </p>
                    </div>
                    <Free />
              </div>
          </div>
          <div className="backW2">
              <div className="backwrite">
                    <div className="rectanlge"></div> 
                    <img className="imgiconImage" src={iconImage} />
                    <div className="RectB1" >
                        <p className="Start1">
                           SELECT
                        </p>
                    </div>
                    <Pro />
              </div>
          </div>
       </div>
    </>
  );
}

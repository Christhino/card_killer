/* eslint-disable jsx-a11y/alt-text */
import iconChevronLeft from "../assets/iconChevronLeft.svg"
import React from "react"
import "../styles/plan.css"

export default function Head() {
    return(
        <>
          <div className="GoB">
              <img className="img" src={iconChevronLeft} /> 
              <div className="go-back">               
                  Go Back
              </div>
          </div>
          <div className="Cp">
              <h1 className="titleC">
                Choose plan
              </h1>
              <p className="select-a-plan-for-yo">
                  Select a plan for your business with us!
              </p>
          </div>
        </>
    )
}
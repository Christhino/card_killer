/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import iconChevronLeft from "../assets/iconChevronLeft.svg"
import "../styles/cards.css"
export default function CardsHead() {
    return(
        <>
          <div className="GoB">
              <img className="img" src={iconChevronLeft} /> 
              <div className="go-back">               
                  Go Back
              </div>
          </div>
          <div className="Cp">
              <h1 className="titleCard">
                Saved Cards
              </h1>
              <p className="select-a-plan-for-yo">
                List of all credict cards you saved
              </p>
          </div>
        </>
    )
}
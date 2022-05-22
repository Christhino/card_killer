/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../../styles/cards.css"
import image6 from "../../assets/image6.png"
import image4328 from "../../assets/frame4328.svg"
export default function KitCard() {
    return(
        <>
            <div className="Kitcard">
               <div className="KitcardImage">
                   <img className="imgKitCard" src={image6} /> 
               </div>
               <div className="KitcardText">
                   <p className="KitcardText1">Visa XXXX 1657</p>
                   <p className="KitcardText2">Expires on 16/24</p>  
                   <img className="kitbouton" src={image4328}/>             
               </div>
              
            </div>
        </>
    )
}
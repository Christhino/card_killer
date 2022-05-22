/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../../styles/cards.css"
import image8 from "../../assets/image8.png"
import image4328 from "../../assets/frame4328.svg"
export default function KitCard2() {
    return(
        <>
            <div className="Kitcard">
               <div className="KitcardImage">
                   <img className="imgKitCardF" src={image8} /> 
               </div>
               <div className="KitcardText">
                   <p className="KitcardText1F">Internet Banking</p>
                   <p className="KitcardText2F">Pay directly from your bank account</p>  
                   <img className="kitbouton" src={image4328}/>             
               </div>
              
            </div>
        </>
    )
}
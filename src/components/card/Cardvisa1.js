/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../../styles/cards.css"
import image7 from "../../assets/image7.png"
import image4328 from "../../assets/frame4328.svg"
export default function KitCard1() {
    return(
        <>
            <div className="Kitcard">
               <div className="KitcardImage">
                   <img className="imgKitCard7" src={image7} /> 
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
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../../styles/cards.css"
import frame4066 from "../../assets/frame4066.svg"
import image4328 from "../../assets/frame4328.svg"
export default function KitCardBasic() {
    return(
        <>
            <div className="Kitcard">
               <div className="KitcardImage">
                  
                   <div className="imgKitCardIcon"> 
                       <img className="iIcon" src={frame4066} /> 
                       <p className="iIconText">Card killer</p>
                   </div>
               </div>
               <div className="KitcardText">
                   <p className="KitcardText1F">Basic Plan</p>
                   <p className="KitcardText2F">Pay diretly from your bank account</p>  
                   <img className="kitbouton" src={image4328}/>             
               </div>
              
            </div>
        </>
    )
}
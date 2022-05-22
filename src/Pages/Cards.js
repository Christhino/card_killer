import React from "react";
import CardsHead from "./CardsHead"
import "../styles/cards.css"
import KitCard from "../components/card/Cardvisa"
import KitCard1 from "../components/card/Cardvisa1"
import KitCard2 from "../components/card/CardFargo"
import KitCardBasic from  "../components/card/CardBasicp"
export default function MyCards() {
    return(
        <>
           <div className="Card">
                <CardsHead />
                <div className="CardVisa">
                       <KitCard/>
                       <div className="Primary">
                             <span className="PrimaryText">
                                  Primary
                             </span> 
                       </div>
                      
                </div>  
                <div className="CardVisa2">
                      <KitCard1/>
                </div>
                <div className="AddCard1">
                     + Add Cards 
                </div>
                <div className="CardBasiquePLan">
                      <KitCard2/> 
                </div>
                <div className="AddCard2">
                     + Add Cards 
                </div>
                <p className="Current">
                   Current Subscriptions 
                </p>
                <p className="listSub">
                  List of all your subscriptions
                </p>
                <div className="BasciPlan">
                     <KitCardBasic />
                </div>
           </div>
        </>
    )
}
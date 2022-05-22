/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from "react";
import "../styles/plan.css";
import {BsCheckCircleFill} from "react-icons/bs"

export default function Free(){
    
     
    return(
        <>
           <div className="Free">
                        <p className="tex">FREE</p>
                        <p className="Bob">$0/ MONTH</p>
                    </div>
                    <div className="FrameLI">
                        <div className="Frame1">
                            <h className="img1">
                              <BsCheckCircleFill /> 
                            </h>
                            <p className="L1"> Lorem Ipsum</p>
                        </div>
                        <div className="Frame2">
                        <h className="img2" >
                            <BsCheckCircleFill />
                        </h>
                            <p className="L2"> Lorem Ipsum</p>
                        </div>
                        <div className="Frame3">
                        <h className="img3" >
                            <BsCheckCircleFill />
                        </h>
                            <p className="L3"> Lorem Ipsum</p>
                        </div>
                        <div className="Frame4">
                        <h className="img4" >
                            <BsCheckCircleFill/>
                        </h>
                            <p className="L4"> Lorem Ipsum</p>
                        </div>
            </div>  
        </>
    )
}
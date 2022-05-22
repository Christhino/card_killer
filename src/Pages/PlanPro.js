import React from "react";
import "../styles/plan.css";
import  checkCircle from "../assets/checkCircle.svg"
import {BsCheckCircleFill} from "react-icons/bs"
export default function  Pro(){
    return(
        <>
           <div className="Free">
                        <p className="tex">PRO</p>
                        <p className="Bob">$99 AN</p>
                    </div>
                    <div className="FrameLI2">
                        <div className="Frame1">
                            <h className="img1">
                              <BsCheckCircleFill/> 
                            </h>
                            <p className="L1"> Lorem Ipsum</p>
                        </div>
                        <div className="Frame2">
                        <h className="img1">
                              <BsCheckCircleFill/> 
                        </h>
                            <p className="L2"> Lorem Ipsum</p>
                        </div>
                        <div className="Frame3">
                            <h className="img1">
                              <BsCheckCircleFill/> 
                            </h>
                            <p className="L3"> Lorem Ipsum</p>
                        </div>
                        <div className="Frame4">
                            <h className="img1">
                              <BsCheckCircleFill/> 
                            </h>
                            <p className="L4"> Lorem Ipsum</p>
                        </div>
                    </div>  
        </>
    )
}
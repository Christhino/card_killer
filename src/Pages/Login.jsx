/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-pattern */
import React, { useState } from "react";
import styled from "styled-components";
import "../styles/login.css"
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

export const Login = ({setLogoutUser}) => {  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();

  const login = (e) => {
    const URL_API = "https://api.cardkiller.me/";
    e.preventDefault();
    axios
      .post(URL_API + "ck_token/", {
        email,
        password,
      })
      .then((response) => {
        console.log("response", response.data.access);
        console.log("response", response.data.refresh);
        localStorage.setItem("refresh",response.data.refresh);
        localStorage.setItem("token",response.data.access,window.location.href = "/home");
       
        setError("");
        setEmail("");
        setPassword("");
        
        setLogoutUser(false);
        
      })
      .catch((error) => setError(error)); 
    }; 
  return (
    <div className="LoginRoot">
      <Logo>
        <Image1 src={"https://file.rendit.io/n/Pi2HhVdLnYKGYpRgMGkV.svg"} />
        <Text1>CARD KILLER</Text1>
      </Logo>
      <LoginF>

        <Text2>Create an account for free</Text2>
            <FormLogin>
                <form
                  noValidate
                  autoComplete="off"
                  onSubmit={login}
                >
                    <input type="Email" name="Email" placeholder="Email" required className="input-containerp"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />         
                    <input type="password" name="Password" placeholder="Passeword" required className="input-containerp1" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />                           
                    <button type="submit" className="button-container" redirect="true" to="/card/home">SIGN UP</button>    
                </form>
                <Text>
                    <p className="txt-624">
                      By creating an account you agree with out and {""} 
                    <span className="txt-6242">terms </span> {""}
                    <span className="txt-6242">privacy policy</span>.
                    </p>
                    <p className="txt-8108">
                        Already have an account? <span className="txt-81083"><Link to="/sign_in"> Sign in </Link></span>
                    </p>
                </Text> 
            </FormLogin>
            
      </LoginF>
    </div>
  );
};
const Text = styled.div`
    position: absolute;
    width: 279px;
    height: 36px;
    left: 18px;
    top: 336px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
`;
const FormLogin = styled.div`
  top: 52px;
`;
const LoginRoot = styled.div`
  background-color: #ffffff;
  width: 350px;
  height: 666px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 49px;
  padding-top: 73px;
  padding-bottom: 73px;
  padding-left: 30px;
  padding-right: 30px;
  margin: auto;
  align-items: center;
`;
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;
const LoginF = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width : 315px;
`;
const Image1 = styled.img`
  width: 45px;
  height: 55px;
`;
const Text1 = styled.div`
  font-size: 16px;
  font-family: Roboto;
  font-weight: 500;
`;
const FlexRow = styled.div`
  height: 432px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text2 = styled.div`
  color: #265cb3;
  font-size: 24px;
  font-family: Roboto;
  font-weight: 500;
  margin-bottom: 24px;
  align-self: flex-start;
`;

export default Login;
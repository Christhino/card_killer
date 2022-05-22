import React from "react";
import styled from "styled-components";
import * as styles from "../styles/variables";
import appLogo from "../assets/img/app-logo.svg";
import CoverPhoto from "../assets/Mask Group.png";
import CategoriesTabs from "../components/UserProfile/CategoriesTabs";
import UserInfos from "../components/UserProfile/UserInfos";


export default function UserProfile() {
  return (
    <>
      <Main>
        <div className="header">
          <div className="cover">
            <div className="nav">
              <p>
                <img src={appLogo} alt="App logo" />
                Kill your business card for free !
              </p>
              <a href="">Get your Card</a>
            </div>

            <UserInfos/>

          </div>
        </div>

        <div className="about">
          <h3>About</h3>
          <p>
            I am a digital marketer located in LA. I do freelance for Business and individual customers.
          </p>
        </div>

        <CategoriesTabs />
        
        <div className="buttons">
          <button className="save">Save Contact</button>
          <button className="exchange">Exchange Contact</button>
        </div>
      </Main>
    </>
  );
}
const Main = styled.div`
  padding-bottom: 100px;
  .header{
    .cover{
      height: 195px;
      background-image: url('${CoverPhoto}');
      background-size: cover;
      background-position: center;
      padding: 0 ${styles.size.pagePadding1};
      
      .nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
          margin: 0;
          color: white;
          font-size: 14px;
          display: flex;
          align-items: center;
          padding-top: 5px;
          img{
            width: 20px;
            margin-right: 5px;
          }
        }
        a{
          border: 1px solid white;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-size: 9px;
          padding: 5px 10px;
        }
      }
    }
  }
  .about{
    margin-top: 100px;
    padding: 0 ${styles.size.pagePadding1};
    
  }
  .buttons{
    position: fixed;
    bottom: 0;
    background: white;
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%);
    padding: ${styles.size.pagePadding1};
    display: flex;
    justify-content: space-between;
    width: 100%;
    button{
      border-radius: 13px;
      border: none;
      height: 42px;
      font-size: 18px;
      padding: 0 15px;
      &.save{
        background-color: white;
        border: 1px solid black;
      }
      &.exchange{
        background-color: ${styles.colors.blue};
        color: white;
        font-weight: bold;
      }
    }
  }
`;

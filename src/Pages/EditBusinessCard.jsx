import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import * as styles from '../styles/variables';
import axios  from 'axios'
import { useFileUpload } from "use-file-upload";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
const URL_API = "https://api.cardkiller.me";
export default function EditBusinessCard() {


  
  const [files, selectFiles] = useFileUpload();
  const [data , setData]=useState([]);
  const [error, setError] = useState("");
   
  const [first_name,setFirst_name]=useState([]);
  const [last_name,setLast_name]=useState([]);
  const [email,setEmail]=useState([]);
  const [phone,setPhone]=useState([]);
  const [job_title,setJob_tittle]=useState([]);
  const [home_country,setHome_country]=useState([]);
  const [website,setWebsite]=useState([]);
  const [current_company_name,setCurrent_company_name]=useState([]);

  const token = localStorage.getItem('token');
  console.log("token =>" , token);
  
  const add = (e) => {

    e.preventDefault();
    axios.put(URL_API + "/ck_user/", {
           first_name,
           last_name,
           email,
           phone,
           job_title,
           home_country,
           website,
           setCurrent_company_name,        
        },{
          headers: {
            'Authorization':`Bearer ${token}`
          }
        }      
    )
      .then((response) => {
        console.log(Object.keys(response));
        const result = Object.keys(response).map(key => {
          console.log(key); 
          console.log(response[key]);
        
          return {[key]: response[key]};
        });
        console.log(result);

        setFirst_name("");
        setLast_name("") ;
        setEmail("");
        setPhone("");
        setJob_tittle("");
        setHome_country("");
        setError(result);
        setWebsite("");
        setCurrent_company_name("")
        
      })
      .catch((error) => {
        setError(error);
        console.log(error.result.key);
     }); 
    }; 
   
  return (
    <Wrapper>
      <Header>
        Create Your first business card with <br />CardKiller
          <span>🎉</span>
      </Header>
      <GeneralInfo>
        <h4>GENERAL INFO</h4>
        <form action="" onSubmit={add}>
            <div className="top">
              <div className="photo">
                  <button 
                    className="photo"onClick={() =>
                        selectFiles({ accept: "image/*" }, ({ name, size, source, file }) => {
                          console.log("Files Selected", { name, size, source, file });
                        })
                      }
                  >
                      
                  </button>
              </div>
              <div className="right">
                  <input type="text" name="firstname" id="firstname" placeholder="First Name" value={first_name}
                          onChange={(e) => setFirst_name(e.target.value)} />
                  <input type="text" name="lastname" id="lastname" placeholder="Last Name" value={last_name}
                          onChange={(e) => setLast_name(e.target.value)} />
              </div>
            </div>
            <input type="text" name="jobtitle" id="jobtitle" placeholder="Job Title" value={job_title}
                        onChange={(e) => setJob_tittle(e.target.value)} />
            <input type="text" name="company" id="company" placeholder="Company" value={current_company_name}
                        onChange={(e) => setCurrent_company_name(e.target.value)}/>
            <input type="email" name="email" id="email" placeholder="Email Address"value={email}
                        onChange={(e) => setEmail(e.target.value)} />
            <input type="tel" name="phone" id="phone" placeholder="Phone" value={phone}
                        onChange={(e) => setPhone(e.target.value)}/>
            <input type="text" name="location" id="location" placeholder="Location" value={home_country}
                        onChange={(e) => setHome_country(e.target.value)}/>
            <input type="text" name="website" id="website" placeholder="Website" value={website}
                        onChange={(e) => setWebsite(e.target.value)}/>
            <div className="colorTheme">
              <h4>COLOR THEME</h4>
              <div className="colors">
                <div className="color">
                  <div className="colorPreview"></div>
                  <div className="right">
                    <span>MAIN</span>
                    <span className="hex">
                      # <input type="text" name="mainHex" id="mainHex"/>
                    </span>
                  </div>
                </div>
                
                <div className="color">
                  <div className="colorPreview"></div>
                  <div className="right">
                    <span>SECONDARY</span>
                    <span className="hex">
                      # <input type="text" name="secondHex" id="secondHex"/>
                    </span>
                  </div>
                </div>
              </div>
              <Button variant="contained" type="submit" sx={{ t:2 }}>
                SAVE
              </Button>
            </div>
            
        </form>
      </GeneralInfo>
      <PreviewButton>MY SIGNATURE PREVIEW</PreviewButton>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding-top: ${styles.size.navHeight};
`;
const Header = styled.div`
  background-color: ${styles.colors.pageBgGrey};
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  span{
    margin-top: 15px;
  }
`;
const GeneralInfo = styled.div`
  padding: 0px ${styles.size.pagePadding1};
  form{
    position: initial;
    width: initial;
    height: initial;
    input{
      width: 100%;
      border: none;
      border-bottom: 1px solid #C4C4C4;
      ::placeholder{
        color: #C4C4C4;
      }
      height: 45px;
      color: ${styles.colors.textLightGrey};
      margin-top: 10px;
    }
    .top{
      display: flex;
      align-items: center;
      .photo{
        width: 100px;
        height: 100px;
        border: 1px dashed #C4C4C4;
        margin-right: 10px;
        flex-shrink: 0;
      }
      .right{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        input{
          margin-top: 0px;
        }
      }
    }
    .colorTheme{
      padding-bottom: 100px;
      
      .colors{
        display: flex;
        justify-content: space-between;
        .color{
          display: flex;
          align-items: flex-end;
          input[type="color"]{
            width: 48px;
            height: 48px;
            flex-shrink: 0;
            border-radius: 40px;
            border: none;
            overflow: hidden;
            padding: 0;
            margin-top: 0;
            margin-right: 10px;
            background-color: transparent;
            appearance: none;
          }
          .colorPreview{
            width: 48px;
            height: 48px;
            flex-shrink: 0;
            border-radius: 40px;
            background-color: red;
            margin-right: 10px;
          }
          .right{
            display: flex;
            flex-direction: column;

            .hex{
              display: flex;
              align-items: center;
              margin-top: 15px;
              input{
                height: 21px;
                border: 1px solid black;
                border-radius: 6px;
                margin-top: 0;
                max-width: 85px;
                margin-left: 5px;
              }
            }
          }
        }
      }
    }
  }
`;

const PreviewButton = styled.button`
  width: 100%;
  height: ${styles.size.navHeight};
  background-color: ${styles.colors.pageBgGrey};
  font-weight: bold;
  font-size: 16px;
  border: none;
  position: fixed;
  bottom: 0;
`;
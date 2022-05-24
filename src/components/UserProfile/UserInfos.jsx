/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useState , useEffect} from 'react';
import styled from 'styled-components';
import QRcode from 'qrcode.react'
import * as styles from '../../styles/variables';
import UserProfileMask from "../../assets/img/user-profile-mask.png";
import UserPhoto from "../../assets/img/user-photo.png";
const URL_API = "https://api.cardkiller.me";
export default function UserInfos() {
  const token = localStorage.getItem('token');
  console.log("token =>" , token);
  const [user, setUser] = useState([]);
  const [link, setLink] = useState("https://api.cardkiller.me/ck_link/");
  const getData =()=>{
    fetch(URL_API + '/ck_user/',{
        headers: {
    'Authorization':`Bearer ${token}`
  }
    })
    .then((res) =>  res.json())
    .then((res) => {
        console.log(Object.keys(res));
        const result = Object.keys(res).map(key => {
          console.log(key); 
          console.log(res[key]);
        
          return {[key]: res[key]};
        });
        console.log(result);
        //const result = 
        setUser(result)
        //setLink(result)
    })
  }
  useEffect(() => {
      getData()
  }, [token])
  
  const [qrscan, setQrscan] = useState('https://api.cardkiller.me/ck_user/');
    const handleScan = data => {
        if (data) {
            setQrscan(data)
        }
  }


  return (
    <Main>
          <div className="photo">
              <img src={UserPhoto} />
          </div>
          <div className="qrCode">
                  <QRcode 
                    value={link}
                    bgColor='#383838'
                    fgColor='#838383'
                    id="myqr"                      
                    size={40}
                    includeMargin={true}
                  />
          </div>
        {user.map((item) =>(
          <div> 
              <div className="infos">
                <h1>{item.first_name}</h1><br/>
                <h1>{item.last_name}</h1><br/>
                <h2>{item.job_title}</h2><br/>
                <h2>{item.current_company_name}</h2><br/>
                <h2>{item.phone}</h2><br/>
                <h2>{item.email}</h2><br/>         
              </div>
          </div>  
        ))}
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  align-items: center;
  background-color: #383838;
  max-width: 330px;
  height: 208px;
  mask-image: url(${UserProfileMask});
  mask-size: contain;
  mask-repeat: no-repeat;
  margin: auto;
  margin-top: 30px;
  .qrCode{
     margin-top: -125px;
     margin-left: 80px
  }
  .photo{
    width: 175px;
    flex-shrink: 0;
    margin-right: 10px;
    img{
      width: 100%;
    }
  }
  .infos{
    color: white;
    max-width: 10px;
    margin-left: -120px;
    h1{
      font-weight: 400;
      font-family: 'Roboto';
      font-style: normal;
      font-size: 18px;
      position: relative;
      margin-top: 15px;
    }
    h2{
      font-weight: 400;
      font-family: 'Roboto';
      font-style: normal;
      font-size: 12px;
    }
    
  }
`;
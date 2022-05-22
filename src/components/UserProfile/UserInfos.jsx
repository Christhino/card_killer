/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useState , useEffect} from 'react';
import styled from 'styled-components';
import * as styles from '../../styles/variables';
import UserProfileMask from "../../assets/img/user-profile-mask.png";
import UserPhoto from "../../assets/img/user-photo.png";
const URL_API = "https://api.cardkiller.me";
export default function UserInfos() {
  const token = localStorage.getItem('token');
  console.log("token =>" , token);
  const [user, setUser] = useState([]);
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
    })
  }
  useEffect(() => {
      getData()
  }, [token])

  return (
    <Main>
          <div className="photo">
              <img src={UserPhoto} />
          </div>
        {user.map((item) =>(
          <div> 
              <div className="infos">
                <p>{item.first_name}</p> <br/> <br/>
                <p>{item.last_name}</p>
                <p className="job">{item.job_title}</p>
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
    p{
      font-weight: 400;
      margin: 5px;
      margin-top: 10px;
      font-size: 24px;
      font-weight: 300;
      text-align: center;
    }
  }
`;
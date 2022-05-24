import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import * as styles from '../../styles/variables';
import SwipeableViews from 'react-swipeable-views';
import { FiLink2 } from 'react-icons/fi';
import { HiOutlineExternalLink } from 'react-icons/hi';

const URL_API = "https://api.cardkiller.me";
export default function CategoriesTabs(props) {
  const [index, setIndex] = useState(0);
  
  const token = localStorage.getItem('token');
  console.log("token =>" , token);

  const [data,setData]=useState([])
  //const [category, setCategory] = useState([]);
  //const [links, setLinks] = useState([]);

  const gettap=()=>{
    fetch(URL_API +'/tap/',{
      headers: {
        'Authorization':`Bearer ${token}`
      }
    })
    .then((res) =>  res.json())
    .then((res) => {
        console.log(res.category)
        console.log(res.links)
        console.log(res.profile)
        console.log(res)
        setData(res.links)
    })
  }
  useEffect(() => {
    gettap()
  }, []) 
  /*
  const getDataLinks =()=>{
    fetch(URL_API + '/ck_link/',{
        headers: {
          'Authorization':`Bearer ${token}`
        }
    })
    .then((res) =>  res.json())
    .then((res) => {
        console.log(res.links)
        setLinks(res.links)
    })
  }
  useEffect(() => {
    getDataLinks()
  }, []) 

  const getData =()=>{
        fetch(URL_API + '/ck_category/',{
            headers: {
				'Authorization':`Bearer ${token}`
			}
        })
        .then((res) =>  res.json())
        .then((res) => {
            console.log(res.categories)
            setCategory(res.categories)
        })
    }
    useEffect(() => {
        getData()
    }, [])
    */
  let slides = [];
  slides = data.map((item, id) => {
    return (
      <div className="slide" key={id}>
        <ul>        
              <li>
                  <div className="icon">
                    <FiLink2 />
                  </div>
                  <div className="details" key={id.link_id}>
                    <strong className="title">{item.name}</strong>
                  </div>
                  <a href={item.url}>
                    <HiOutlineExternalLink />
                  </a>
              </li> 
        </ul>
      </div>
    );
  });
  let buttons = data.map((el, id) => {
    return (
      <button
        key={id}
        className={index === id ? "active" : ""}
        onClick={() => {setIndex(id)}}
      >{el.category_name}</button>
    );
  });
  const handleChangeIndex = (index) => {
    setIndex(index);
  }
  return (
    <Main>
      <div className="nav">
        {buttons}
      </div>
      <SwipeableViews index={index} onChangeIndex={handleChangeIndex} enableMouseEvents={true}>
        {slides}
      </SwipeableViews>
    </Main>
  );
}

const Main = styled.div`
  margin-top: 30px;
  .nav{
    width: 100%;
    height: 50px;
    /* border: 1px solid red; */
    overflow-x: scroll;
    display: flex;
    button{
      background-color: transparent;
      padding: 10px;
      color: #969796;
      border: none;
      font-weight: 300;
      font-size: 16px;
      flex-shrink: 0;
      &.active{
        font-weight: bold;
        color: black;
        border-bottom: 1px solid black;
      }
    }
  }  
  .slide{
    padding: ${styles.size.pagePadding1};
    ul{
      padding: 0;
      list-style-type: none;
      li{
        border-bottom: 1px solid #EEEEF0;
        display: flex;
        align-items: center;
        .icon{
          background-color: #DCE9FF;
          border-radius: 13px;
          width: 48px;
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #323232;
          font-size: 25px;
          margin: 10px;
          margin-right: 15px;
        }
        .details{
          display: flex;
          flex-direction: column;
          flex-grow: 2;
          .title{
            font-size: 17px;
            margin-bottom: 5px;
          }
          .link{
            color: #969796;
          }
        }
        &>a{
          color: ${styles.colors.blue};
          font-size: 25px;
          padding: 0 10px;
        }
      }
    }
  }
`;
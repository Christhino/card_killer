/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect,useRef } from "react";
import styled from "styled-components";
import * as styles from "../../styles/variables";
import axiox from "axios";
import qs from "qs"
//components
import ToggleButton from "../Common/ToggleButton";
import {sortableHandle, SortableElement} from "react-sortable-hoc";

//icons

import { MdModeEditOutline, MdBarChart, MdOutlineDragHandle } from "react-icons/md";
import { IoLinkOutline, IoImageOutline } from "react-icons/io5";
import { CgArrowUp } from "react-icons/cg";
import { BiCaretDown, BiTrash } from "react-icons/bi";

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import { FormControl } from "@mui/material";
import {  useParams } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const DragHandle = sortableHandle(() => <div className="handle"> <MdOutlineDragHandle /> </div>);
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 350,
	bgcolor: 'background.paper',
	boxShadow: 24,
	pt: 32,
	px: 4,
	pb: 3,
    borderRadius: '16px'
  };

const URL_API = "https://api.cardkiller.me/";

function LinkItem (props) {
        //modal 
        const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };
        const [links,setLink]=useState("")
        const [name, setName] = useState("");
        const [url, setUrl] = useState("");
        const [position_order, setPosition_order] =useState("");

        const [error, setError] = useState("");
        const token = localStorage.getItem('token');
        console.log("token =>" , token);
        
        const delete_link = async () => {
            try { 
                await axiox.delete(URL_API+`ck_link/${props.link.link_id}/`,{
                    headers: {
                        'Authorization':`Bearer ${token}`
                    },
              })
              console.log(`Link ${props.link.name} successfully deleted`)
            } catch (error) {
              alert(error)
            }
        }
        const getData =()=>{
            fetch(URL_API + 'ck_link/',{
                headers: {
                    'Authorization':`Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then((res) => {
                setName(props.link.name)
                setUrl(props.link.url)
                setPosition_order(props.link.position_order)
                console.log(res.links.length)
            })
        }
        useEffect(() => {
            getData()
        }, [])

        
        const edit_link = (e) => {
            const URL_API = "https://api.cardkiller.me/";
            e.preventDefault();

            const count = links.length;
            console.log(count)
            const position_order = count+1;

            var data = {
                'name':name,
                'url':url,
                'position_order':position_order,
            }
            console.log("data=>",data)
            axiox
              .put(URL_API + `ck_link/${props.link.link_id}/`, qs.stringify({
                name,
                url,
                position_order,
              }),{
                    headers: {
                        'Authorization':`Bearer ${token}`
                    },
                }  
              )
            .then((response) => {
                console.log("response", response.links);
                setName("");
                setUrl("");
                setPosition_order("");
                setError("")
            })
            .catch((error) => {
                setError(error);
                console.log(error.response);
            }); 
            
        }; 
        
        return (
            <Item>
                <DragHandle/>
                <div className="content">
                    <div className="top">
                        <span className="title"> {props.link.name} 
                          <Button onClick={handleClickOpen}>
                              <MdModeEditOutline />
                          </Button>
                          <Modal
					open={open}
					onClose={handleClose}
					
				>
					<Box sx={style}>
			            <FormWrapper onSubmit={edit_link}> 
						    
						    <TextField id="name" label="Name" variant="standard" value={name}
											onChange={(e) => setName(e.target.value)} />
							<TextField id="url" label="URL" variant="standard"   value={url}
											onChange={(e) => setUrl(e.target.value)}/>
							<Button 
								variant='contained' 
											disableElevation 
											color='primary'
											fullWidth={false}
											type='submit'
								sx={{ mt:2 }}			
							>SAVE</Button>
						</FormWrapper>
					</Box>
				</Modal>
                        </span>
                        <ToggleButton 
                            enabled={props.link.enabled} 
                            linkId={props.link.link_id}
                            toggleLink={props.toggleLink}
                        />
                    </div>
                    <span className="link">
                        <a href={props.link.url} target='blank'>{props.link.url}</a><IoLinkOutline />
                    </span>
                    <div className="bottom">
                        <IoImageOutline className="linkIcon" />
                        <span className="clicks">
                            <MdBarChart className="icon" />
                            {props.link.click_count} clicks
                            <CgArrowUp style={{ color: '#4BCF68' }} className="icon" />
                        </span>
                        <span className="category" onClick={() => props.selectCategory(props.link.category_id)}>
                            Social network <BiCaretDown />
                        </span>
                        <button className="delete" onClick={delete_link}>
                            <BiTrash  />
                        </button>
                    </div>
                </div>
            </Item>
        );
    }

export default LinkItem;

const FormWrapper = styled.form`
    padding-left:80px;

`;

const Item = styled.div`
    background-color: white;
    display: flex;
        margin-top: 8px;
        margin-bottom: 8px;
    .handle{
        width: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        border-right: 1px solid ${styles.colors.textLightGrey};
        cursor: grab;
    }
    .content{
        padding: 12px;
        padding-bottom: 8px;
        display: flex;
        flex-direction: column;
        width: 100%;
        .top{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-bottom: 5px;
            .title{
                font-weight: 500;
                font-size: 14px;
                display: flex;
                align-items: center;
                button{
                    border: none;
                    background-color: transparent;
                    padding: 0;
                    color: ${styles.colors.textLightGrey};
                    margin-left: 5px;
                    font-size: 15px;
                }
            }
        }
        .link{
            font-size: 13px;
            display: flex;
            align-items: center;
            a{
                color: black;
                text-decoration: none;
                margin-right: 10px;
            }
        }
        .bottom{
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
            color: ${styles.colors.textLightGrey};
            .linkIcon{
                font-size: 17px;
            }
            .clicks{
                display: flex;
                align-items: flex-end;
                .icon{
                    font-size: 16px;
                    margin: auto 3px 0px 3px;
                }
            }
            .category{
                cursor: pointer;
            }
            button.delete{
                padding: 0;
                border: none;
                background-color: transparent;
                font-size: 17px;
                margin-right: 7px;
                color: ${styles.colors.textLightGrey};
            }
        }
    }
`;


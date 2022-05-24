import React, { useState, useEffect,useContext} from "react";
import styled from "styled-components";
import * as styles from "../styles/variables";
import ShareLink from "../components/Home/ShareLink";
import LinkItem from "../components/Home/LinkItem";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";
import CategoryBottomSheet from "../components/Home/CategoryBottomSheet";
import axiox from "axios";
import Button from '@mui/material/Button';
import AddLinkIcon from '@mui/icons-material/AddLink';
import qs from "qs"
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { AuthContext } from '../contexts/AuthContext';
const SortableItem = SortableElement(({ link, toggleLink, selectCategory }) => {
	let el = <LinkItem link={link} toggleLink={toggleLink} selectCategory={selectCategory} />
	return el;

});
const SortableList = SortableContainer(({ items, toggleLink, selectCategory }) => {
	return (
		<div>		
				{items.map((value, index) => (
                   <SortableItem
						key={value.link_id}
						index={index}
						link={value}
						toggleLink={toggleLink}
						selectCategory={selectCategory}
			       />
				))}
		</div>
	);
});
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
const URL_API = "https://api.cardkiller.me";
const Home= () => {


	const auth = useContext(AuthContext);
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
	const [position_order, setPosition_order] =useState("");
	const [error, setError] = useState("");
	const add_link = (e) => {
		const URL_API = "https://api.cardkiller.me/";
		e.preventDefault();

		const count = linksFoo.length;
		console.log(count)
		const position_order = count+1;

		axiox
		  .put(URL_API + "ck_link/", qs.stringify({
			name,
			url,
			position_order,
		  }),{
				headers: {
					Authorization: `Bearer ${token}`
				},
			}  
		  )
		  .then((response) => {
			console.log("response", response.links);
			setName("");
			setUrl("");
			setPosition_order(position_order);
			setError("")
		})
		.catch((error) => {
			setError(error);
			alert(error.response['message'])
			console.log(error);
		}); 
		
	}; 
	//modal 
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	//genenrate static data
	let linksFoo = [];
	let j = 0;
	for (let i = 0; i < 1; i++) {
		linksFoo.push({
			link_id: i,
			category_id: j,
			name: "",
			url: "",
			click_count: "",
			enabled: true
		});
		j = j === 5 ? 0 : j + 1;
	}
	const [links, setLinks] = useState(linksFoo);
	const [openCategoryBottomSheet, setOpenCategoryBottomSheet] = useState(false);
	const [selectedLinkId, setSelectedLinkId] = useState(0);
	const token = localStorage.getItem('token') || new Date(new Date().getTime() + 1000 * 60 * 60);
    console.log("token =>" , token);
    const getData =()=>{
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
        getData()
    }, [token])

	const onSortEnd = ({ oldIndex, newIndex }) => {
		let sortedLinks = arrayMoveImmutable(links, oldIndex, newIndex);
		setLinks(sortedLinks);

		console.log(oldIndex,newIndex,links)
		
	};
    
	const toggleLink = (linkId) => {
		let linksTmp = links.slice();
		let clicked = linksTmp.find(el => el.link_id=== linkId);
		if (clicked) clicked.enabled = !clicked.enabled;
		setLinks(linksTmp)
	}
	const selectCategory = (linkId) => {
		setOpenCategoryBottomSheet(true);
		setSelectedLinkId(linkId);
	}
	const closeBottomSheet = () => {
		setOpenCategoryBottomSheet(false);
	}
	let SortableListProps = {
		items: links,
		toggleLink: toggleLink,
		selectCategory: selectCategory,
		onSortEnd: onSortEnd,
		lockAxis: "xy",
		useDragHandle: true,
		useWindowAsScrollContainer: true
	}
	return (
			<HomeWrapper>
				<ShareLink />
				<Button variant="contained" disableElevation sx={{ ml: 29 }}  onClick={handleOpen}>
                   <AddLinkIcon/> New Link
                </Button>
				<Modal
					open={open}
					onClose={handleClose}
					
				>
					<Box sx={style}>
			            <FormWrapper onSubmit={add_link}> 
						    
						    <TextField id="name" label="Name" variant="standard" value={name}
											onChange={(e) => setName(e.target.value)} />
							<TextField id="url"  type="url" label="URL" placeholder="https://example.com" inputProps={{ pattern:"https?://.+" ,title:"Include http://"  }}   required variant="standard" defaultValue="https://"
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
				<SortableList {...SortableListProps} />
	
				<CategoryBottomSheet
					open={openCategoryBottomSheet}
					//selectedCategory={links.find((link) => link.link_id === selectedLinkId).link.category_id}
					closeBottomSheet={closeBottomSheet}
				/>
			</HomeWrapper>
	);
}
export default Home

const HomeWrapper = styled.div`
	background-color: ${styles.colors.pageBgGrey};
	min-height: 100vh;
	padding: 60px ${styles.size.pagePadding1};
`;
const FormWrapper = styled.form`
    padding-left:80px;

`;

/***action<FormWrapper >
									<TextField
											autoFocus
											margin="dense"
											id="name"
											label="Name"
											type="text"
											//defaultValue={props.link.name}
											fullWidth
											variant="standard" 
											value={name}
											onChange={(e) => setName(e.target.value)}
											
										/>
										<TextField
											autoFocus
											margin="dense"
											id="url"
											label="URL"
											type="text"
										// defaultValue={props.link.url}
											fullWidth
											variant="standard"
											
											value={url}
											onChange={(e) => setUrl(e.target.value)}
											
										/>
										<TextField
											autoFocus
											margin="dense"
											id="postion"
											label="URL"
											type="text"
										// defaultValue={props.link.url}
											fullWidth
											variant="standard"
											
											value={position_order}
											onChange={(e) => setPosition_order(e.target.value)}
											
										/>
										<Button 
											variant='contained' 
											disableElevation 
											color='primary'
											fullWidth={false}
											type='submit'
										>SAVE</Button>
									</FormWrapper> */
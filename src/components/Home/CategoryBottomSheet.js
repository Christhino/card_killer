import React, { useRef } from "react";
import styled from "styled-components";
import * as styles from "../../styles/variables";
import { BottomSheet } from "react-spring-bottom-sheet";
import 'react-spring-bottom-sheet/dist/style.css';
import { MdModeEditOutline} from "react-icons/md";
import { BiTrash } from "react-icons/bi";
import axios from "axios";
import useToken from "../Login/useToken";
class CategoryBottomSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        }
        this.onDismiss = this.onDismiss.bind(this);
    }
    state = {
        categories: [],
    }
    componentWillMount() {
        const URL_API = "https://api.cardkiller.me";
        const token = localStorage.getItem('token');
        console.log("token =>" , token);
        axios.get(URL_API+"/ck_category/" ,{
            headers: {
				'Authorization':`Bearer ${token}`
			}
        })
           .then(res => {
               console.log(res.data.categories)
               const categories =res.data.categories;
               this.setState({ categories })
           })
    }
    onDismiss() {
        this.props.closeBottomSheet();
    }
    render() {
        let categories = this.state.categories.map((category, index)=>{
            return (
                <li key={category.category_id} className={this.props.selectedCategory===category.category_id ? "selected" : ""}>
                    {category.name}
                    <span className="action">
                        <button><MdModeEditOutline/></button>
                        <button><BiTrash/></button>
                    </span>
                </li>
            );
        });
        return (
            <BottomSheet
                open={this.props.open}
                onDismiss={this.onDismiss}
                header={<SheetTitle>Create Link Categories</SheetTitle>}
                footer={<SheetFooter blured>Add category</SheetFooter>}
            > 
                <SheetContent>               
                    <ul>
                        {categories}
                    </ul>
                </SheetContent>
            </BottomSheet>
        );
    }
}

export default CategoryBottomSheet;

const SheetContent = styled.div`
    ul{
        list-style-type: none;
        padding: 0;
        margin: 0;
        margin-bottom: 30px;
        li{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 46px;
            color: ${styles.colors.textLightGrey};
            border-top: 1px solid ${styles.colors.pageBgGrey};
            .action{
                position: absolute;
                right: 15px;
                display: flex;
                display: none;
                button{
                    background-color: transparent;
                    color: white;
                    border: none;
                    font-size: 18px;
                    display: flex;
                    align-items: center;
                    &:focus{
                        outline: none;
                    }
                }
            }
            &.selected{
                background-color: ${styles.colors.blue};
                color: white;
                .action{
                    display: flex;
                }
            }
        }
    }
`;
const SheetTitle = styled.h3`
    padding: 0;
    margin: 15px 0;
    font-weight: normal;
    font-size: 24px;
    font-weight: 500;
`;
const SheetFooter = styled.button`
    border: none;
    border-bottom: 3px solid #dddbdb;
    color: ${styles.colors.textLightGrey};
    display: block;
    height: 46px;
    width: 100%;
    font-size: 16px;
    &:focus{
        outline: none;
    }
`;
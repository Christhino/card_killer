/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as styles from "../../styles/variables";
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types'
import { FiChevronRight, FiExternalLink, FiCopy, FiLogOut } from 'react-icons/fi';
import axios from 'axios'
//components
import MenuItem from './MenuItem';


const dividerColor = '#F2F2F6';
const MenuWrapper = styled.div`
    background-color: white;
    min-height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    /* transform: translateX(100%); */
    transform: ${props => props.showMenu ? 'translateX(0%)' : 'translateX(100%)'};
    transition: transform .25s cubic-bezier(0.79,0.14,0.15,0.86);;
    .title{
        padding: 30px ${styles.size.pagePadding1};
        border-bottom: 16px solid ${dividerColor};
        button{
            border: none;
            background-color: transparent;
        }
        h3{
            text-align: center;
            font-size: 24px;
            margin: 0;
            margin-top: -10px;
        }
    }
    ul{
        list-style-type: none;
        padding: 0;
        margin: 0;
        li.groupTitle{
            height: 46px;
            display: flex;
            align-items: center;
            padding-left: ${styles.size.pagePadding1};
            background-color: ${dividerColor};
            color: #A3A3A3;
            font-size: 14px;
        }
    }
`;
/**window.localStorage.clear(); */
const logout = async () => {
    await axios.post('logout', {}, {withCredentials: true});
}
class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    logout = (e) => {
        const { cookies } = this.props;
        cookies.remove('Token');
        window.localStorage.clear()
        // return false;
    }
 
    render() {
        return (
            <MenuWrapper showMenu={this.props.showMenu}>
                <div className="title">
                    <button onClick={this.props.closeMenu}>Close</button>
                    <h3>Your Account</h3>
                </div>
                <ul> 
                    <MenuItem to="/home" text="Go home"/>
                    <MenuItem to="/saved-cards" text="Your Cards" rightText="peipeiw"/>
                    <MenuItem to="user-profile" text="User Profile"/>
                    <MenuItem to="/edit-profile" text="Change Username"/>
                    <MenuItem to="/card" text="Manage Reviews"/>
                    <li className="groupTitle">
                        Billing
                    </li>
                    <MenuItem to="/plan" text="Your Plan" rightText="Gold (trial)"/>
                    <li className="groupTitle">
                        Billing
                    </li>
                    <MenuItem to="/card" text="Analytics" icon={<FiExternalLink/>}/>
                    <MenuItem to="/card" text="Copy Profile Link" icon={<FiCopy/>}/>
                    <MenuItem to={"/"} onClick={logout} text="Logout" icon={<FiLogOut/>}/>
                </ul>
            </MenuWrapper>
        );
    }
}

export default Menu;
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as styles from "../../styles/variables";

//components
import appLogo from "../../assets/img/app-logo.svg";
import Menu from "./Menu";
import {IoMdMenu} from "react-icons/io";




const NavWrapper = styled.nav`
    background-color: ${styles.colors.blue};
    height: ${styles.size.navHeight};
    width: 100%;
    margin: 0;
    position: fixed;
    z-index: 3;
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        padding: 0 ${styles.size.pagePadding1};
        button{
            background-color: transparent;
            border: none;
            color: white;
            font-size: 31px;
            display: flex;
            align-items: center;
        }
    }
`;

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu(){
        let menuState = !this.state.showMenu;
        this.setState({
            showMenu: menuState
        });
    }
    render() {
        return (
            <NavWrapper>
                <div className="header">
                    <img src={appLogo} alt="app-logo" />
                    <button onClick={this.toggleMenu}>
                        <IoMdMenu/>
                    </button>
                </div>
                <Menu showMenu={this.state.showMenu} closeMenu={this.toggleMenu}/>
            </NavWrapper>
        );
    }
}

export default Nav;
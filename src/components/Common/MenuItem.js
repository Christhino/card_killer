/* eslint-disable no-useless-constructor */
import React from "react";
import styled from "styled-components";
import * as styles from "../../styles/variables";
import { Link } from "react-router-dom";

import { FiChevronRight } from 'react-icons/fi';


const dividerColor = '#F2F2F6';
const Item = styled.li`
    height: 46px;
    display: flex;
    border-bottom: 2px solid ${dividerColor};
    a{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 ${styles.size.pagePadding1};
        text-decoration: none;
        color: ${styles.colors.black};
        .right{
            color: #A3A3A3;
            font-size: 14px;
            display: flex;
            align-items: center;
            span{
                display: flex;
                align-items: center;
                margin-left: 13px;
                font-size: 23px;
            }
        }
    }
`;

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Item>
                <Link to={this.props.to || '#'}>
                    <span>{this.props.text}</span>
                    <span className="right">
                        {this.props.rightText || ""}
                        <span>
                            {this.props.icon || <FiChevronRight />}
                        </span>
                    </span>
                </Link>
            </Item>
        );
    }
}

export default MenuItem;
import React from "react";
import styled from "styled-components";
import * as styles from "../../styles/variables";


class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled: true
        }
    }
    render() {
        return (
            <ButtonWrapper 
                className="toggle" 
                enabled={this.props.enabled} 
                onClick={() => this.props.toggleLink(this.props.linkId)}
                >
                <span className="inner"></span>
            </ButtonWrapper>
        );
    }
}
export default ToggleButton;

const ButtonWrapper = styled.button`
    background-color: ${props => props.enabled ? styles.colors.blue : '#969796'};
    border-radius: 30px;
    border: none;
    display: inline-block;
    width: 32px;
    height: 20px;
    padding-left: 2px;
    padding-right: 2px;
    transition: all .2s;
    .inner{
        display: block;
        width: 16px;
        height: 16px;
        background-color: white;
        border-radius: 30px;
        margin-right: 0;
        margin-left: auto;
        transition: all .1s;
        transform: translateX(${props=>props.enabled ? '0px':'-12px'});
    }
`;
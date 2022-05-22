import React from "react";
import styled from "styled-components";
import * as styles from "../../styles/variables";

import { MdIosShare } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";

export default function ShareLink() {
    return (
        <Wrapper>
            <div>
                <strong>Share My Card Killer Link</strong>
                {/*<span className="link">http: peipei@cardkiller.com</span>*/}
                <button><MdIosShare /></button>
                
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    &>div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        strong{
            font-size: 14px;
            font-weight: 500;
        }
        .link{
            font-size: 12px;
            color: ${styles.colors.textLightGrey}
        }
        button{
            border: none;
            background-color: transparent;
            font-size: 14px;
        }
    }
    &>button{
        border-radius: 30px;
        border: 1px solid ${styles.colors.textLightGrey};
        font-weight: 500;
        padding: 2px 30px;
    }
`;
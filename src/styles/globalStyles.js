import { createGlobalStyle } from 'styled-components';
import * as styles from './variables';

const GlobalStyle = createGlobalStyle`
    :root{
        --rsbs-backdrop-bg: rgba(0, 0, 0, 0.1);
        --rsbs-handle-bg: hsla(0, 0%, 0%, 0);
    }
    *{
        box-sizing: border-box;
    }
    body{
        color: ${styles.colors.black};
        margin: 0;
        padding: 0;
        font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        min-height: 100vh;
        font-size: 14px;
    }

    /* BottomSheet header and footer  */
    [data-rsbs-footer], [data-rsbs-header]{
        padding: 0;
    }
`;

export default GlobalStyle;
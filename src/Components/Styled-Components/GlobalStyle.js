import { createGlobalStyle } from 'styled-components';
import colors from "./General-Styles/colors"
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto ;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
    background-color: ${colors.light};
  }
`;
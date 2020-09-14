import { createGlobalStyle } from "styled-components";
import colors from "./General-Styles/colors";
export const GlobalStyle = createGlobalStyle`
:root {
  font-size: 62.5%;
  box-sizing: border-box;
  @media screen and (min-width: 768px) and (orientation : portrait) {
    font-size: 100%;
  }
  @media screen and (min-width: 900px) {
    font-size: 100%;
  }

}
  body {
    position:relative;
    margin: 0 auto ;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
    background-color: ${colors.light};

    *{
      padding: 0;
      margin: 0 ;
      box-sizing: border-box;
    }
  }
`;

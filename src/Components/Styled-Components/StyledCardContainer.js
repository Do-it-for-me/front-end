import styled from "styled-components";
//import colors from "./General-Styles/colors";

export const StyledCardContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gray;

  @media screen and (min-width: 768px) {
    width: 60%;
    min-height: 100vh;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

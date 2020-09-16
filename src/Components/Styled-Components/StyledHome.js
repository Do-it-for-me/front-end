import styled from "styled-components";
import colors from "./General-Styles/colors";
import heroImage from "../../images/heroImage.jpg";

export const StyledHome = styled.div`
  overflow-x: hidden;
  width: 100vw;
  min-height: 100vh;
  top: 0px;
  background-color: ${colors.light};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${colors.dark};
  padding: 0;
  margin: 0;

  .infoSection {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
`;

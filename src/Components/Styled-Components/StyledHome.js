import styled from "styled-components";
import colors from "./General-Styles/colors";
import heroImage from "../../images/heroImage.jpg";

export const StyledHome = styled.div`
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

  .heroSection {
    padding-top: 6rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    padding: 0;
    margin: 0;
    background-image: url(${heroImage});
    background-position: 50% 20%;
    background-attachment: fixed;
    background-size: cover;

    h2 {
      color: ${colors.middle};
      font-size: 2rem;
      margin-top: -2rem;
      width: 80vw;
      filter: drop-shadow(0px 0.2rem 0.2rem rgba(0, 0, 0, 0.1));
      /*       @media (orientation: landscape) {
        margin-top: 0rem;
      } */
    }
  }
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

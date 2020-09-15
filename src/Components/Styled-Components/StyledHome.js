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
  .heroSection {
    padding-top: 6rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    background-image: url(${heroImage});
    background-position: 50% 20%;
    background-attachment: fixed;
    background-size: cover;
    .searchSection {
      width: 80vw;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      @media (min-width: 900px) {
        flex-direction: row;
      }
      div,
      button {
        width: 100%;
        max-width: 400px;
      }
    }
    /* search section ends here */
    .headlineSection {
      margin-bottom: 5rem;
      position: relative;
      width: 80vw;
      height: 3rem;
      :before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        filter: blur(40px);
        width: 80vw;
        height: 3rem;
        background-color: ${colors.middle};
      }
      h2 {
        filter: blur(0px);
        color: ${colors.primary};
        font-size: 2.2rem;
        width: 80vw;
        font-weight: bold;
        filter: drop-shadow(0px 0.2rem 0.2rem rgba(0, 0, 0, 0.1));
        /*       @media (orientation: landscape) {
          margin-top: 0rem;
        } */
      }
    }
    /* headline section ends here */
  }
  /* hero section ends here */
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

import styled from "styled-components";
import colors from "./General-Styles/colors";
import heroImage from "../../images/heroImage.jpg";
export const StyledHeroSection = styled.div`
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
    }
  }
`;

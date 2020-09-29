import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledProfile = styled.div`
  width: 100vw;
  min-height: 100vh;
  top: 0px;
  background-color: ${colors.light};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${colors.dark};
  padding-top: 7rem;
  margin: 0;
  .profileContainer {
    width: 90%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .imageContainer {
      position: relative;
      margin: 1rem 0;
      img {
        width: 100%;
      }
      span {
        position: absolute;
        top: 1rem;
        right: 1rem;
      }
    }
  }
`;

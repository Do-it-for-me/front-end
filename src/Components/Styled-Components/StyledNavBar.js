import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledNavBar = styled.div`
  font-size: 16px;
  width: 50vw;
  display: none;
  justify-content: space-around;
  align-items: center;
  button {
    max-width: 160px;
    max-height: 40px;
    font-size: inherit;
  }
  div {
    position: relative;
    font-weight: bold;
    text-align: center;
    /* width: 20%; */
    color: ${colors.light};
    cursor: pointer;
    :hover {
      color: ${colors.secondary};
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1400px) {
    width: 40vw;
  }
`;

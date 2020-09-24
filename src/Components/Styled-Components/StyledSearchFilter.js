import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledSearchFilter = styled.div`
  position: fixed;
  left: 0;
  width: 100vw;
  height: calc(100vh - 7rem);
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  z-index: 50;
  background-color: ${colors.middle};
  transform: scaleX(0);
  transform-origin: left;
  transition: 0.2s ease;
  padding-top: 5rem;
  font-size: 2rem;
  font-weight: 700;

  ${({ extend }) => extend && `transform: scaleX(1);`}

  a button {
    width: 17rem;
  }
  @media screen and (min-width: 768px) {
    position: relative;
    transform: none;
    transform-origin: none;
    transition: none;
    width: 400px;
    height: calc(100vh - 7rem);
    font-size: 1.2rem;
  }
`;

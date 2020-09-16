import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledButton = styled.button`
  background-color: ${(props) => {
    if (props.type === "primary") return colors.primary;
    if (props.type === "secondary") return colors.secondary;
  }};
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  color: ${colors.light};
  width: 17rem;
  height: 3.5rem;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.17));
  border-radius: 3px;
  outline: none;
  /*   display:flex;
  justify-content: stretch;
  align-items:stretch; */
  a {
    :visited,
    :link,
    :hover,
    :active {
      color: ${colors.light};
    }
  }
  div {
    width: 100%;
    height: 100%100vh;
  }
  :hover {
    opacity: 0.8;
  }
  :active {
    transform: scale(0.99);
    filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.1));
  }
`;

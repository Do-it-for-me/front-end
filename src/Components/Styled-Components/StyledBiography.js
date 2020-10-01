import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledBiography = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: stretch;
  align-items: flex-start;
  label {
    width: 100px;
    height: 30px;
  }
  textarea {
    flex-grow: 1;
    margin: 5px;
    background-color: ${colors.light};
    border-radius: 2px;
    border-color: ${colors.middle};
  }
  button {
    width: 50px;
    border-color: ${colors.secondary};
    border-radius: 2px;
    outline: none;
    background-color: ${colors.secondary};
    margin: 5px;
    color: ${colors.light};
    height: 30px;
  }
  .cancel {
    border-color: ${colors.danger};
    background-color: ${colors.danger};
  }
  .save {
    border-color: ${colors.primary};
    background-color: ${colors.primary};
  }
`;

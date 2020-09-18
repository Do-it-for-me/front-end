import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledSignupForm = styled.form`
  width: 80vw;
  max-width: 600px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  color: ${colors.dark};
  padding-top: 5rem;
  margin: 0;
  .city {
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    div,
    input {
      flex-grow: 1;
    }
  }

  input {
    height: 3.5rem;
    margin-bottom: 1rem;
    text-align: center;
    border: 1px solid ${colors.middle};
    color: ${colors.middle};
  }
  button {
    margin-top: 2rem;
    width: 100%;
  }
`;

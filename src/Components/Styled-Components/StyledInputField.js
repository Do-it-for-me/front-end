import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledInputField = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: stretch;
  align-items: center;
  height: 40px;
  label {
    width: 100px;
    height: 30px;
  }
  .inputContainer {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    input {
      width: 100%;
      height: 30px;
      flex-grow: 1;
      margin: 5px;
      background-color: ${colors.light};
      border-radius: 2px;
      border: solid 1px ${colors.middle};
    }
    .showPassword {
      position: absolute;
      top: center;
      right: 10px;
    }
  }
  .select {
    height: 30px;
    flex-grow: 1;
    margin: 5px;
    background-color: ${colors.light};
    border-radius: 2px;
    border: solid 1px ${colors.middle};
    color: ${colors.dark};
    .ant-select {
      width: 100%;
      .ant-select-selector {
        border-color: ${colors.primary};
        border-top-color: ${colors.primary};
        border-right-color: ${colors.primary};
        border-bottom-color: ${colors.primary};
        border-left-color: ${colors.primary};
        border-right-width: 1px !important;
        background-color: none;
        padding: 0 !important;
        padding-left: 0;
        padding-right: 0;
        display: flex;
        .ant-select-selection-search {
          flex-grow: 1;
        }
      }
      :hover,
      :active,
      :focus,
      :focus-within,
      :visited {
        border-color: ${colors.primary};
        border-top-color: ${colors.primary};
        border-right-color: ${colors.primary};
        border-bottom-color: ${colors.primary};
        border-left-color: ${colors.primary};
        outline-color: ${colors.primary};
        border-right-width: 1px !important;
      }

      span {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: ${colors.dark};
        background-color: ${colors.light};
        .ant-select-selection-search-input {
          text-align: left;
          background-color: ${colors.light};
        }
      }
    }
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

import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledSearcherDealItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  border: 1px solid ${colors.middle};
  margin: 3px;
  h4 {
    font-weight: 700;
  }
  .userDataContainer {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
  }
  .actionsContainer {
    width: 50%;
    position: relative;

    .cancel {
      position: absolute;
      bottom: 5px;
      right: 5px;
      margin: 2px;
      width: 50%;
      height: 30px;
      font-weight: 700;
      font-size: 14px;
      background-color: ${colors.danger};
      border-radius: 3px;
      border: none;
      transition: all ease-in-out 0.5s;
      z-index: 40;
      cursor: pointer;
      span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
        ::after {
          content: "»";
          position: absolute;
          opacity: 0;
          top: 0;
          right: -20px;
          transition: 0.5s;
        }
      }
      :hover span {
        padding-right: 25px;
      }
      :hover span:after {
        opacity: 1;
        right: 0;
      }
      :focus {
        outline: none;
      }
    }
  }
`;

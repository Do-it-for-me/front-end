import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledSelectServices = styled.div`
  width: 17rem;
  .ant-select {
    width: 100%;
    height: 3.5rem;
    .ant-select-selector {
      height: 3.5rem;
      span {
        height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .ant-select-selection-search-input {
          height: 3.5rem;
          text-align: center;
        }
      }
    }
  }
`;

import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledStarRate = styled.div`
  width: 17rem;
  height: 3.5rem;
  display: flex;
  flex-flow: column;

  .ant-rate {
    /* background-color: red; */
    color: ${colors.dark};
    .ant-rate-star {
      div {
        .ant-rate-star-first {
          .anticon {
          }
          .anticon-star {
          }
        }
      }
    }
    .ant-rate-star-full {
    }
  }
`;

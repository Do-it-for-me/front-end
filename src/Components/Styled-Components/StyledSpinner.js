import styled from 'styled-components';
import colors from "./General-Styles/colors";
export const StyledSpinner = styled.div`
  border: 5px solid ${colors.primary}; 
  border-top: 5px solid ${colors.secondary}; 
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;
position: absolute;
top :50vh;
margin:auto;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

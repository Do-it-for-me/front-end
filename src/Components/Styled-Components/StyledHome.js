import  styled  from 'styled-components';
import colors from "./General-Styles/colors"
export const StyledHome = styled.div`

    width: 100vw;
    min-height:100vh;
    top: 0px;
    background-color:${colors.light};
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center ;
    color: ${colors.dark};
    padding:0;
    margin:0;

    .heroSection{
        background-color:${colors.primary};
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        align-items: center;
        height:70vh;
        padding:0;
        margin:0;
        h2{
            font-size:1.5rem;
            width:80vw;
            filter: drop-shadow(0px .2rem .2rem rgba(0, 0, 0, 0.17));
        }
    }
    .infoSection{
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        align-items: center;
        height:70vh;
    }
`;
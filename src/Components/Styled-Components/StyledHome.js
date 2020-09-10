import  styled  from 'styled-components';
import colors from "./General-Styles/colors"
import heroImage from "../../images/heroImage.jpg"




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
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        align-items: center;
        height:100vh;
        padding:0;
        margin:0;
        background-image: url(${heroImage});
        background-position: 50% 20%;
        background-attachment: fixed;
        background-size:cover;
        h2{
            color:${colors.middle};
            font-size:2rem;
            margin-top:-2rem;
            width:80vw;
            filter: drop-shadow(0px .2rem .2rem rgba(255, 255, 255, 0.25));
        }
    }
    .infoSection{
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        align-items: center;
        
    }
`;
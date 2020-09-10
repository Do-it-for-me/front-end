import  styled  from 'styled-components';
import colors from "./General-Styles/colors"


export const StyledHeader = styled.div`
    position: absolute;
    width: 100vw;
    height: 7rem;
    top: 0px;
    background-color:${colors.dark};
    display:flex;
    justify-content:center;
    align-items: center;
    color: ${colors.light};
    filter: drop-shadow(0px .7rem .7rem rgba(0, 0, 0, 0.25));
    padding:0;
    margin:0;
    .navBarContainer{
        font-size:1.6rem;
        padding:0;
        margin:0 2rem;
        max-width:1920px;
        width:100%;
        height:7rem;
        display:flex;
        justify-content:space-between;
        align-items: center;

        .logoContainer{
            height:6rem;
            width:6rem;
            display:flex;
            justify-content:space-between;
            align-items: center;
        }
        .navigationContainer{
            height:6rem;
            display:flex;
            justify-content:space-between;
            align-items: center;
        }
    }
;
`;
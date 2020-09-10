import  styled  from 'styled-components';
import colors from "./General-Styles/colors"


export const StyledHeader = styled.div`
    position: absolute;
    width: 100vw;
    height: 4.5rem;
    top: 0px;
    background-color:${colors.dark};
    display:flex;
    justify-content:center;
    align-items: center;
    color: ${colors.light};
    filter: drop-shadow(0px .5rem .5rem rgba(0, 0, 0, 0.25));
    padding:0;
    margin:0;
    .navBarContainer{
        font-size:1rem;
        padding:0;
        margin:0 2rem;
        max-width:1920px;
        width:100%;
        height:4.5rem;
        display:flex;
        justify-content:space-between;
        align-items: center;

        .logoContainer{
            height:4rem;
            width:4rem;
            display:flex;
            justify-content:space-between;
            align-items: center;
        }
        .navigationContainer{
            height:4rem;
            display:flex;
            justify-content:space-between;
            align-items: center;
        }
    }
;
`;
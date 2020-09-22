import styled from "styled-components";

export const StyledInfoSection = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    justify-content: center;

    .infoItem{
        
        width: 95%;
        margin-top: 2rem;
        height: 35%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;

        &:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }

        .text2 {
            margin-top: 1rem;
        } 
            
        .image4 {
            margin-left: 5rem;
            margin-bottom: 2.5rem;
        }

        p {
            max-width: 50%;
            margin-top: 2rem;
        }
    }

    @media screen and (min-width: 768px) {
    flex-direction: row;
        
    .infoItem{
        margin : 1rem;
        min-height: 45vh;
        
        
        .image2 {
            width:240px;
            
        }
        .image4 {
            margin-left: 0rem;
            margin-bottom: 0rem;
            width: 190px;
            
        }
        .image7 {
            width:200px;
            margin-top: -1rem;
        }

        .text2 {
            margin-top: 2rem;
        } 
            
    }
        
}
        
    
`;

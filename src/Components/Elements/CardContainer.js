import React from "react";
import { StyledCardContainer } from "../Styled-Components/StyledCardContainer";
import Cards from "../Elements/Cards";

const CardContainer = () => {


    return (

        <StyledCardContainer>
            <Cards />
            <Cards />
            <Cards />
        </StyledCardContainer>
    );
};

export default CardContainer;
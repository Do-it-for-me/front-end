import React from "react";

import { StyledHome } from "../Styled-Components/StyledHome";
import { HeroSection } from "../Elements/HeroSection";
import InfoSection from "../Elements/InfoSection.js";

const Home = () => {
  return (
    <StyledHome>
      <HeroSection />

      <InfoSection />
    </StyledHome>
  );
};

export default Home;

import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjFourLight, homeObjOneLight, homeObjTwo } from "../Data";

function Services() {
  return (
    <>
      <HeroSection {...homeObjOneLight} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjFourLight} />
    </>
  );
}

export default Services;

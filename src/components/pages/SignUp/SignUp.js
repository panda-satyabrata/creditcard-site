import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjThree } from "../Data";

function SignUp() {
  return (
    <div>
      <HeroSection {...homeObjThree} />
    </div>
  );
}

export default SignUp;

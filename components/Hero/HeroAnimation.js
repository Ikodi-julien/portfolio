import { useEffect } from "react";
import { HeroAnimationContainer } from "./HeroStyles";
import { createAnimation, cleanUp } from "./animationScript";
import { solarSystem } from "./solarSysteme";

const HeroAnimation = (props) => {
  useEffect(() => {
    const webGl2Supported = !!document
      .createElement("canvas")
      .getContext("webgl2");

    if (webGl2Supported) {
      createAnimation();
    } else {
      solarSystem.init();
    }
    // return () => cleanUp();
  });

  return (
    <HeroAnimationContainer>
      <canvas id="canvas"></canvas>
    </HeroAnimationContainer>
  );
};

export default HeroAnimation;

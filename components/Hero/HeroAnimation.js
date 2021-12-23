import { useEffect } from "react";
import { createAnimation, cleanUp } from "./animationScript";

const HeroAnimation = (props) => {
  useEffect(() => {
    createAnimation();
    return () => cleanUp();
  });
  return <canvas id="canvas"></canvas>;
};

export default HeroAnimation;

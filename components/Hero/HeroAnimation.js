import { useEffect } from "react";
import { createAnimation } from "./animationScript";

const HeroAnimation = (props) => {
  useEffect(() => {
    createAnimation();
  }, []);
  return <canvas id="canvas"></canvas>;
};

export default HeroAnimation;

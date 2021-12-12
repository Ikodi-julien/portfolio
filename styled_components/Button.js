import { ButtonBack, ButtonFront } from ".";

const Button = ({ children }) => (
  <ButtonBack>
    <ButtonFront>{children}</ButtonFront>
  </ButtonBack>
);
export default Button;

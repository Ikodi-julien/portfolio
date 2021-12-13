import { ButtonBack, ButtonFront } from ".";

const Button = (props) => (
  <ButtonBack>
    <ButtonFront color={props.color}>{props.children}</ButtonFront>
  </ButtonBack>
);
export default Button;

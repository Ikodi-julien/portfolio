import { ButtonBack, ButtonFront } from ".";

const Button = (props) => (
  <ButtonBack>
    <ButtonFront color={props.color} onClick={props.onClick}>
      {props.children}
    </ButtonFront>
  </ButtonBack>
);
export default Button;

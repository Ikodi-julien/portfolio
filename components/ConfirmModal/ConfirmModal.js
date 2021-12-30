import { Modal, Container, Background } from "./ConfirmModalStyles";
import { Text, Row, IconContainer } from "../../styled_components";
import Button from "/styled_components/Button";
import { FaTimes } from "react-icons/fa";

const ConfirmModal = ({ text, isOpen, setIsOpen, actionToDispatch }) => {
  return (
    <Modal isOpen={isOpen}>
      <Background
        onClick={() => {
          setIsOpen(false);
        }}
      />
      <Container>
        <IconContainer
          onClick={() => setIsOpen(false)}
          // right="0"
          position="relative"
          padding="12px"
          margin="0"
          fontSize="1.5em"
          justifyContent="right"
        >
          <FaTimes />
        </IconContainer>
        <Text>{text}</Text>
        <Row>
          <Button
            onClick={() => {
              actionToDispatch();
              setIsOpen(false);
            }}
            color="primary"
          >
            OK
          </Button>
          <Button onClick={() => setIsOpen(false)} color="secondary">
            Exit
          </Button>
        </Row>
      </Container>
    </Modal>
  );
};

export default ConfirmModal;

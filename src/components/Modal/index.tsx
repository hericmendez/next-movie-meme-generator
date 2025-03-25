import { useState, useCallback, ReactNode } from "react";
import styled from "styled-components";
import useOutsideClick from "@/hooks/useOutsideClick";
import useKeypress from "@/hooks/useKeypress";

interface ModalProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any; // Ajuste conforme necessário
  element: ReactNode;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ data, element, children }) => {
  console.log(data);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const escFunction = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      console.log("esc pressed");
      setClick(false);
    }
  }, []);

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleClickOutside = () => {
    setClick(false);
  };

  useKeypress(escFunction);
  const ref = useOutsideClick(handleClickOutside);

  return (
    <Container onClick={handleModalClick} ref={ref}>
      <TriggerElement onClick={handleClick}>{element}</TriggerElement>
      <ModalContent $isOpen={click}>{children}</ModalContent>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  position: relative;
`;

const TriggerElement = styled.div`
  display: block;
  cursor: pointer;
`;

const ModalContent = styled.ul<{ $isOpen: boolean }>`
  position: fixed;

  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  width: 70vw;
  max-width: 1024px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #222;
  transition: left 0.3s ease-in-out;
  z-index: ${({ $isOpen }) => ($isOpen ? "10" : "-1")};
`;

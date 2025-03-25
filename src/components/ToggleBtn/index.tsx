import { FC } from "react";
import { Container, ToggleLabel, ToggleSelector } from "./styles";

const ToggleBtn: FC = () => {
  return (
    <Container>
      <ToggleLabel>On</ToggleLabel>
      <ToggleSelector
        checked
        checkedIcon={false}
        uncheckedIcon={false}
        onChange={(e) => console.log("checked:", e)}
      />
      <ToggleLabel>Off</ToggleLabel>
    </Container>
  );
};

export default ToggleBtn;

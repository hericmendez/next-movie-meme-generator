import styled from "styled-components";
import Switch, { ReactSwitchProps } from "react-switch";

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const ToggleLabel = styled.span`
  color: #ccc;
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(

)<ReactSwitchProps>`
  margin: 0 7px;
`;

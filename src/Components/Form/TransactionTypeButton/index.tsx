import React from "react";
import { Container, Icon, Title, Button } from "./styles";
import { RectButton } from "react-native-gesture-handler";

interface Props extends RectButton {
    type: "up" | "down";
    title: string;
    isActive: boolean;
    
}

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
}
export function TransationTypeButton({isActive,type, title, ...rest }: Props) {
  return (
    <Container type={type}   isActive={isActive}>
      <Button {...rest}>
        <Icon name={icons[type]} type={type} />
        <Title>{title}</Title>
      </Button>
    </Container>
  );
}

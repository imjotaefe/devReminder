import React from "react";
import { Container, Title, Background, SubTitle } from "./styles";

export default function Header({ title, subtitle }) {
  return (
    <Container>
      <Background>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Background>
    </Container>
  );
}

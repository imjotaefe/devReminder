import React from "react";
import {
  Container,
  Title,
  CopyRightContainer,
  CopyRight,
  SubTitle,
} from "./styles";

export default function Footer() {
  return (
    <Container>
      <div className="d-flex flex-column w-50">
        <Title>DEV Reminder</Title>
        <SubTitle>
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </SubTitle>
      </div>
      <div className="d-flex flex-column w-25 mt-5">
        <SubTitle>Home</SubTitle>
        <SubTitle>Sobre</SubTitle>
        <SubTitle>Cadastre-se</SubTitle>
        <SubTitle>Login</SubTitle>
      </div>
      <CopyRightContainer>
        <CopyRight>
          © Copyright 2020 DEV Reminder - All Rights Reserved.
        </CopyRight>
      </CopyRightContainer>
    </Container>
  );
}

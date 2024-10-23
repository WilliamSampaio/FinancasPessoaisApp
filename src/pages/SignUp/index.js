import React from "react";
import { Platform } from "react-native";

import {
  AreaInput,
  Backgroud,
  Container,
  Input,
  SubmitButton,
  SubmitText
} from '../SignIn/style';

export default function SignUp() {

  return (
    <Backgroud>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >

        <AreaInput>
          <Input placeholder="Digite seu nome" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Digite seu e-mail" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Digite uma senha" />
        </AreaInput>

        <SubmitButton>
          <SubmitText>Salvar</SubmitText>
        </SubmitButton>

      </Container>
    </Backgroud>
  )
};
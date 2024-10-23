import React from "react";
import { Platform } from "react-native";

import {
  Backgroud,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  LinkButton,
  LinkText
} from "./style";

import { useNavigation } from "@react-navigation/native";

export default function SignIn() {

  const navigation = useNavigation();

  return (
    <Backgroud>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo source={require('../../../assets/Logo.png')} />

        <AreaInput>
          <Input placeholder="seu e-mail" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="sua senha" />
        </AreaInput>

        <SubmitButton>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <LinkButton onPress={() => navigation.navigate('SignUp') }>
          <LinkText>Cadastre-se</LinkText>
        </LinkButton>
      </Container>
    </Backgroud>
  )
};
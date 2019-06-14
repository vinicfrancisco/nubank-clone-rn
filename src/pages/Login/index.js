import React from 'react';

import {
  Container, UserInfo, LoginButton, LoginInput, LoginButtonText, Title,
} from './styles';

function Login() {
  return (
    <Container>
      <Title>Login</Title>
      <UserInfo>
        <LoginInput placeholder="Usuário" placeholderTextColor="#FFF" />
        <LoginInput placeholder="Senha" placeholderTextColor="#FFF" />
        <LoginButton onPress={() => {}}>
          <LoginButtonText>Entrar</LoginButtonText>
        </LoginButton>
      </UserInfo>
    </Container>
  );
}

export default Login;

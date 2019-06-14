import React from 'react';

import logo from '~/assets/Nubank_Logo.png';

import {
  Container, UserInfo, LoginButton, LoginInput, LoginButtonText, Logo,
} from './styles';

function Login() {
  return (
    <Container>
      <Logo source={logo} resizeMode="contain" />
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

import React, { useState } from 'react';

import { ActivityIndicator, Animated, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import logo from '~/assets/Nubank_Logo.png';

import { metrics, colors } from '../../styles';

import {
  Container,
  UserInfo,
  LoginButton,
  LoginInput,
  LoginButtonText,
  Logo,
  AnimatedButton,
} from './styles';

function Login() {
  const [loading, setLoading] = useState(false);

  const [translateXY, setTranslateXY] = useState(new Animated.ValueXY({ x: 275, y: 35 }));

  function collapse(value) {
    setLoading(true);
    Animated.timing(value, {
      toValue: { x: 35, y: 35 },
    }).start();
  }

  function expand(value) {
    Animated.timing(value, {
      toValue: { x: 275, y: 35 },
    }).start(() => setLoading(false));
  }

  function fullExpand(value) {
    Animated.timing(value, {
      toValue: { x: metrics.screenWidth, y: metrics.screenHeight },
    }).start(() => {
      setLoading(false);
      Actions.main();
    });
  }

  async function handleLogin() {
    await collapse(translateXY);

    setTimeout(() => {
      expand(translateXY);
    }, 1000);

    // await setTimeout(() => {
    //   fullExpand(translateXY);
    // }, 1000);

    // await Actions.main();
  }

  return (
    <Container>
      <UserInfo
        style={{
          opacity: translateXY.y.interpolate({
            inputRange: [35, metrics.screenHeight],
            outputRange: [1, 0],
          }),
        }}
      >
        <Logo source={logo} resizeMode="contain" />

        <LoginInput placeholder="Usuário" placeholderTextColor="#FFF" />
        <LoginInput placeholder="Senha" placeholderTextColor="#FFF" />
      </UserInfo>

      <AnimatedButton
        style={{
          backgroundColor: translateXY.y.interpolate({
            inputRange: [35, metrics.screenHeight],
            outputRange: [colors.secundary, colors.primary],
          }),
          width: translateXY.x,
          height: translateXY.y,
        }}
      >
        {loading ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <LoginButton
            style={{
              opacity: translateXY.y.interpolate({
                inputRange: [35, metrics.screenHeight],
                outputRange: [1, 0],
              }),
            }}
          >
            <TouchableOpacity
              style={{
                alignItems: 'center',
                height: '100%',
                justifyContent: 'center',
                width: '100%',
              }}
              onPress={() => handleLogin()}
            >
              <LoginButtonText>Entrar</LoginButtonText>
            </TouchableOpacity>
          </LoginButton>
        )}
      </AnimatedButton>
    </Container>
  );
}

export default Login;

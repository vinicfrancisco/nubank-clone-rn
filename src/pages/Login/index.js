import React, { useState, useEffect } from 'react';

import { ActivityIndicator, Animated } from 'react-native';
import { Actions } from 'react-native-router-flux';

import logo from '~/assets/Nubank_Logo.png';
import { Page } from '~/components';

import { metrics, colors } from '~/styles';

import {
  UserInfo,
  LoginButton,
  LoginButtonView,
  LoginInput,
  LoginButtonText,
  Logo,
  AnimatedButton,
} from './styles';

function Login() {
  const [loading, setLoading] = useState(false);
  const [expanding, setExpanding] = useState(false);

  const [translateXY] = useState(new Animated.ValueXY({ x: 275, y: 35 }));

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
    setExpanding(true);
    Animated.timing(value, {
      toValue: { x: metrics.screenWidth, y: metrics.screenHeight },
    }).start(() => {
      setLoading(false);
      Actions.main();
    });
  }

  async function handleLogin() {
    await collapse(translateXY);

    // setTimeout(() => {
    //   expand(translateXY);
    // }, 1000);

    await setTimeout(() => {
      fullExpand(translateXY);
    }, 1000);
  }

  return (
    <Page>
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
        {loading && !expanding ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          !loading
          && !expanding && (
            <LoginButtonView
              style={{
                opacity: translateXY.y.interpolate({
                  inputRange: [35, metrics.screenHeight],
                  outputRange: [1, 0],
                }),
              }}
            >
              <LoginButton onPress={() => handleLogin()}>
                <LoginButtonText>Entrar</LoginButtonText>
              </LoginButton>
            </LoginButtonView>
          )
        )}
      </AnimatedButton>
    </Page>
  );
}

export default Login;

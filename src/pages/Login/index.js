import React, { useState, useEffect } from 'react';

import { ActivityIndicator, Animated, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as UsersActions } from '~/store/ducks/users';
import logo from '~/assets/Nubank_Logo.png';
import { Page } from '~/components';

import { metrics, colors } from '~/styles';

import {
  UserInfo, LoginInput, LoginButtonText, Logo, AnimatedButton,
} from './styles';

function Login() {
  const [translateXY] = useState(new Animated.ValueXY({ x: 275, y: 35 }));
  const { login } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    !login.success
      && Animated.timing(translateXY, {
        toValue: { x: login.loading ? 35 : 275, y: 35 },
      }).start();
  }, [login]);

  async function callback(route) {
    Animated.timing(translateXY, {
      toValue: { x: metrics.screenWidth, y: metrics.screenHeight },
    }).start(() => {
      Actions[route]();
    });
  }

  function handleLogin() {
    dispatch(UsersActions.loginRequest(callback));
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

      <TouchableOpacity onPress={() => handleLogin()}>
        <AnimatedButton
          style={{
            backgroundColor: translateXY.y.interpolate({
              inputRange: [35, metrics.screenHeight],
              outputRange: [colors.secundary, colors.primary],
            }),
            width: translateXY.x,
            height: translateXY.y,
            borderRadius: translateXY.x.interpolate({
              inputRange: [35, 275],
              outputRange: [25, 4],
            }),
          }}
        >
          {!login.success
            && (login.loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <LoginButtonText>Entrar</LoginButtonText>
            ))}
        </AnimatedButton>
      </TouchableOpacity>
    </Page>
  );
}

export default Login;

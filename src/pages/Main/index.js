import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Header, Menu, Tabs } from '~/components';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
  FadeIn,
} from './styles';

function Main() {
  let offset = 0;
  const fade = new Animated.Value(0);
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  useEffect(() => {
    Animated.timing(fade, {
      duration: 500,
      toValue: 1,
    }).start();
  }, []);

  function handleLogout() {
    Animated.timing(fade, {
      duration: 500,
      toValue: 2,
    }).start(() => Actions.login());
  }

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <FadeIn
        style={{
          opacity: fade.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [0, 1, 0],
          }),
        }}
      >
        <Header />

        <Content>
          <Menu logout={handleLogout} translateY={translateY} />
          <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChange}
          >
            <Card
              style={{
                transform: [
                  {
                    translateY: translateY.interpolate({
                      extrapolate: 'clamp',
                      inputRange: [-350, 0, 380],
                      outputRange: [-50, 0, 380],
                    }),
                  },
                ],
              }}
            >
              <CardHeader>
                <Icon name="attach-money" size={28} color="#666" />
                <Icon name="visibility-off" size={28} color="#666" />
              </CardHeader>

              <CardContent>
                <Title>Saldo disponível</Title>
                <Description>R$ 16.123,65</Description>
              </CardContent>

              <CardFooter>
                <Annotation>
                  Transferência de R$ 659,12 recebida de Vinícius Catafesta Francisco
                </Annotation>
              </CardFooter>
            </Card>
          </PanGestureHandler>
        </Content>

        <Tabs translateY={translateY} />
      </FadeIn>
    </Container>
  );
}

export default Main;

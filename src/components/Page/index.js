import React, { useEffect, useImperativeHandle, forwardRef } from 'react';

import { Animated } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container, Fade } from './styles';

function Page(props, ref) {
  const { children } = props;
  const fade = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fade, {
      duration: 500,
      toValue: 1,
    }).start();
  }, []);

  useImperativeHandle(ref, () => ({
    push(page) {
      Animated.timing(fade, {
        duration: 500,
        toValue: 2,
      }).start(() => Actions[page]());
    },
  }));

  return (
    <Container>
      <Fade
        style={{
          opacity: fade.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [0, 1, 0],
          }),
        }}
      >
        {children}
      </Fade>
    </Container>
  );
}

export default forwardRef(Page);

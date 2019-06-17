import React, { useEffect } from 'react';

import { Animated } from 'react-native';

import { Container, Fade } from './styles';

function Page(props) {
  const { children } = props;
  const fade = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fade, {
      duration: 500,
      toValue: 1,
    }).start();
  }, []);

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

export default Page;

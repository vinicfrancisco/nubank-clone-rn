import { Animated } from 'react-native';
import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.View`
  background: ${colors.primary};
  flex: 1;
`;

export const Fade = styled(Animated.View)`
  flex: 1;
  justify-content: center;
`;

import { Animated } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.View`
  background: ${colors.primary};
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;
`;

export const Fade = styled(Animated.View)`
  flex: 1;
  justify-content: center;
`;

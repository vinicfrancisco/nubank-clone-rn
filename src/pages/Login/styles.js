import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../styles';

export const Logo = styled.Image`
  height: 70px;
  margin-bottom: 20px;
  width: 70px;
`;

export const UserInfo = styled(Animated.View)`
  justify-content: center;
  align-items: center;
`;

export const LoginInput = styled.TextInput`
  background: ${colors.whiteTransparent};
  border-radius: 5px;
  color: ${colors.white};
  height: 35px;
  margin-bottom: 15px;
  padding: 0 10px;
  width: 275px;
`;

export const AnimatedButton = styled(Animated.View)`
  align-items: center;
  align-self: center;
  border-radius: 4px;
  justify-content: center;
`;

export const LoginButtonText = styled.Text`
  color: ${colors.white};
  font-size: 15px;
  text-transform: uppercase;
`;

export const Loading = styled.ActivityIndicator`
  color: ${colors.white};
`;

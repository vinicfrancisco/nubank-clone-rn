import styled from 'styled-components/native';
import { colors } from '../../styles';

export const Container = styled.View`
  align-items: center;
  background: ${colors.primary};
  flex: 1;
  justify-content: center;
`;

export const Logo = styled.Image`
  height: 70px;
  margin-bottom: 20px;
  width: 70px;
`;

export const UserInfo = styled.View``;

export const LoginInput = styled.TextInput`
  background: ${colors.whiteTransparent};
  border-radius: 5px;
  color: ${colors.black};
  height: 35px;
  margin-bottom: 15px;
  padding: 0 10px;
  width: 275px;
`;

export const LoginButton = styled.TouchableOpacity`
  align-items: center;
  background: ${colors.secundary};
  border-radius: 5px;
  height: 35px;
  justify-content: center;
  width: 275px;
`;

export const LoginButtonText = styled.Text`
  color: ${colors.white};
  font-size: 15px;
  text-transform: uppercase;
`;

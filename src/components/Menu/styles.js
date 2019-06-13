import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  margin: 0 30px;
`;

export const Code = styled.View`
  align-self: center;
  background: #fff;
  padding: 10px;
`;

export const Nav = styled.View`
  border-top-color: rgba(255, 255, 255, 0.8);
  border-top-width: ${StyleSheet.hairlineWidth}px;
  margin-top: 30px;
`;

export const NavItem = styled.View`
  align-items: center;
  border-bottom-color: rgba(255, 255, 255, 0.8);
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  flex-direction: row;
  padding: 12px 0;
`;

export const NavText = styled.Text`
  color: #fff;
  font-size: 15px;
  margin-left: 20px;
`;

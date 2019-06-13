import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #8b10ae;
  justify-content: center;
  padding-top: ${getStatusBarHeight()}px;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled.View`
  background: #fff;
  border-radius: 4px;
  flex: 1;
  height: 100%;
  margin: 0 20px;
  position: absolute;
  left: 0;
  top: 380px;
  right: 0;
`;

export const CardHeader = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
`;

export const CardContent = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  color: #999;
  font-size: 13px;
`;

export const Description = styled.Text`
  color: #333;
  font-size: 32px;
  margin-top: 3px;
`;

export const CardFooter = styled.View`
  background: #eee;
  border-radius: 4px;
  padding: 30px;
`;

export const Annotation = styled.Text`
  color: #333;
  font-size: 12px;
`;

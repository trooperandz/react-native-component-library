import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: #51a7f9;
  width: 100%;
  z-index: 2;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const SubHeader = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: 60px;
  z-index: 1;
  background-color: #ccc;
  height: 60px;
  width: 100%;
`;

export const CardContainer = styled.View`
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 18px;
  min-height: 80px;
  margin: 18px;
`;

export const styles = StyleSheet.create({
  subheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    height: 60,
    width: '100%',
    backgroundColor: '#ccc',
  },
});

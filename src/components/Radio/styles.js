import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const RadioInner = styled.View`
  background-color: #51a7f9;
  width: 12px;
  height: 12px;
  border-radius: 6px;
`;

export const RadioOuter = styled.View`
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-color: #51a7f9;
  border-width: 2px;
  border-radius: 12px;
`;

export const Label = styled.Text`
  font-size: 18px;
  color: #333;
  margin-left: 8px;
`;

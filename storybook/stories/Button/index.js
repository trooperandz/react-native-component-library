import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Pressable } from 'react-native';
import styled from 'styled-components/native';

const PressableButton = styled.TouchableOpacity`
  width: 242px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
  padding: 12px 24px;
  background-color: #51a7f9;
`;

export default function Button({ onPress, children }) {
  return <PressableButton onPress={onPress}>{children}</PressableButton>;
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

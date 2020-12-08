import styled from 'styled-components/native';

const getTextColor = (type) => {
  let color;

  switch (type) {
    case 'primary':
      color = '#fff';
      break;
    case 'secondary':
      color = '#51a7f9';
      break;
    default:
      color = '#fff';
      break;
  }

  return color;
};

const getBackgroundColor = (type) => {
  let backgroundColor;

  switch (type) {
    case 'primary':
      backgroundColor = '#51a7f9';
      break;
    case 'secondary':
      backgroundColor = '#fff';
      break;
    default:
      backgroundColor = '#51a7f9';
      break;
  }

  return backgroundColor;
};

const getBorderColor = (type) => {
  let borderColor;

  switch (type) {
    case 'primary':
      borderColor = '#fff';
      break;
    case 'secondary':
      borderColor = '#51a7f9';
      break;
    default:
      borderColor = '#fff';
      break;
  }

  return borderColor;
};

export const Button = styled.TouchableOpacity.attrs((props) => ({
  type: props.type,
}))`
  width: 242px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
  padding: 12px 24px;
  background-color: ${(props) => getBackgroundColor(props.type)};
  border-width: 2px;
  border-color: ${(props) => getBorderColor(props.type)};
`;

export const Text = styled.Text.attrs((props) => ({
  type: props.type,
}))`
  color: ${(props) => getTextColor(props.type)};
  font-size: 18px;
`;

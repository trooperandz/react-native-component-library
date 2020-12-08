import React, { ReactElement } from 'react';
import { MaterialIndicator } from 'react-native-indicators';

import * as S from './styles';

type Props = {
  children: ReactElement;
  isLoading: boolean;
  onPress: () => void;
  type: string;
};

export default function Button(props: Props) {
  const { children, isLoading, onPress, type } = props;

  let spinnerColor;

  switch (type) {
    case 'primary':
      spinnerColor = '#fff';
      break;
    case 'secondary':
      spinnerColor = '#51a7f9';
      break;
    default:
      break;
  }

  return (
    <S.Button onPress={onPress} type={type}>
      {isLoading ? (
        <MaterialIndicator color={spinnerColor} size={30} />
      ) : (
        <S.Text type={type}>{children}</S.Text>
      )}
    </S.Button>
  );
}

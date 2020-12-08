import React from 'react';
import { TouchableOpacity } from 'react-native';

import * as S from './styles';

interface Props {
  isSelected: boolean;
  label: string;
  onPress: () => void;
}

export default function Radio(props: Props) {
  const { isSelected, label, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <S.Container>
        <S.RadioOuter>{isSelected ? <S.RadioInner /> : null}</S.RadioOuter>
        <S.Label>{label}</S.Label>
      </S.Container>
    </TouchableOpacity>
  );
}

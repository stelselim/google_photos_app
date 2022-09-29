import {Spinner} from 'native-base';
import {ThemeComponentSizeType} from 'native-base/lib/typescript/components/types';
import React from 'react';
import {ColorValue} from 'react-native';
import {KPrimaryAppColor} from '../../themes/colors';

export const CircularLoader = ({
  color,
  size,
}: {
  color?: ColorValue;
  size?: ThemeComponentSizeType<'Spinner'>;
}) => {
  return <Spinner size={size ?? 'sm'} color={color ?? KPrimaryAppColor} />;
};

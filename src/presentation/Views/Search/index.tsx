import {Text, View, VStack} from 'native-base';
import React from 'react';
import {primaryBackgroundColor} from '../../styles/colors';

const Search = () => {
  return (
    <VStack
      bgColor={primaryBackgroundColor}
      flex={1}
      alignItems="center"
      justifyContent="flex-start">
      <Text>Search</Text>
    </VStack>
  );
};

export {Search};

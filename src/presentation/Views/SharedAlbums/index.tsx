import React from 'react';
import { Box, View, VStack } from 'native-base';

const SharedAlbums = () => {
  return (
    <View flex={1}>
      <VStack flex={1} alignItems="center" justifyContent="center">
        <Box>
          Shared Albums
        </Box>
      </VStack>
    </View>
  );
};


export { SharedAlbums };


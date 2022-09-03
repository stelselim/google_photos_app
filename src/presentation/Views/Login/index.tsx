import { Box, Heading, View, VStack } from 'native-base';
import React from 'react';
import i18n from '../../../utils/translations_utility';
import { AppLogo } from '../../components/AppLogo';
import { SignInButton } from '../../components/SignInButton';

const Login = () => {
  return (
    <View flex={1}>
      <VStack flex={1} alignItems="center" >
        <Box marginTop={"8"}>
          <AppLogo size={"48"} />
        </Box>
        <Box marginTop={"12"} alignItems="center">
          <Heading fontWeight={"semibold"} maxWidth={"64"} textAlign="left" marginBottom="4">
            {i18n.t('login_screen_continue_title')}
          </Heading>
          <SignInButton />
        </Box>
      </VStack>
    </View>
  );
};


export { Login };


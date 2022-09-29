import React, {useCallback, useRef} from 'react';
import 'react-native-gesture-handler';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {Box, Image, Pressable, View} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useAuth} from '../../../hooks/useAuth';
import Profile from '../../views/Profile';

const ProfileAvatar = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const {isSignedIn, user} = useAuth();

  if (!isSignedIn || user === null) {
    return <View />;
  }

  return (
    <Box>
      <Pressable onPress={handlePresentModalPress}>
        {user?.user.photo ? (
          <Image
            rounded={'full'}
            alt="Profile"
            size="8"
            source={{uri: user?.user.photo}}
          />
        ) : (
          <View rounded={'full'} size="8">
            <Icon name="profile" />;
          </View>
        )}
      </Pressable>

      <Profile user={user} bottomSheetModalRef={bottomSheetModalRef} />
    </Box>
  );
};
export {ProfileAvatar};

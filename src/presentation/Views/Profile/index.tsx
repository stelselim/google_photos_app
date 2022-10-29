import React from 'react';
import {Dimensions, StyleSheet, useWindowDimensions} from 'react-native';
import 'react-native-gesture-handler';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {User} from '@react-native-google-signin/google-signin';
import {Heading, View} from 'native-base';
import {ProfilePhoto} from '../../components/ProfilePhoto';
import {SignOutButton} from '../../components/SignOutButton';

interface IProfileProps {
  user: User;
  bottomSheetModalRef: React.RefObject<BottomSheetModalMethods>;
}

const Profile = ({user, bottomSheetModalRef}: IProfileProps) => {
  const {height} = useWindowDimensions();

  return (
    <>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        backgroundStyle={styles.bottomSheetBackgroundStyle}
        snapPoints={[height * 0.88]}>
        <View flex={1} height={height * 0.8} alignItems="center">
          <ProfilePhoto user={user} />

          <Heading
            fontSize="2xl"
            fontWeight="semibold"
            marginTop="2"
            marginBottom="1">
            {user.user.name}
          </Heading>
          <Heading fontSize="lg" fontWeight="normal">
            {user.user.email}
          </Heading>

          <View justifyContent="flex-end" flex={1} marginBottom="20">
            <SignOutButton />
          </View>
        </View>
      </BottomSheetModal>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  bottomSheetBackgroundStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    elevation: 25,
    shadowOpacity: 0.85,
    shadowRadius: 100,
  },
});

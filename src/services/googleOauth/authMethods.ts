import {
  GoogleSignin,
  statusCodes,
  User,
} from '@react-native-google-signin/google-signin';

const checkSignIn = async (): Promise<User | null> => {
  const signedIn = await GoogleSignin.isSignedIn();
  if (signedIn) {
    return await GoogleSignin.getCurrentUser();
  }
  return null;
};

interface ISignInTypes {
  response:
    | User
    | 'SIGN_IN_CANCELLED'
    | 'IN_PROGRESS'
    | 'PLAY_SERVICES_NOT_AVAILABLE'
    | 'OTHER';
}

const signIn = async (): Promise<ISignInTypes['response']> => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    return userInfo;
  } catch (error: any) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      return 'SIGN_IN_CANCELLED';
    } else if (error.code === statusCodes.IN_PROGRESS) {
      return 'IN_PROGRESS';
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      return 'PLAY_SERVICES_NOT_AVAILABLE';
    } else {
      return 'OTHER';
    }
  }
};

const signOut = async () => {
  await GoogleSignin.signOut();
};

export {checkSignIn, signIn, signOut};

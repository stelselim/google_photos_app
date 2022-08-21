import {GoogleSignin} from '@react-native-google-signin/google-signin';

interface tokens {
  accessToken: string;
  idToken: string;
}

export const getTokens = async (): Promise<tokens | null> => {
  try {
    const tokens = await GoogleSignin.getTokens();
    return tokens;
  } catch (error) {
    console.log(error);
    return null;
  }
};

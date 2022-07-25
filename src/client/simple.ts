import {GoogleSignin} from '@react-native-google-signin/google-signin';
import axios from 'axios';

const getPhotos = async (): Promise<String | null> => {
  try {
    const tokens = await GoogleSignin.getTokens();

    console.log(tokens?.accessToken);
    const res = await axios.get(
      'https://photoslibrary.googleapis.com/v1/albums',
      {
        headers: {
          accept: 'application/json',
          authorization: 'Bearer ' + tokens.accessToken,
        },
      },
    );

    return res.data;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};

export {};

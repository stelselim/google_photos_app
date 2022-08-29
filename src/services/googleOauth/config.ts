import {ConfigureParams} from '@react-native-google-signin/google-signin';
const scopes = [
  'https://www.googleapis.com/auth/photoslibrary.readonly',
  'https://www.googleapis.com/auth/photoslibrary.sharing',
  'https://www.googleapis.com/auth/photoslibrary.appendonly',
];

const configuration: ConfigureParams = {
  profileImageSize: 250,
  scopes,
};

export {configuration as GoogleOAuthConfiguration};

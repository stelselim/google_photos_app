import {configureGoogleSignIn} from './googleOauth/index';

const initiliazeServices = async () => {
  console.log('Log: initiliazeServices started.');
  try {
    configureGoogleSignIn();
  } catch (error) {
    console.log(error);
  }
};

export {initiliazeServices};

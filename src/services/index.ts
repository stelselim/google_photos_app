import {useAuth} from '../hooks/useAuth';
import {configureGoogleSignIn} from './googleOauth/index';

const initiliazeServices = async () => {
  configureGoogleSignIn();
};

export {initiliazeServices};

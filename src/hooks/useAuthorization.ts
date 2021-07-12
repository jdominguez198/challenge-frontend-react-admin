import { useGoogleLogin } from 'react-google-login';
import globalConfig from '../config';

export const useAuthorization = (user: any, alreadyLogged: boolean) => {
  const onSuccess = (response: any) => {
    user = response.profileObj;
  };
  const onFailure = (response: any) => console.error(response);

  const { loaded } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: globalConfig.googleOAuthClientId,
    isSignedIn: true,
    accessType: 'offline'
  });

  return alreadyLogged ? true : loaded;
};

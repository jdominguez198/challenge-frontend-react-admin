import GoogleLogin from 'react-google-login';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/user/actions';
import { useStyles } from '../../hooks/useStyles';

import CircularProgress from '@material-ui/core/CircularProgress';
import globalConfig from '../../config';

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [ isLoading, setIsLoading ] = useState(true);

  const onSuccess = (response: any) => {
    if (!response.hasOwnProperty('profileObj') || !response.hasOwnProperty('tokenObj')) {
      console.error('Auth missing data: ', response);
      return;
    }

    dispatch(setUser({
      name: response.profileObj.name,
      email: response.profileObj.email,
      image: response.profileObj.imageUrl,
      token: response.tokenObj.id_token,
      tokenExpires: response.tokenObj.expires_at
    }));
  };

  const onFailure = (response: any) => {
    dispatch(setUser({
      name: null,
      email: null,
      image: null,
      token: null,
      tokenExpires: null
    }));
    console.error('Auth Error: ', response);
  };

  const onAutoLoadFinished = () => {
    setIsLoading(false);
  };

  return (
    <div className="page page__login">
      <div className={classes.loginPage}>
        {isLoading && <CircularProgress />}
        <div style={!isLoading ? {} : { display: 'none ' }}>
          <GoogleLogin
            clientId={globalConfig.googleOAuthClientId}
            onSuccess={onSuccess}
            onFailure={onFailure}
            onAutoLoadFinished={onAutoLoadFinished}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
        </div>
      </div>
    </div>
  );
};

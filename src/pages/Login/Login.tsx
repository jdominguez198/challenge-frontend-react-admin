import GoogleLogin from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_OAUTH_ID || '';

export default function Login() {
  const onSuccess = (response: any) => console.log('LOGIN_SUCCESS: ', response);
  const onFailure = (response: any) => console.log('LOGIN_FAILED: ', response);

  return (
    <div className="page page__login">
      <GoogleLogin
        clientId={clientId}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
};

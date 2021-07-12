import { GoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_OAUTH_ID || '';

export default function Logout() {
  const onSuccess = () => console.log('LOGGED_OUT!');

  return (
    <div className="page page__logout">
      <GoogleLogout clientId={clientId} onLogoutSuccess={onSuccess} />
    </div>
  );
};

import { useDispatch } from 'react-redux';
import { GoogleLogout } from 'react-google-login';
import { resetUser } from '../../store/user/actions';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import ListItemText from '@material-ui/core/ListItemText';
import globalConfig from '../../config';

export default function LogOutMenuItem() {
  const dispatch = useDispatch();

  const onSuccess = () => {
    dispatch(resetUser());
  };

  const onFailure = () => {
    console.error('LOGOUT_ERROR!');
  }

  return (
    <GoogleLogout
      clientId={globalConfig.googleOAuthClientId}
      onLogoutSuccess={onSuccess}
      onFailure={onFailure}
      render={renderProps => (
        <ListItem button onClick={renderProps.onClick} disabled={renderProps.disabled}>
          <ListItemIcon><Icon>exit_to_app</Icon></ListItemIcon>
          <ListItemText primary="LogOut" />
        </ListItem>
      )}
    />
  )
};

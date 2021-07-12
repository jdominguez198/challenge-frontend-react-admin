import { GoogleLogout } from 'react-google-login';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import ListItemText from '@material-ui/core/ListItemText';
import globalConfig from '../../config';

interface ILogOutMenuItemProps {
  logOutUser: any;
  onClick: any;
}

export default function LogOutMenuItem(props: ILogOutMenuItemProps) {
  const onSuccess = () => {
    props.logOutUser();
  };

  const handleClick = (externalOnClick: any) => () => {
    externalOnClick();
    props.onClick();
  };

  return (
    <GoogleLogout
      clientId={globalConfig.googleOAuthClientId}
      onLogoutSuccess={onSuccess}
      render={renderProps => (
        <ListItem button onClick={handleClick(renderProps.onClick)} disabled={renderProps.disabled}>
          <ListItemIcon><Icon>exit_to_app</Icon></ListItemIcon>
          <ListItemText primary="LogOut" />
        </ListItem>
      )}
    />
  )
};

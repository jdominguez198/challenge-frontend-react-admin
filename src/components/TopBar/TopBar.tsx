import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../store/store';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from '../../hooks/useStyles';
import { setDrawerPanelOpen } from '../../store/ui/actions';
import globalConfig from '../../config';

export default function TopBar () {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { drawerPanelOpen } = useSelector((state: IAppState) => state.ui);
  const { userProfile } = useSelector((state: IAppState) => state.user);

  const handleDrawerToggle = () => {
    dispatch(setDrawerPanelOpen(!drawerPanelOpen));
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="body1" noWrap>
          {globalConfig.appTitle}
        </Typography>
        <div className={classes.grow} />
        <div className={classes.menuAvatarWrapper}>
          <Avatar
            className={classes.menuAvatarImage}
            src={userProfile.image}
            alt={userProfile.name}
          />
          <Typography variant="subtitle1">
            {userProfile.name}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  )
}

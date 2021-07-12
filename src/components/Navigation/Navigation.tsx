import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../store/store';
import { NavLink } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import { useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles } from '../../hooks/useStyles';
import { setDrawerPanelOpen } from '../../store/ui/actions';
import { resetUser } from '../../store/user/actions';
import LogOutMenuItem from '../LogOutMenuItem/LogOutMenuItem';

interface INavigationProps {
  navigationItems: any
}

export default function Navigation({ navigationItems }: INavigationProps) {
  const classes = useStyles();
  const theme = useTheme();

  const dispatch = useDispatch();
  const { drawerPanelOpen } = useSelector((state: IAppState) => state.ui);

  const handleLogOutUser = () => {
    dispatch(resetUser());
  };

  const handleDrawerClose = () => {
    dispatch(setDrawerPanelOpen(false));
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {navigationItems.map((navigationItem: any) => (
          <NavLink
            key={navigationItem.slug}
            className={classes.menuLinks}
            onClick={handleDrawerClose}
            to={`/${navigationItem.slug}`}
            exact
          >
            <ListItem button>
              <ListItemIcon><Icon>{navigationItem.icon}</Icon></ListItemIcon>
              <ListItemText primary={navigationItem.label} />
            </ListItem>
          </NavLink>
        ))}
        <LogOutMenuItem logOutUser={handleLogOutUser} onClick={handleDrawerClose} />
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={drawerPanelOpen}
          onClose={handleDrawerClose}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}

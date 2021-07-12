import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import LogOutMenuItem from '../LogOutMenuItem/LogOutMenuItem';
import { useStyles } from '../../hooks/useStyles';

export default function AdminLayout({ children }: any) {
  const classes = useStyles();
  const theme = useTheme();
  const [ mobileOpen, setMobileOpen ] = React.useState(false);
  const appTitle = 'Challenge Admin';
  const userName = 'Jesus Dominguez';
  const navigationItems = [
    { label: 'Dashboard', slug: 'dashboard', icon: 'space_dashboard' },
    { label: 'Settings', slug: 'settings', icon: 'settings' }
  ]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {navigationItems.map((navigationItem, index) => (
          <NavLink exact to={`/${navigationItem.slug}`} key={navigationItem.slug} className={classes.menuLinks}>
            <ListItem button>
              <ListItemIcon><Icon>{navigationItem.icon}</Icon></ListItemIcon>
              <ListItemText primary={navigationItem.label} />
            </ListItem>
          </NavLink>
        ))}
        <LogOutMenuItem />
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
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
            {appTitle}
          </Typography>
          <div className={classes.grow} />
          <Typography variant="subtitle1">
            {userName}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
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
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
};

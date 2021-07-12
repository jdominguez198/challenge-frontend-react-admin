import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { useStyles } from '../../hooks/useStyles';
import TopBar from '../TopBar/TopBar';
import Navigation from '../Navigation/Navigation';

const navigationItems = [
  { label: 'Dashboard', slug: 'dashboard', icon: 'space_dashboard' },
  { label: 'Settings', slug: 'settings', icon: 'settings' }
];

export default function AdminLayout({ children }: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />
      <Navigation navigationItems={navigationItems} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
};

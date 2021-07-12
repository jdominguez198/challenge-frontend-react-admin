import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { useStyles } from '../../hooks/useStyles';
import TopBar from '../TopBar/TopBar';
import Navigation from '../Navigation/Navigation';

export default function AdminLayout({ children }: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />
      <Navigation />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
};

import React from 'react'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { Typography } from '@material-ui/core';

const Header = ({ title }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit"><MenuIcon /></IconButton>
        <Typography variant="h6" color="inherit">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

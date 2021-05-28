import React from 'react';

import '../styles/NavBar.css'

import {useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import PaletteIcon from '@material-ui/icons/Palette';

import {useStyles} from '../styles/NavBarCSS';

export default function NavBar({open, setOpen}) {
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className='root'>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap> Fortnite Stats </Typography>
        </Toolbar>
      </AppBar>
      <Drawer className='drawer drawerPaper' variant="persistent" anchor="left" open={open}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button component="a" href="/">
              <ListItemIcon><HomeIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Accueil"/>
            </ListItem>

            <ListItem button component="a" href="/Cosmetique">
              <ListItemIcon><PaletteIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Cosmétique" />
            </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
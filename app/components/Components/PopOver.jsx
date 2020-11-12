import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import {  Avatar } from "@material-ui/core";
import appIcon from "./../../question.png";

import About from "./About";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function PopOver() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Avatar src={appIcon} onClick={handleClickOpen}/>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} style={{backgroundColor: "#212121"}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              
            </Typography>
            
              <About />
   
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="App version" secondary="v0.0.1 beta" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Intial release date" secondary="Thu Nov 12 2020 09:21:21" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="License" secondary="MIT" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Delopment technology" secondary="ElectronJS, ReactJS, JSON" />
          </ListItem>
         
          
          <Divider />
          
        </List>
      </Dialog>
    </div>
  );
}

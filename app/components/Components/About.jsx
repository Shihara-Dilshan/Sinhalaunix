import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';

import githubDp from "./../../developer.jpeg";
import gmailDp from "./../../gmail.png";
import sliitDp from "./../../sliit-malabe.jpg";

const emails = ['shiharadotadilshanid@gmail.com', '+94750935556'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  // eslint-disable-next-line
  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    // eslint-disable-next-line
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <Button disabled>ShiharaD @noobstack inc</Button>
      
      <List>

          <ListItem button >
            <ListItemAvatar>
               <Avatar alt="Remy Sharp" src={gmailDp} className={classes.large} />
            </ListItemAvatar>
            <ListItemText primary="shiharadotadilshanid@gmail.com" />
          </ListItem>
           <ListItem button >
            <ListItemAvatar>
               <Avatar alt="Remy Sharp" src={githubDp} className={classes.large} />
            </ListItemAvatar>
            <ListItemText primary="+94750935556" />
          </ListItem>
           <ListItem button >
            <ListItemAvatar>
               <Avatar alt="Remy Sharp" src={sliitDp} className={classes.large} />
            </ListItemAvatar>
            <ListItemText primary="SLIIT Computing 2020" />
          </ListItem>


      
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function About() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        About the Developer
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}

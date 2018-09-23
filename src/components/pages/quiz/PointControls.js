import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  controlWrapper: {
    display: 'flex',
    width: '100px',
    alignItems: 'center',
    marginRight: '10px',
  },
  button: {
    
    padding: '3px',
    margin: '0 5px',
  },
  pointValue: {
    lineHeight: '30px',
    fontSize: '18px',
    width: '24px',
    textAlign: 'center',
  },
});

const PointControl = props => {
  const { classes, value, add, subtract, disableAdd, disableSubtract } = props;
  return (
    <div className={classes.controlWrapper}>
      <IconButton disabled={disableSubtract} onClick={subtract} className={classes.button}>
        <RemoveIcon />
      </IconButton>
      <div className={classes.pointValue}>{value}</div>
      <IconButton disabled={disableAdd} onClick={add} className={classes.button}>
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default withStyles(styles)(PointControl);

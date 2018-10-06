import React from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import InstructionsContent from './InstructionsContent';

const styles = {
  paper: {
    margin: '80px 30px',
    padding: '30px',
    position: 'relative',
  },
  buttonStart : {
      margin: '30px auto',
      textAlign: 'center',
      width: '100%',
    }
};

const Instructions = ({classes}) => {
  return (
    <Paper className={classes.paper}>
      <InstructionsContent />
      <div className={classes.buttonStart}> 
        <Button component={Link} to="/quiz" variant="outlined" size="large">
          Start Quiz
        </Button>
      </div>
    </Paper>
  )
}

export default withStyles(styles)(Instructions);

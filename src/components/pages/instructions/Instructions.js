import React from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import pointControl from '../../../gif/pointControl.gif';
import pointsLeft from '../../../gif/pointsLeft.gif';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = {
  paper: {
    margin: '80px 30px',
    padding: '30px',
    position: 'relative',
    
    '& h3': {
      textAlign: 'center',
      fontWeight: 300,
      fontSize: '44px',
      margin: '15px',
    },
    '& div': {
      margin: '30px auto',
      textAlign: 'center',
    }

  },
  instructions: {
    margin: '0 auto',
    maxWidth: '960px',
    listStyle: 'none',
    counterReset: 'my-awesome-counter',
    '& li' : {
      display: 'inline-block',
      marginTop: '10px',
      counterIncrement: 'my-awesome-counter',
      width: '100%',
      '& p': {
        display: 'inline',
      },
      '& img': {
        display: 'block',
        margin: '0 auto',
      },
      '&::before': {
        content: 'counter(my-awesome-counter) ". "',
        color: 'black',
        fontWeight: 'bold',
      }
    }
  }
}

const Instructions = ({classes}) => {
  return (
    <Paper className={classes.paper}>
      <h3>Instructions</h3>
      <ol className={classes.instructions}>
        <li><p>To respond to this inventory, you will need to think back to occasions when you have been involved in any form of team activity and to make generalisations on the basis of those experiences.</p></li>
        <li><p>For each section, you are asked to distribute a total of <strong>ten points</strong> among the sentences which you think more accurately describe your behaviour.
          To distribute points use + and - buttons for a particular sentence.</p>
          <br/>
          <img src={pointControl}></img>
        </li>
        <li><p> These points may be distributed among several sentences, in extreme cases they might be distributed among all the sentences or 10 marks might be given to a single sentence. However try to avoid either extreme.</p></li>
        <li><p>Remember you <strong>MUST</strong> distribute all ten points to proceed to next section. </p>
        <br/>
          <img src={pointsLeft}></img>
         </li>
        <li><p>After you complete all 7 sections you can view you role profile on the next page.</p></li>
      </ol>
      <div className="startButton"> <Button component={Link} to="/quiz" variant="outlined" size="large">Start Quiz</Button></div>
     
      
    </Paper>
  )
}

export default withStyles(styles)(Instructions);

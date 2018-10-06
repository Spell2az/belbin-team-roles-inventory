import React from 'react'
import pointControl from '../../../gif/pointControl.gif';
import pointsLeft from '../../../gif/pointsLeft.gif';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    '& h3': {
      textAlign: 'center',
      fontWeight: 300,
      fontSize: '44px',
      margin: '15px',
    },
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
      },
    }
  }
}

const IntstructionsContent = ({classes}) => (
    <div className={classes.root}>
    <h3>Instructions</h3>
      <ol className={classes.instructions}>
        <li><p>To respond to this inventory, you will need to think back to occasions when you have been involved in any form of team activity and to make generalisations on the basis of those experiences.</p></li>
        <li><p>For each section, you are asked to distribute a total of <strong>ten points</strong> among the sentences which you think more accurately describe your behaviour.
          To distribute points use + and - buttons for a particular sentence.</p>
          <br/>
          <img src={pointControl}></img>
        </li>
        <li><p> These points may be distributed among several sentences, in extreme cases they might be distributed among all the sentences or 10 marks might be given to a single sentence. However try to avoid either extreme.</p></li>
        <li><p>Remember you <strong>MUST</strong> distribute all <strong>ten</strong> points to proceed to next section. </p>
        <br/>
          <img src={pointsLeft}></img>
        </li>
        <li><p>After you complete all 7 sections you can view you role profile on the next page.</p></li>
      </ol>
  </div>
)

export default withStyles(styles)(IntstructionsContent);


import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LinearProgress from '@material-ui/core/LinearProgress';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { teamroles } from '../home/teamroles';
import RoleDescriptionTabs from './RoleDescriptionTabs';
const styles = {
  root: {
    margin: '0 auto',
    marginTop: '100px',
    maxWidth: '960px',
    textAlign: 'center',
    '& h3' : {
      fontWeight: 300,
      fontSize: '44px',
      margin: '50px',
    } 
  },
  progressBarWrapper: {
    width: '25%',
    display: 'flex',
    margin: '0 20px',
    alignItems: 'center',
    '& div' : {
      width: '100%',
    }
  },
  expansionPanel: {
    textAlign: 'initial',
  },
  expansionPanelSummary: {
    display: 'flex',
  },
  barName: {
    flexBasis: '33.3%',
  }
}

const resultGrid = {
  'Implementer': ['g', 'a', 'h', 'd', 'b', 'c', 'e'],
  'Coordinator': ['d', 'b', 'a', 'h', 'f', 'c', 'g'],
  'Shaper': ['f', 'e', 'c', 'b', 'd', 'g', 'a'],
  'Plant': ['c', 'g', 'd', 'e', 'h', 'a', 'f'],
  'Resource Investigator': ['a', 'c', 'f', 'g', 'e', 'h', 'd'],
  'Monitor Evaluator': ['h', 'd', 'g', 'c', 'a', 'e', 'b'],
  'Teamworker': ['b', 'f', 'e', 'a', 'c', 'b', 'h'],
  'Completer-Finisher': ['e', 'h', 'b', 'f', 'g', 'd', 'c'],
};

export const getTeamrole = (roleName, teamroles) => {
  return teamroles.filter(({name})=> roleName === name)[0]
}

function getResults(results, markingGrid) {
  return Object.keys(markingGrid).reduce((acc, curr) => {
    acc.push({
      name: curr,
      score: markingGrid[curr].reduce(
        (accumulator, current, idx) => accumulator + results[idx + 1].pointsAwarded[current],
        0
      )
    })
    return acc;
  }, []).sort((a,b)=> b.score - a.score);
}

class Results extends React.Component {
  state = {
    resultTypes: null,
  };

  componentDidMount() {
    const answers = this.props.location.state;
    this.setState(prevState => ({ resultTypes: getResults(answers, resultGrid) }));
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <h3>Your Profile</h3>
        <div>
          {this.state.resultTypes &&
            this.state.resultTypes.map(({name, score}) => (
             <ExpansionPanel className={classes.expansionPanel} key={name}>
               <ExpansionPanelSummary className={classes.expansionPanelSummary} expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.barName}>{name}</Typography>
                <div className={classes.progressBarWrapper}>
                  <LinearProgress className={classes.progressBar} variant="determinate" value={(score/80)*100} />
                </div>
                <Typography>{(score/80)*100}%</Typography>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                 <RoleDescriptionTabs roleProperties={getTeamrole(name, teamroles)}/>
               </ExpansionPanelDetails>
             </ExpansionPanel>
            ))}
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Results));

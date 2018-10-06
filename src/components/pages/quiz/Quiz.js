import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import HelpIcon from '@material-ui/icons/HelpOutline';
import PointControl from './PointControls';
import { questions } from './questions';
import { Done } from '@material-ui/icons';
import Dialog from '@material-ui/core/Dialog';
import InstructionsContent from '../instructions/InstructionsContent';
import Slide from '@material-ui/core/Slide';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
const styles = theme => ({
  paper: {
    padding: '60px',
  },
  wrapper: {
    margin: '20px',
  },
  textField: {
    width: '40px',
    'margin-right': '20px',
  },
  sentenceWrapper: {
    display: 'flex',
    margin: '15px 0',
    alignItems: 'center',
    lineHeight: '40px',
  },
  stepperWrapper: {
    margin: '0 auto',
    width: '80%',
  },
  button: {
    marginTop: '10px',
    marginRight: '10px',
  },
  heading: {
    textAlign: 'center',
    letterSpacing: '2px',
    fontSize: '32px',
    fontWeight: '400',
  },
  instructionsText: {
    lineHeight: '32px',
  },
  instructionsWrapper: {
    padding: '20px',
  },
  check: {
    color: '#00e676',
    display: 'inline-block',
    marginBottom: '-3px',
  },
  instructionsButton: {
    position: 'fixed',
    bottom: '80px',
    right: '80px',
  },
  helpIcon: {
    fontSize: '40px',
    color: '#fff',
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function getSteps() {
  return Object.keys(questions).map(key => questions[key].statement);
}

function getStepContent(statementNo) {
  return questions[statementNo + 1].options;
}

class Quiz extends Component {
  state = {
    open: true,
    activeStep: 0,
    answers: {
      1: {
        pointsLeft: 10,
        pointsAwarded: {
          a: 0,
          b: 0,
          c: 0,
          d: 0,
          e: 0,
          f: 0,
          g: 0,
          h: 0,
        },
      },
      2: {
        pointsLeft: 10,
        pointsAwarded: {
          a: 0,
          b: 0,
          c: 0,
          d: 0,
          e: 0,
          f: 0,
          g: 0,
          h: 0,
        },
      },
      3: {
        pointsLeft: 10,
        pointsAwarded: {
          a: 0,
          b: 0,
          c: 0,
          d: 0,
          e: 0,
          f: 0,
          g: 0,
          h: 0,
        },
      },
      4: {
        pointsLeft: 10,
        pointsAwarded: {
          a: 0,
          b: 0,
          c: 0,
          d: 0,
          e: 0,
          f: 0,
          g: 0,
          h: 0,
        },
      },
      5: {
        pointsLeft: 10,
        pointsAwarded: {
          a: 0,
          b: 0,
          c: 0,
          d: 0,
          e: 0,
          f: 0,
          g: 0,
          h: 0,
        },
      },
      6: {
        pointsLeft: 10,
        pointsAwarded: {
          a: 0,
          b: 0,
          c: 0,
          d: 0,
          e: 0,
          f: 0,
          g: 0,
          h: 0,
        },
      },
      7: {
        pointsLeft: 10,
        pointsAwarded: {
          a: 0,
          b: 0,
          c: 0,
          d: 0,
          e: 0,
          f: 0,
          g: 0,
          h: 0,
        },
      },
    },
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
    const steps = getSteps();

    if (this.state.activeStep === steps.length - 1) {
      this.props.history.push({ pathname: '/results', state: this.state.answers });
    }
  };

  goToResults = () => {};

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  addHandler = ({ answerNo, key }) => event => {
    const currPoints = this.state.answers[answerNo].pointsLeft;

    if (currPoints > 0) {
      this.setState(prevState => ({
        ...prevState,
        answers: {
          ...prevState.answers,
          [answerNo]: {
            ...prevState.answers[answerNo],
            pointsLeft: prevState.answers[answerNo].pointsLeft - 1,
            pointsAwarded: {
              ...prevState.answers[answerNo].pointsAwarded,
              [key]: prevState.answers[answerNo].pointsAwarded[key] + 1,
            },
          },
        },
      }));
    }
  };

  subtractHandler = ({ answerNo, key }) => event => {
    const currPoints = this.state.answers[answerNo].pointsLeft;
    const currSentencePoints = this.state.answers[answerNo].pointsAwarded[key];
    if (currPoints < 10 && currSentencePoints > 0) {
      this.setState(prevState => ({
        ...prevState,
        answers: {
          ...prevState.answers,
          [answerNo]: {
            ...prevState.answers[answerNo],
            pointsLeft: prevState.answers[answerNo].pointsLeft + 1,
            pointsAwarded: {
              ...prevState.answers[answerNo].pointsAwarded,
              [key]: prevState.answers[answerNo].pointsAwarded[key] - 1,
            },
          },
        },
      }));
    }
  };

  render() {
    const steps = getSteps();
    const { activeStep, answers } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <Paper className={classes.paper}>
        
          <div className={classes.stepperWrapper}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>

                  <StepContent>
                    <div><p style={{lineHeight: '34px'}}>Points left: {answers[index + 1].pointsLeft} <span>{answers[index + 1].pointsLeft === 0 && (<Done className={classes.check}></Done>)}</span></p></div>
                    {Object.keys(getStepContent(index)).map(key => (
                      <div className={classes.sentenceWrapper} key={key}>
                        <PointControl
                          disableAdd={
                            answers[index + 1].pointsAwarded[key] === 10 ||
                            answers[index + 1].pointsLeft === 0
                          }
                          disableSubtract={answers[index + 1].pointsAwarded[key] === 0}
                          add={this.addHandler({ answerNo: index + 1, key })}
                          subtract={this.subtractHandler({ answerNo: index + 1, key })}
                          value={answers[index + 1].pointsAwarded[key]}
                        />
                        <div>{questions[index + 1].options[key]}</div>
                      </div>
                    ))}
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={this.handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={this.handleNext}
                          className={classes.button}
                          disabled={answers[index + 1].pointsLeft !== 0}
                        >
                          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </div>
          <Dialog open={this.state.open}
           TransitionComponent={Transition}
           keepMounted
           onClose={this.handleClose}
           scroll="body"
           maxWidth="lg">
          <DialogContent>
          <InstructionsContent />
          </DialogContent>
           <DialogActions>
           <Button onClick={this.handleClose} color="primary">
              CLOSE
            </Button>
           </DialogActions>
          </Dialog>
        </Paper>
        <Button onClick={this.handleClickOpen} color="primary" size="medium" variant="fab" aria-label="Instructions" className={classes.instructionsButton}>
            <HelpIcon className={classes.helpIcon} />        
          </Button>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Quiz));

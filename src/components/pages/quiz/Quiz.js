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
import cx from 'classnames';
import PointControl from './PointControls';
import { questions } from './questions';

export const ResultContext = React.createContext({
  results: null,
});

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
    width: '70%',
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
});

function getSteps() {
  return Object.keys(questions).map(key => questions[key].statement);
}

function getStepContent(statementNo) {
  return questions[statementNo + 1].options;
}

class Quiz extends Component {
  state = {
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
          <div className={cx(classes.stepperWrapper, classes.instructionsWrapper)}>
            <h3 className={classes.heading}>Instructions</h3>
            <hr />
            <div className={classes.instructionsText}>
              To respond to this inventory, you will need to think back to occasions when you have
              been involved in any form of team activity and to make generalisations on the basis of
              those experiences. For each section, you are asked to distribute a total of ten points
              among the sentences which you think more accurately describe your behaviour. These
              points may be distributed among several sentences, in extreme cases they might be
              distributed among all the sentences or 10 marks might be given to a single sentence.
              However try to avoid either extreme.
            </div>
            <hr />
          </div>

          <div className={classes.stepperWrapper}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>

                  <StepContent>
                    <div>Points left: {answers[index + 1].pointsLeft}</div>
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
                        <ResultContext.Provider value={this.state.answers} />
                      </div>
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {/* {activeStep === steps.length && (
              <Paper square elevation={0} className={classes.resetContainer}>
                <Typography>All steps completed - you&quot;re finished</Typography>
                <Button onClick={this.handleReset} className={classes.button}>
                  Reset
                </Button>
              </Paper>
            )} */}
          </div>
        </Paper>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Quiz));

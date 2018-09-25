import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({
  outlined: {
    color: '#fff',
    border: '1px solid #fff',
  },
});

const QuizLink = props => <Link to="/quiz" {...props} />;

const LandingHero = props => {
  const { classes } = props;

  return (
    <div className="hero-content">
      <h1>BELBIN SELF PERCEPTION INVENTORY</h1>
      <Button component={QuizLink} variant="outlined" size="large" className={classes.outlined}>
        GET STARTED
      </Button>
    </div>
  );
};

LandingHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingHero);

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

const resultGrid = {
  cw: ['g', 'a', 'h', 'd', 'b', 'c', 'e'],
  ch: ['d', 'b', 'a', 'h', 'f', 'c', 'g'],
  sh: ['f', 'e', 'c', 'b', 'd', 'g', 'a'],
  pl: ['c', 'g', 'd', 'e', 'h', 'a', 'f'],
  ri: ['a', 'c', 'f', 'g', 'e', 'h', 'd'],
  me: ['h', 'd', 'g', 'c', 'a', 'e', 'b'],
  tw: ['b', 'f', 'e', 'a', 'c', 'b', 'h'],
  cf: ['e', 'h', 'b', 'f', 'g', 'd', 'c'],
};

function getResults(results, markingGrid) {
  return Object.keys(markingGrid).reduce((acc, curr) => {
    acc[curr] = markingGrid[curr].reduce(
      (accumulator, current, idx) => accumulator + results[idx + 1].pointsAwarded[current],
      0
    );
    return acc;
  }, {});
}

class Results extends React.Component {
  state = {
    resultTypes: null,
  };

  componentDidMount() {
    const answers = this.props.location.state;
    this.setState({ resultTypes: getResults(answers, resultGrid) });
  }

  render() {
    return (
      <div>
        <Button onClick={() => console.log(this.props.location.state)}>click</Button>
        <div>
          {this.state.resultTypes &&
            Object.keys(this.state.resultTypes).map(key => (
              <p key={key}>
                {key} + {this.state.resultTypes[key]}
              </p>
            ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Results);

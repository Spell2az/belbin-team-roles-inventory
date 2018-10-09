import React from 'react'
import { withStyles} from '@material-ui/core/styles';


const styles = props => ({
  teamrole: {
    margin: '20px 0',
    borderBottom: '2px solid #d7d7d7',
    paddingBottom: '1.33em',
    '& h5': {
      letterSpacing: '2px',
      fontWeight: '400',
      fontSize: '22px',
      margin: '0.8em 0',
    }
  }
})
const Teamrole = props => {
  const {
    name, description, character, likes, contributions, pitfalls, classes, id
  } = props
  return (<div  id={id} className={classes.teamrole}>
    <h4>{name}</h4>
   
      <h5>Description</h5>
      <p>{description}</p>
      <h5>Character</h5>
    <p>{character}</p>
      <h5>Likes</h5>
      <p>{likes}</p>
      <h5>Contributions</h5>
      <p>{contributions}</p>
      <h5>Pitfalls</h5>
      <p>{pitfalls}</p>
    
    </div>
    
  )
}

export default withStyles(styles)(Teamrole);

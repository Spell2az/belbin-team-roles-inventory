import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import { Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Quiz from '../pages/quiz/Quiz';
import Results from '../pages/results/Results';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Scrollchor from 'react-scrollchor';
import { roleNames } from '../pages/home/teamroles';
import { createId } from '../../utils/createId';
const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  drawerHeading: {
    margin: 0,
  }
};

class Layout extends Component {
  state = {
    drawerOpen: false,
  };

  toggleDrawer = open => () => {
    this.setState({
      drawerOpen: open,
    });
  };


  render() {
    const { classes } = this.props;

    const roleList = (
      <div className={classes.list}>
      <List component="nav">
        <ListItem button><ListItemText>Home</ListItemText></ListItem>
        <ListItem button><ListItemText>Get you role</ListItemText></ListItem>
        <ListItem button><ListItemText>Instructions</ListItemText></ListItem>
        <ListItem button><ListItemText>Home</ListItemText></ListItem>
      </List>
      <hr/>
        <List component="nav">
          <ListItem ><ListItemText><h3 className={classes.drawerHeading}>ROLES</h3></ListItemText></ListItem>
          {roleNames.map(name => ( <ListItem key={name} button component={Scrollchor} animate={{offset: -20, duration: 600}} to={`#${createId(name)}`} >
            <ListItemText>{name}</ListItemText>
          </ListItem>))}
         
        </List>
       
      </div>
    );

    return (
      <div>
        <Toolbar> <Button onClick={this.toggleDrawer(true)} variant="outlined" size= "medium" > MENU </Button></Toolbar >
        <Drawer open={this.state.drawerOpen} onClose={this.toggleDrawer(false)}>
        <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {roleList}
          </div>
        </Drawer>
          <Route exact path="/" component={Home} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/results" component={Results} />
      </div>
    )
  }
}


export default withStyles(styles)(Layout);

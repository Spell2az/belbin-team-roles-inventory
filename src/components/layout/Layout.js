import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import { Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Quiz from '../pages/quiz/Quiz';
import Instructions from '../pages/instructions/Instructions';
import Results from '../pages/results/Results';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { roleNames } from '../pages/home/teamroles';
import { createId } from '../../utils/createId';
import { HashLink } from 'react-router-hash-link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';


const scrollWithOffset = (el, offset) => {
  const elementPosition = el.offsetTop - offset;
  window.scroll({
    top: elementPosition,
    left: 0,
    behavior: "smooth"
  });    
}

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  drawerHeading: {
    margin: 0,
    fontWeight: 400,
  },
  appBar: {
    background: 'linear-gradient(to right, #372a7d 0%, #6200e9 100%)',//'#6200e9',
    
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
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
        <ListItem button component={HashLink} to="/" ><ListItemText>Home</ListItemText></ListItem>
        <ListItem button component={HashLink} to="/quiz" ><ListItemText>Get your role</ListItemText></ListItem>
        <ListItem button component={HashLink} to="/instructions" ><ListItemText>Instructions</ListItemText></ListItem>
        
      </List>
      <hr/>
        <List component="nav">
          <ListItem ><ListItemText><h3 className={classes.drawerHeading}>ROLES</h3></ListItemText></ListItem>
          {roleNames.map(name => ( <ListItem key={name} button component={HashLink} scroll={el => scrollWithOffset(el, 100)} to={`/#${createId(name)}`} >
            <ListItemText>{name}</ListItemText>
          </ListItem>))}
         
        </List>
       
      </div>
    );

    return (
      <div>
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar>
            <IconButton  onClick={this.toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.grow}>
            Menu
          </Typography>
         <IconButton color="inherit">
           <AccountCircle />
         </IconButton>
          </Toolbar >
        </AppBar>
       
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
          <Route path="/instructions" component={Instructions} />
      </div>
    )
  }
}


export default withStyles(styles)(Layout);

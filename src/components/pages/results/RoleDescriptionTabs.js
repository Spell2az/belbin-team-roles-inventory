import React, { Component } from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  tabs: {
    minWidth: '100%',
  }
}

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3, minHeight: '220px' }}>
      <p>{children}</p>
    </Typography>
  );
}

class RoleDescriptionTabs extends Component {

  state = {
    value: 'description',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  getRolePropertyContent = (roleProperty) => this.props.roleProperties[roleProperty]

  render() {

    const { roleProperties, classes } = this.props;
    const { value } = this.state;
    return (
      <div>
      <Tabs className={classes.tabs}
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
           { Object.keys(roleProperties)
            .filter(roleProperty => roleProperty !== 'name')
            .map(roleProperty => ( <Tab key={roleProperty} value={roleProperty} label={roleProperty} />))}
        </Tabs>
          <br/>
          <TabContainer>
         {this.getRolePropertyContent(value)}
          </TabContainer>
          
        
        
         
         </div>
    )
  }
}


export default withStyles(styles)(RoleDescriptionTabs);
import React from 'react';
import LandingHero from './LadingHero';
import Teamrole from './Teamrole';
import {teamroles} from './teamroles';
import { withStyles } from '@material-ui/core/styles';
import { createId } from '../../../utils/createId';

const styles = props => ({
  teamroles: {
    '& div:last-child': {
      borderBottom: 'none',
    }
  }
})

const Home = ({classes}) => (
  <div className="hero-bg">
    <div className="container">
      <LandingHero />
      <main className="content-wrapper">
        <section className="text-wrapper">
        <h3 className="text-heading">Teamwork</h3>
        <p>
        In its simplest form, teamwork is an activity in which members of an organization come together to work toward a common goal or set of goals.
        </p>
       
        <p>There is no greater weapon in a company's arsenal than a great team. When firing on all cylinders, effective teams have the ability to increase efficiency by taking on more complex tasks (think "two heads are better than one"), improve communication by facilitating open discussion and cooperation among team members, maximize output by leveraging each team member's strengths, provide opportunities for personal growth, and act as a support mechanism for staff. Unsurprisingly, teamwork at the workplace has also shown to increase innovation and creativity by allowing team members to bring unique and distinct perspectives to the table.</p>
        </section>
       <div className="divider-img">
       <div> &ldquo;Great things in business are never done by one person;</div>
       <div>they're done by a team of people.&rdquo; <br/> Steve Jobs</div>
       </div>
       <section className="text-wrapper">
       <h3>Belbin Team Roles</h3>
       <p>Team Roles describe the behavior that we can recognize when we work together with others. Each team role is actually a strategy in dealing with work and with colleagues. In other words, a favorite style of cooperation that can be seen by working with others. Team roles are the perfect instrument to use these different styles to their fullest potential.</p>
       <h4>Team roles are complementary</h4>
       <p>A team must consist of different roles to achieve maximum performance. The nine roles are essentially complementary. They complement and reinforce each other, but they can also contradict and compete with each other. A team role says a lot about the style of work of a team member and comes from the personality of the individual.

In practice, we all have two or three team roles that fit us naturally and some that we really do not like.</p>
       </section>
       <hr/>
       <section className="text-wrapper">
         <h3 >The Nine Team Roles and Their Talents</h3>
         <br/>
         <div className={classes.teamroles}>{teamroles.map(role =><Teamrole  id={createId(role.name)} key={role.name} {...role}></Teamrole>)} </div>
         
         
       </section>
      </main>
    </div>
  </div>
);

export default withStyles(styles)(Home);

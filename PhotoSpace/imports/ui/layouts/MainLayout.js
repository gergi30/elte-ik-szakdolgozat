// Llamado por /imports/startup/client/routes.js
import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ImageDehaze from 'material-ui/svg-icons/image/dehaze';
import ContentClear from 'material-ui/svg-icons/content/clear';
import AppBar from 'material-ui/AppBar';

injectTapEventPlugin();


class MainLayout extends React.Component {


  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
   this.handleClose = this.handleClose.bind(this);
 }

 handleToggle() { this.setState({open: !this.state.open}); }

 handleClose() { this.setState({open: false}); }

 render() {
   return (
       <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
     <div>
        <AppBar
          title="PhotoSpace"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
         <Drawer
           docked={false}
           width={300}
           open={this.state.open}
           onRequestChange={(open) => this.setState({open})}
           >
        {/*  <ContentClear onClick={this.handleClose}/> */}
           <img src="https://s13.postimg.org/hkhubr0rb/menu_img.png"></img>
           <MenuItem a href="/" onClick={this.handleClose}>Home</MenuItem>
           <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
         </Drawer>
                {this.props.main}
       </div>
     </MuiThemeProvider>
   );
 }
}

export default createContainer(props => {
    return {
        // user: Meteor.user(),
    };
}, MainLayout);

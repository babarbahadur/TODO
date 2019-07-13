import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DeleteScreen extends Component {

    //This block of code is triggering an event on ID of navigation button and opening the drawer
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };
  
    render () {
        return (
            <View>
                <Text>On DeleteScreen</Text>
            </View>
        );
    }
}

export default DeleteScreen;
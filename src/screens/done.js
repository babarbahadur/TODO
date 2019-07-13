/*import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DoneScreen extends Component {
    render () {
        return (
            <View>
                <Text>On DoneScreen</Text>
            </View>
        );
    }
}

export default DoneScreen;
*/

import React, { Component } from "react";
import {
  Container,
  Content,
  ListItem,
  CheckBox,
  Text,
  Body
} from "native-base";

class DoneScreen extends Component {

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


  onPressHandler = () => {
    alert("Pressed!");
  };

  render() {
    return (
      <Container>
        <Content>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Daily Stand Up</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Discussion with Client</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green" />
            <Body>
              <Text>Finish list Screen</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default DoneScreen;

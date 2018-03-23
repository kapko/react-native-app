import React from 'react';
import { Image, Container, View} from 'react-native';
import { Content, Card, CardItem, Body, Right, Thumbnail, Text, Button, Left, Title, H3, H2, Icon } from 'native-base';
import { Entypo, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons"

export class SettingsPage extends React.Component {
  constructor(){
    super();
    console.log('its a Settings page');
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

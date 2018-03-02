import React from 'react';
import { View, Text, Button } from 'react-native';
import Router from './app/router/router';
 
export default class App extends React.Component {
  render() {
    return <Router />;
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
}

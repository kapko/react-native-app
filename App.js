import React from 'react';
import Router from './app/router/router';
 
import Icon from './node_modules/react-native-vector-icons/dist/FontAwesome';
// Generate required css
import iconFont from './node_modules/react-native-vector-icons/Fonts/FontAwesome.ttf';
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}`;


export default class App extends React.Component {
  state={
    isReady: false
  }
  constructor(){
    super();
    // console.log(document);
    // Inject stylesheet
    // Create stylesheet
    // const style = document.createElement('style');
    // style.type = 'text/css';
    // if (style.styleSheet) {
    //   style.styleSheet.cssText = iconFontStyles;
    // } else {
    //   style.appendChild(document.createTextNode(iconFontStyles));
    // }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({isReady:true})
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <Router />;
  }
}

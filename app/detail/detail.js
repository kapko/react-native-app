import React from 'react';
import { Image, View } from 'react-native';
import { Content, Card, CardItem, Body, Right, Thumbnail, Text, Button, Left, Title, H3, H2, Icon } from 'native-base';
import { Entypo, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons"

import Carousel from 'react-native-banner-carousel';
import {HeaderComponent} from '../components';

const images = [
    "../image/1.jpg",
    "../image/2.png",
    "../image/3.png"
];

export class DetailPage extends React.Component {
  postId = null;

  constructor(){
    super();
  }

  render() {
    this.postId = this.props.navigation.state.params.item.id;
    console.log('navigation ', this.postId);
    
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <HeaderComponent title="Detail Page" nav={this.props.navigation}/>
        <Content >
          <Text>Awesome segment</Text>
        </Content>
      </View>
    );
  }
}

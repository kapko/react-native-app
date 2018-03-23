import React from 'react';
import { Image, View, Dimensions, TouchableHighlight } from 'react-native';
import { Content, Card, CardItem, Body, Right, Thumbnail, Text, Button, Left, Title, H3, H2, Icon } from 'native-base';
import { Entypo, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons"
import styles from './styles';

import Carousel from 'react-native-banner-carousel';

const images = [
    "../image/1.jpg",
    "../image/2.png",
    "../image/3.png"
];

export class CardComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  navigate(item) {
    this.props.navigation.navigate('Detail', {item});
  }

  render() {
    return this.props.data.map((item, index) => {
      return(
        <Card key={index}>
          <Text>
          </Text>
          <Carousel loop autoplay={false}>
            <TouchableHighlight 
              onPress={() => this.navigate(item)}>
              <Image style={styles.slider} source={item.src} />
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={() => this.navigate(item)}>
              <Image style={styles.slider} source={item.src} />
            </TouchableHighlight>
          </Carousel>
          
          <CardItem style={styles.cartHeader}>
            <Left>
              <Button transparent>
                <Entypo name="price-tag" style={styles.typeSellerIcon} />
                <H3 style={styles.typeSellerText}>{item.price} {item.currency}</H3>
              </Button>
            </Left>
            <Right>
              <Button transparent>
                <FontAwesome style={styles.typeSellerIcon} name={(item.typeSeller === 'Владелец') ? 'user' : 'user-times'}/>
                <Text style={styles.typeSellerText}>{item.typeSeller}</Text>
              </Button>
            </Right>
          </CardItem>
          <Content style={{paddingHorizontal:15}}>
            <Button transparent>
              <Text style={styles.cardText}>* {item.room} к.кв.</Text>
              <Text style={styles.cardText}>* {item.squeire} m&sup2;</Text>
              <Text style={styles.cardText}>* {item.floor}/{item.floorOf} этаж</Text>
            </Button>
          </Content>
          <CardItem footer style={styles.cartFooter}>
            <Button transparent style={{paddingBottom: 0, paddingTop: 0}}>
              <MaterialCommunityIcons style={styles.cardIconFooterLeft} name="map-marker"/>
              <Text style={styles.cardText}>{item.situatited}</Text>
            </Button>
          </CardItem>
        </Card>
      );
    });
  }
}

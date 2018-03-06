import React from 'react';
import { Image, View } from 'react-native';
import { Content, Card, CardItem, Body, Right, Thumbnail, Text, Button, Left, Title, H3, H2, Icon } from 'native-base';
import { Entypo, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons"
import styles from './styles';

export class CardComponent extends React.Component {
  render() {
    return this.props.data.map((item, index) => {
      return(
        <Card key={index}>
          <CardItem cardBody>
            <Image source={item.src} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem style={styles.cartHeader}>
            <Left><H3>Цена:{item.price} {item.currency}</H3></Left>
            <Right><H3>{item.typeOfRoom}</H3></Right>
          </CardItem>
          <Content style={{paddingHorizontal:10}}>
            <Button transparent>
              <Text style={styles.cardText}>* {item.room}к.кв.</Text>
              <Text style={styles.cardText}>* {item.squeire} m&sup2;</Text>
              <Text style={styles.cardText}>* {item.floor}/{item.floorOf}этаж</Text>
            </Button>
          </Content>
          <CardItem footer style={styles.cartFooter}>
            <Button transparent>
              <MaterialCommunityIcons style={styles.cardIconFooterLeft} name="map-marker"/>
              <Text style={styles.cardText}>{item.situatited}</Text>
            </Button>
            <Button transparent>
              <FontAwesome style={styles.cardIconFooter} name={(item.typeSeller === 'Владелец') ? 'user' : 'user-times'}/>
              <Text style={styles.cardText}>{item.typeSeller}</Text>
            </Button>
          </CardItem>
        </Card>
      );
    });
  }
}

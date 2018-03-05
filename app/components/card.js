import React from 'react';
import { Image } from 'react-native';
import { Content, Card, CardItem, Body, Right, Thumbnail, Text, Button, Left, Title, H3, H2, Icon } from 'native-base';
// import Icon from '../../node_modules/react-native-vector-icons/FontAwesome'

export class CardComponent extends React.Component {
  render() {
    return this.props.data.map((item, index) => {
      return(
        <Card key={index}>
          <CardItem cardBody>
            <Image source={item.src} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left><H3>Цена:{item.price} {item.currency}</H3></Left>
            <Right><H3>{item.typeOfRoom}</H3></Right>
          </CardItem>
          {/* <Content style={{paddingHorizontal:15}}>
            <Text>
              <Icon name='home' style={{fontSize: 20, color: 'red'}}/> {item.situatited}</Text>
            <Text>
              <Icon name='home' style={{fontSize: 20, color: 'red'}}/>
              {item.squeire}</Text>
            <Text>
              <Icon name='home' style={{fontSize: 20, color: 'red'}}/>
              {item.adress}</Text>
            <Text>
              <Icon name='home' style={{fontSize: 20, color: 'red'}}/>
              {item.floor} / {item.floorOf}</Text>
          </Content> */}
          <CardItem footer>
            <Text>
              <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
              {item.typeSeller}</Text>
          </CardItem>
        </Card>
      );
    });
  }
}

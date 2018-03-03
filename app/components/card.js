import React from 'react';
import { Image } from 'react-native';
import { Content, Card, CardItem, Body, Right, Thumbnail, Text, Button, Icon, Left, Title } from 'native-base';

export class CardComponent extends React.Component {
  render() {
    return this.props.data.map((item, index) => {
      return(
        <Card key={index}>
          <CardItem>
            <Left>
              <Thumbnail source={item.src} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={item.src} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
      );
    });
  }
}

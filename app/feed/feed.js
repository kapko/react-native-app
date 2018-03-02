import React from 'react';
// import { View, Text, Button } from 'react-native';
import { 
  Container, 
  Header, 
  Title, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Left, 
  Right, 
  Icon, 
  Text, 
  CardItem, 
  Body, 
  Card 
} from 'native-base';

export class FeedPage extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card  style={{flex: 0}}>
            <CardItem>
              <Body>
                <Text>
                Card is a pure NativeBase component.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. NativeBase Cards support a wide variety of content, including images, text, list groups, links, and more. Mix and match multiple content types to create the card you need.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text>Feed Screen </Text>
      //   <Button 
      //     onPress={()=>this.props.navigation.navigate('Detail')}
      //     title="get About Page" />
      // </View>
    );
  }
}



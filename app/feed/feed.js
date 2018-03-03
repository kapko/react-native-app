import React from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, Footer, FooterTab } from 'native-base';
import {CardComponent, HeaderComponent} from '../components/index';

const dataImages = [
  {
    title: "first",
    src: require('../image/1.jpg')
  },
  {
    title: "second",
    src: require('../image/2.jpg')
  },
  {
    title: "third",
    src: require('../image/3.jpg')
  }
]

export class FeedPage extends React.Component {
  render() {
    return (
      <Container>
        <HeaderComponent title="Feed"/>
        <Content>
          <CardComponent data={dataImages}/>
        </Content>
      </Container>
    );
  }
}



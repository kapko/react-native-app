import React from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, Footer, FooterTab } from 'native-base';
import {CardComponent, HeaderComponent} from '../components/index';

const dataImages = [
  {
    title: "Продаю Квартиру",
    description: 'Срочно продаю квартиру дешево',
    price: '100 000',
    currency: '$',
    src: require('../image/1.jpg'),
    adress: '7 микркрорайон',
    floor: 6,
    floorOf: 12,
    typeOfRoom: '2х ком.',
    typeSeller: 'Владелец',
    situatited: 'Южный микрорайон',
    squeire: '120',
    room: 2,
  },
  {
    title: "Продаю Квартиру",
    description: 'Срочно продаю квартиру дешево',
    price: '100 000',
    currency: '$',
    src: require('../image/2.jpg'),
    adress: '7 микркрорайон',
    floor: 6,
    floorOf: 12,
    situatited: 'Кок Жар',
    typeOfRoom: '3х ком.',
    typeSeller: 'АН',
    squeire: '200',
    room: 3,
  },
  {
    title: "Продаю Квартиру",
    description: 'Срочно продаю квартиру дешево',
    price: '100 000',
    currency: '$',
    src: require('../image/3.jpg'),
    adress: '7 микркрорайон',
    situatited: 'Джал',
    floor: 6,
    floorOf: 12,
    typeOfRoom: '4х ком.',
    typeSeller: 'Владелец',
    squeire: '160',
    room: 2,
  },
]

export class FeedPage extends React.Component {
  render() {
    return (
      <Container>
        <HeaderComponent title="Feed" nav={this.props.navigation}/>
        <Content>
          <CardComponent data={dataImages}/>
        </Content>
      </Container>
    );
  }
}



import React from 'react';
import { Header, Button, Icon, Body, Left, Title, Right } from 'native-base';

export class HeaderComponent extends React.Component {
  render() {
    return(
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

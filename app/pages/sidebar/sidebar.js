import React, {Component} from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";

const routes = ["Feed", "Detail", "Profile"];

export class SideBarComponent extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 100 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
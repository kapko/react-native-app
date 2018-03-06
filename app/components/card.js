import React from 'react';
import { Image, View, Dimensions, TouchableOpacity } from 'react-native';
import { Content, Card, CardItem, Body, Right, Thumbnail, Text, Button, Left, Title, H3, H2, Icon } from 'native-base';
import { Entypo, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons"
import styles from './styles';

import Carousel from 'react-native-banner-carousel';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

const images = [
    "../image/1.jpg",
    "../image/2.png",
    "../image/3.png"
];


// import Carousel from 'react-native-carousel-view';
// import Swiper from 'react-native-swiper';

export class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this._OnButtonPress = this._OnButtonPress.bind(this);
  }

  _OnButtonPress(){
    console.log('clicked');
  }

  render() {
    return this.props.data.map((item, index) => {
      
      return(
          <Card key={index} button onPress={() => {
            console.log(123123123123);
          }}>
            <Carousel loop autoplay={false}>
              <Image style={styles.slider} source={item.src} />
              <Image style={styles.slider} source={item.src} />
              <Image style={styles.slider} source={item.src} />
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
        // <TouchableOpacity key={index} onPress={()=> {
        //   console.log('asdfasdff')
        // }}>
        //   <Card>
        //     <Carousel loop autoplay={false} onPress={
        //       ()=> this._OnButtonPress.bind(this)
        //     }>
        //       <Image style={styles.slider} source={item.src} />
        //       <Image style={styles.slider} source={item.src} />
        //       <Image style={styles.slider} source={item.src} />
        //     </Carousel>
        //     <CardItem style={styles.cartHeader}>
        //       <Left>
        //         <Button transparent>
        //           <Entypo name="price-tag" style={styles.typeSellerIcon} />
        //           <H3 style={styles.typeSellerText}>{item.price} {item.currency}</H3>
        //         </Button>
        //       </Left>
        //       <Right>
        //         <Button transparent>
        //           <FontAwesome style={styles.typeSellerIcon} name={(item.typeSeller === 'Владелец') ? 'user' : 'user-times'}/>
        //           <Text style={styles.typeSellerText}>{item.typeSeller}</Text>
        //         </Button>
        //       </Right>
        //     </CardItem>
        //     <Content style={{paddingHorizontal:15}}>
        //       <Button transparent>
        //         <Text style={styles.cardText}>* {item.room} к.кв.</Text>
        //         <Text style={styles.cardText}>* {item.squeire} m&sup2;</Text>
        //         <Text style={styles.cardText}>* {item.floor}/{item.floorOf} этаж</Text>
        //       </Button>
        //     </Content>
        //     <CardItem footer style={styles.cartFooter}>
        //       <Button transparent style={{paddingBottom: 0, paddingTop: 0}}>
        //         <MaterialCommunityIcons style={styles.cardIconFooterLeft} name="map-marker"/>
        //         <Text style={styles.cardText}>{item.situatited}</Text>
        //       </Button>
        //     </CardItem>
        //   </Card>
        // </TouchableOpacity>
      );
    });
  }
}

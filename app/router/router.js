import React, { Component } from "react";
import { DrawerNavigator } from 'react-navigation';
import { FeedPage } from '../feed/feed';
import { DetailPage } from '../detail/detail';
import { SideBarComponent } from '../pages/sidebar/sidebar';

export default DrawerNavigator({
  Feed: { screen: FeedPage },
  Detail: { screen: DetailPage },
  SideBar: {screen: SideBarComponent}
}, {
  contentComponent: props => <SideBarComponent {...props} />
});

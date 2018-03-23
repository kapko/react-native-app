import React, { Component } from "react";
import { DrawerNavigator } from 'react-navigation';
import { FeedPage } from '../feed/feed';
import { DetailPage } from '../detail/detail';
import { SideBarComponent } from '../pages/sidebar/sidebar';
import {SettingsPage} from '../pages/settings/settings';

export default DrawerNavigator({
  Feed: { screen: FeedPage },
  Detail: { screen: DetailPage },
  Settings: {screen: SettingsPage},
  SideBar: {screen: SideBarComponent}
}, {
  contentComponent: props => <SideBarComponent {...props} />
});

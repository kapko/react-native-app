import { StackNavigator } from 'react-navigation';
import { FeedPage } from '../feed/feed';
import { DetailPage } from '../detail/detail';

export default StackNavigator({
  Feed: { screen: FeedPage },
  Detail: { screen: DetailPage },
}, {initialRouteName: 'Feed',});

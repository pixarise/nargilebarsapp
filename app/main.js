import { StackNavigator } from 'react-navigation';
import { AppRegistry } from 'react-native';

import HomeScreen from './screens/home/main';
import BarScreen from './screens/bar/main';
import AllBarMapScreen from './screens/allbarmap/main';

const NargileBarsApp = StackNavigator({
  Home: { screen: HomeScreen },
  Bar: { screen: BarScreen },
  AllBarMap: { screen: AllBarMapScreen },
});

AppRegistry.registerComponent('nargilebarsapp', () => NargileBarsApp)
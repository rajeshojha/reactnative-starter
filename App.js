import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import componentScreen from './src/screens/componentScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component : componentScreen
  },
  {
    initialRouteName: 'Component',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);

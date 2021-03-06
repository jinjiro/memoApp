import { createAppContainer, createStackNavigator } from 'react-navigation';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import PointSyokai from './src/screens/PointSyokai';
import PointMeisai from './src/screens/PointMeisai';

const App = createStackNavigator({
  Home:        { screen: MemoListScreen },
  MemoDetail:  { screen: MemoDetailScreen },
  MemoEdit:    { screen: MemoEditScreen },
  Login:       { screen: LoginScreen },
  Signup:      { screen: SignupScreen },
  Point:       { screen: PointSyokai },
  PointMeisai: { screen: PointMeisai },
}, {
  defaultNavigationOptions: {
    headerTitle: 'Memot',
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default createAppContainer(App);

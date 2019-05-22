import { createAppContainer, createStackNavigator } from 'react-navigation';

import MemoListScreen from './src/screens/MemoListScreen';

const App = createStackNavigator({
  Home: { screen: MemoListScreen },
});

export default createAppContainer(App);

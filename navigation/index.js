import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import Welcome from '../screens/welcome';
import Mainpage from '../screens/mainpage';
import Infopage from '../screens/infopage';
import Test from '../screens/test.js'
const screens = createStackNavigator({
  Welcome,
  Mainpage,
  Infopage,
  // Test
}, {
  defaultNavigationOptions: {
    header:null,
}
});
export default createAppContainer(screens);
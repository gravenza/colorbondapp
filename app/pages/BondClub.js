import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  Button,
  BackHandler,
  ToastAndroid,
  AsyncStorage
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import BondHome from '../component/BondHome';

const RootStack = createStackNavigator(
  {
    BondHome      : BondHome
  },
  {
    navigationOptions:{
      headerStyle : {
        display:'none'
      }
    }
  },
  {
    initialRouteName: 'BondHome',
  }
);


export default class Main extends Component {

  render() {
    return <RootStack />;
  }
}

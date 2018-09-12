import React, {Component} from 'react';
import {Platform, Text, View, Image, Button,
  BackHandler,
  ToastAndroid,
  AsyncStorage,
  TouchableHighlight} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import FrCategory from '../FrCategory';

export default class Category extends React.Component {
  componentDidMount() {
    //BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    //BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    //this.goBack(); // works best when the goBack is async
    //return true;
  }

  render() {
    _onPress = () => {
    // User finished the introduction. Show "real" app
    this.props.navigation.navigate('BondLogin');
    };
    return <FrCategory press={_onPress} />
  }
}  

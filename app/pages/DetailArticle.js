import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  AppRegistry,
  ActivityIndicator,
  AsyncStorage} from 'react-native';
  import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
  import DrawerHeader from '../component/DrawerHeader';
  import TabNavBottom from '../component/TabNavBottom';

export default class DetailArticle extends React.Component{

  render(){
    const { navigation } = this.props;
    const itemId = navigation.getParam('article_id', 'NO-ID');

    return <Text>itemId: {JSON.stringify(itemId)}</Text>
  }
}

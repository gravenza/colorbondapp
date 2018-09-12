import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  Button,
  BackHandler,
  ToastAndroid,
  AsyncStorage,
  StyleSheet
} from 'react-native';
import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import BondHome from '../component/BondHome';
import BondAccount from './BondAccount';
import BondEvent from './BondEvent';
import BondMerchant from './BondMerchant';
import BondVariant from './BondVariant';
import BondScope from './BondScope';
import BondFaq from './BondFaq';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';
import BondRewards from './BondRewards';
import BondSubmit from './BondSubmit';
import BondNotification from './BondNotification';
import BondIdeas from './BondIdeas';
import Category from './Category';
import LoginBond from '../component/LoginBond';

//createDrawerNavigator

const MyApp = createStackNavigator({
  Home: {
    screen: createDrawerNavigator({
      BondClub: BondHome,
      MyAccount: {
        screen: BondAccount,
      },
      Events: {
        screen: BondEvent,
      },
      Merchant: {
        screen: BondMerchant,
      },
      Variant: {
        screen: BondVariant,
      },
      BlueScope: {
        screen: BondScope,
      },
      Faq: {
        screen: BondFaq,
      },
      Reward : BondRewards,
      Submit : BondSubmit,
      Notif : BondNotification,
      Ideas : BondIdeas,
    },
    {
      headerMode: 'screen'
    })
  },
  EditProfile : EditProfile,
  ChangePassword : ChangePassword,
  AllCategory  : Category,
  BondLogin    : LoginBond,
},
{
  navigationOptions: {
    headerStyle: {
      display: 'none',
    },
  }
});


export default class BondClub extends React.Component {

  componentDidMount() {
    // do stuff while splash screen is shown
    //SplashScreen.hide();
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('email');
    if(value === null){
      this.props.navigation.navigate('CatPage');
    }
  }

  render() {
    return (
      <MyApp />
    );
  }

}

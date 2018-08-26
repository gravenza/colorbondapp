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

const MyApp = createDrawerNavigator({
  Home: BondHome,
  Reward : BondRewards,
  Submit : BondSubmit,
  Notif : BondNotification,
  Ideas : BondIdeas,  
  MyAccount: {
    screen: createStackNavigator(
    {
      HomeAccount : {
        screen : BondAccount,
        navigationOptions: () => ({
          headerMode: 'none',
          headerStyle:{
            display:'none'
          },
          headerBackTitle: null
        }),
      },
      EditProfile: EditProfile,
      ChangePassword: ChangePassword,
    },
    {
      initialRouteName: 'HomeAccount'
    }
  ),
    navigationOptions : () => ({
      drawerLabel: 'My Account',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../res/button_05.png')}
          style={[{width:24,height:24}, {tintColor: tintColor}]}
        />
      ),
    })

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
  }
},{
  headerMode: 'screen'
});


export default class BondClub extends React.Component {

  render() {
    return (
      <MyApp />
    );
  }

}

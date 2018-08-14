import React, {Component} from 'react';
import {Platform, Text, View, Image, Button,
  BackHandler,
  ToastAndroid,
  TouchableHighlight} from 'react-native';
import {styles} from './assets/style';
import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator } from 'react-navigation';
import FragmentIntroApp from './FragmentIntroApp';
import FrCategory from './FrCategory';
import LoginBond from './component/LoginBond';


class Intro extends React.Component{
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }
  render(){
    const {navigate} = this.props.navigation;
    setTimeout(() => {
      navigate('SplasherPage');
    }, 2000);
    return (
      <View style={styles.container}>
        <View style={styles.backgroundImage}>
          <Image source={require('./res/bg_universal.png')} />
        </View>
        <View>
          <Image source={require('./res/color_bond.png')} style={styles.introwelcome} />
        </View>
      </View>
    );
  }
}

class IntroApp extends React.Component{
  render(){
    _onDone = () => {
    // User finished the introduction. Show "real" app
    this.props.navigation.navigate('CatPage');
    };

    return (
      <FragmentIntroApp screen={_onDone} />
    );
  }
}

class Category extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    //this.goBack(); // works best when the goBack is async
    return true;
  }

  render() {
    _onPress = () => {
    // User finished the introduction. Show "real" app
    this.props.navigation.navigate('BondLogin');
    };
    return <FrCategory press={_onPress} />
  }
}

const RootStack = createStackNavigator(
  {
    IntroPage     : Intro,
    SplasherPage  : IntroApp,
    CatPage       : Category,
    BondLogin     : LoginBond,
  },
  {
    navigationOptions:{
      headerStyle : {
        display:'none'
      }
    }
  },
  {
    initialRouteName: 'IntroPage',
  }
);


export default class Main extends Component {

  render() {
    return <RootStack />;
  }
}

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
  AsyncStorage} from 'react-native';
  import { createStackNavigator, createDrawerNavigator, withNavigation } from 'react-navigation';
  import BondEvent from './BondEvent';
  import BondProgram from './BondProgram';
  import BannerWowcard from './BannerWowcard';
  import BondPoint from './BondPoint';
  import BondProject from './BondProject';
  import TabNavBottom from './TabNavBottom';

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Image
          source={require('../res/new_bondclub.png')}
          style={{ width: 180, height: 40 }}
        />
      </View>
    );
  }
}
export default class BondHome extends Component {


  static navigationOptions = {

    headerTitle: 'colorbond Club',
    headerStyle : {
      backgroundColor: '#000',
    },
    headerLeft: (
      <TouchableOpacity onPress={() => {alert('Test')}}>
        <Image
          source={require('../res/navicon.png')}
          style={{ width: 30, height: 30, marginLeft:20 }}
        />
      </TouchableOpacity>
    ),
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../res/button_05.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),

  }

  _pressrwd = () => { this.props.navigation.navigate('Reward') };
  _presssbt = () => { this.props.navigation.navigate('Submit') };
  _pressntf = () => { this.props.navigation.navigate('Notif') };
  _pressids = () => { this.props.navigation.navigate('Ideas') };



  render() {

    return (
      <View style={{flex:1}}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerLeft}  onPress={() => {this.props.navigation.toggleDrawer()}}>
            <Image source={require('../res/navicon.png')} />
          </TouchableOpacity>
          <View style={styles.headerMiddle}>
            <Image style={styles.imgLogo} source={require('../res/color_bond.png')} />
          </View>
        </View>
        <ScrollView>
          <BondEvent />
          <BondProgram />
          <BondPoint />
          <BondProject />
          <BannerWowcard />
        </ScrollView>
        <TabNavBottom
        pressrwd={this._pressrwd}
        presssbt={this._presssbt}
        pressntf={this._pressntf}
        pressids={this._pressids}
        />

      </View>
    )
  }
}

//return <RootStack />;
const styles = StyleSheet.create({

  header:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor:'#333',
    width:'100%',
    paddingLeft:20,
    paddingRight:20,
    height:50,
    position:'absolute',
    top:0,
    left:0,
    zIndex:3
  },
  headerLeft:{
    width:40,
    height:50,
    justifyContent:'center'
  },
  headerMiddle:{
    width:280,
    height:50,
    justifyContent:'center',
    alignItems:'center',
  },
  imgLogo:{
    width:150,
    height:40,
  },
  icon: {
    width: 24,
    height: 24,
  },
})

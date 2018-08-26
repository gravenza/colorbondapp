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
  import { withNavigation } from 'react-navigation';

export default class TabNavBottom extends React.Component{

  render(){
    return(
      <View style={styles.navContainer}>
        <View style={styles.divReward}>
          <TouchableOpacity style={styles.btn} onPress={this.props.pressrwd}>
            <Image style={styles.icon} source={require('../res/button_03.png')} />
            <Text style={styles.textIcon}>Reward</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divReward}>
          <TouchableOpacity style={styles.btn} onPress={this.props.presssbt}>
            <Image style={styles.icon} source={require('../res/button_04.png')} />
            <Text style={styles.textIcon}>Submit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divReward}>
          <TouchableOpacity style={styles.btn} onPress={this.props.pressntf}>
            <Image style={styles.icon} source={require('../res/button_05.png')} />
            <Text style={styles.textIcon}>Notification</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divReward}>
          <TouchableOpacity style={styles.btn} onPress={this.props.pressids}>
            <Image style={styles.icon} source={require('../res/button_06.png')} />
            <Text style={styles.textIcon}>Ideas</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  navContainer : {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#333',
    position:'absolute',
    bottom:0,
    left:0
  },
  btn:{
    alignItems:'center'
  },
  divReward:{
    alignItems:'center',
    justifyContent:'center',
    width:'25%',
    height:50,
  },
  icon:{
    width:20,
    height:20,
    resizeMode:'center'
  },
  textIcon:{
    fontSize:12,
    color:'white',
    fontWeight:'bold'
  }
})

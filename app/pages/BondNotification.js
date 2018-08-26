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
  import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

export default class BondNotification extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Merchant Promo',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../res/button_05.png')}
        style={[{width:24,height:24}, {tintColor: tintColor}]}
      />
    ),
  }

  render() {
    return (
      <View>
        <Text>Bond Notif Page</Text>
      </View>
    )

  }
}

// <View style={styles.header}>
//   <TouchableOpacity style={styles.headerLeft}  onPress={this.props.nav}>
//     <Image source={require('../res/navicon.png')} />
//   </TouchableOpacity>
//   <View style={styles.headerMiddle}>
//     <Text style={{color:'#fff',fontWeight:'bold'}}>MY ACCOUNT</Text>
//   </View>
// </View>

//return <RootStack />;
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  bgUniversal:{
    position:'absolute',
    left:0,
    top:0,
  },
  header:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor:'transparent',
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
  sectionColumn:{
    paddingLeft:20,
    paddingRight:20,
    height:200
  },
  wrapperProfile:{
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
  },
  imgProfile:{
    width:100,
    height:100,
    marginBottom:20,
    borderColor:'#666',
    borderWidth:3,
    backgroundColor:'#333',
    borderRadius:100
  },
  listAccount:{
    alignItems:'flex-start',
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    paddingBottom:10,
    marginBottom:10,
    width:'100%'
  },
  titleAccount:{
    color:'#fff',
    alignSelf:'flex-start'
  }
})

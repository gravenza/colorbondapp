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
    ActivityIndicator,
    AsyncStorage} from 'react-native';
    import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

  export default class DrawerHeader extends React.Component {

    constructor(props){
      super(props);
    }

    render() {

      return (

          <View style={[styles.header, {backgroundColor:this.props.bgcolor }]}>
            <TouchableOpacity style={styles.headerLeft}  onPress={this.props.btnpress}>
              <Image source={require('../res/navicon.png')} />
            </TouchableOpacity>
            <View style={styles.headerMiddle}>
              <Text style={{color:'#fff',fontWeight:'bold'}}>{this.props.title}</Text>
            </View>
          </View>
      )

    }
  }

  //return <RootStack />;
  const styles = StyleSheet.create({
    header:{
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center',
      backgroundColor:'transparent',
      width:'100%',
      paddingLeft:20,
      paddingRight:20,
      height:50,
      position:'relative',
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
    }

  })

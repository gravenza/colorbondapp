import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage} from 'react-native';
  import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

export default class ChangePassword extends React.Component {


  static navigationOptions = {
    title : 'Change Password',
    headerTransparent : true,
    headerStyle:{
      backgroundColor:'transparent',
      textAlign:'center'
    },
    headerTitleStyle: { color: '#fff', textAlign:'center', fontSize:14, width:250 }
  }

  render() {

    return (
      <View style={styles.container}>

        <View style={styles.bgUniversal}>
          <Image style={{width:480}} source={require('../res/bg_universal.png')} />
        </View>

        <View style={styles.formgroup}>
          <Text style={styles.label}>Old Password</Text>
          <TextInput style={styles.formControl} />
        </View>

        <View style={styles.formgroup}>
          <Text style={styles.label}>New Password</Text>
          <TextInput style={styles.formControl} />
        </View>

        <View style={styles.formgroup}>
          <Text style={styles.label}>Re Type</Text>
          <TextInput style={styles.formControl} />
        </View>

        <View style={styles.formgroup}>
          <Text style={styles.label} />
          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={{color:'#fff'}}>Change Password</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formgroup}>
          <Text style={styles.label} />
          <TouchableOpacity>
            <Text style={{color:'#fff',alignSelf:'stretch'}}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

//return <RootStack />;
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'flex-start'
  },
  bgUniversal:{
    position:'absolute',
    left:0,
    top:0,
  },
  formgroup:{
    flexDirection:'row',
    paddingLeft:20,
    paddingRight:20,
    marginBottom:15
  },
  label:{
    alignSelf:'flex-start',
    color:'#fff',
    width:'30%',
    marginTop:5,
    fontWeight:'bold'
  },
  btnSubmit:{
    backgroundColor:'red',
    borderWidth:1,
    borderColor:'#333',
    padding:10,
    paddingTop:5,
    paddingBottom:5,
    fontSize:14,
    borderRadius:5,
    alignItems:'flex-start'
  },
  formControl:{
    width:'65%',
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#333',
    padding:10,
    paddingTop:0,
    paddingBottom:0,
    fontSize:14,
    borderRadius:5
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

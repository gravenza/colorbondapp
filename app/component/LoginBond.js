import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';
//import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator } from 'react-navigation';


export default class LoginBond extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      type: 0
    }
  }

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    this._loadInitialState().done();
    //SplashScreen.hide();
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('email');
    if(value !== null){
      this.props.navigation.navigate('BondClub');
    }
  }

  render(){
    return (
      <KeyboardAvoidingView style={styles.wrapper} enabled>
      <View style={styles.container}>
        <View style={styles.backgroundImage}>
          <Image source={require('../res/bg_universal.png')}  />
        </View>
        <View style={{width: '100%', alignItems:'center'}}>
          <Text style={styles.title}>SIGN IN</Text>
          <Image style={styles.logoBond} source={require('../res/bondclub_login.png')} />
        </View>
        <View style={{width: '100%',height:100, paddingLeft:40,paddingRight:40}} >

        </View>
        <View style={{width: '100%', paddingLeft:40,paddingRight:40}} >
          <TextInput style={styles.inputtext} placeholder='example@domain.com' onChangeText={(email) => this.setState({email})} underlineColorAndroid='transparent' />
        </View>
        <View style={{width: '100%', paddingLeft:40,paddingRight:40}} >
          <TextInput style={styles.inputtext} placeholder='Password' onChangeText={(password) => this.setState({password})} underlineColorAndroid='transparent' secureTextEntry={true} />
        </View>

        <View style={{width: '100%', paddingLeft:40,paddingRight:40,alignItems:'center'}} >
          <TouchableOpacity style={styles.btnLogin} onPress={this.login} >
            <Text style={{color:'#fff'}}>Login</Text>
          </TouchableOpacity>
        </View>

      </View>
      </KeyboardAvoidingView>
    );
  }

  login = () => {
    //alert(this.state.email);
    fetch('http://apps.colorbond.id/api/member/login', {
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        'Authorization': 'key=AIzaSyCmoufZxGw0LMHVKWVYroYLbHr5x-EPbCI'
      },
      body:JSON.stringify({
        email:this.state.email,
        password: this.state.password,
        type: this.state.type
      })
    })

    .then((response) => response.json())
    .then((res) => {

      if (res.success === true){
        AsyncStorage.setItem('id',res.id);
        AsyncStorage.setItem('name',res.name);
        AsyncStorage.setItem('email',res.email);
        AsyncStorage.setItem('phone',res.phone);
        AsyncStorage.setItem('company',res.company);
        AsyncStorage.setItem('date_of_birth',res.date_of_birth);
        AsyncStorage.setItem('gender',res.gender);
        AsyncStorage.setItem('job_title',res.job_title);
        AsyncStorage.setItem('join_date',res.join_date);
        this.props.navigation.navigate('BondClub');
      }

      else {
        alert(res.message);
      }

    })
    .done();
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#000'
  },
  inputtext:{
    padding:5,
    paddingLeft:20,
    paddingRight:20,
    alignSelf:'stretch',
    marginBottom:20,
    backgroundColor:'#fff'
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  logoBond: {
    width: 100,
    resizeMode:'contain',
  },
  title:{
    fontWeight:'bold',
    color:'#ffffff',
    fontSize:16,
  },
  btnLogin:{
    backgroundColor:'#ea2629',
    padding:10,
    paddingLeft:40,
    paddingRight:40,
    borderRadius:20
  }
})

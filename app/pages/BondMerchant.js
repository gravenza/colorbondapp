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
  import TabNavBottom from '../component/TabNavBottom';

export default class BondMerchant extends React.Component {

  constructor(props){
    super(props);
    this.state = {isLoading: true}
  }

  static navigationOptions = {
    drawerLabel: 'Merchant Promo',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../res/button_05.png')}
        style={[{width:24,height:24}, {tintColor: tintColor}]}
      />
    ),
  }

  componentDidMount(){
    return fetch('http://apps.colorbond.id/api/events/view')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.events,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  _pressrwd = () => { this.props.navigation.navigate('Reward') };
  _presssbt = () => { this.props.navigation.navigate('Submit') };
  _pressntf = () => { this.props.navigation.navigate('Notif') };
  _pressids = () => { this.props.navigation.navigate('Ideas') };

  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={styles.container}>

        <View style={styles.bgUniversal}>
          <Image style={{width:480}} source={require('../res/bg_universal.png')} />
        </View>

        <View style={styles.header}>
          <TouchableOpacity style={styles.headerLeft}  onPress={ () => {this.props.navigation.toggleDrawer()}}>
            <Image source={require('../res/navicon.png')} />
          </TouchableOpacity>
          <View style={styles.headerMiddle}>
            <Text style={{color:'#fff',fontWeight:'bold'}}>MERCHANT PROMO</Text>
          </View>
        </View>

          <View style={styles.merchantBox}>
            <Image style={{width:80,height:80,marginBottom:15}} source={require('../res/wawcard.png')} />
            <Text>
            {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
            </Text>
          </View>

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
  container: {
    flex:1,
  },
  bgUniversal:{
    position:'absolute',
    left:0,
    top:0,
  },
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
  },
  merchantBox:{
    backgroundColor:'#fff',
    borderRadius:10,
    padding:20,
    margin:30,
    marginLeft:20,
    marginRight:20,
    alignItems:'center'
  },
  imgLogo:{
    width:150,
    height:40,
  }

})

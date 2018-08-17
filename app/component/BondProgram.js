import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class BondProgram extends Component {

  constructor(props){
    super(props);
    this.state = {isLoading: true}
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

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(


      <View style={styles.containerProgram}>
        <View style={styles.bgProgram}>
          <Image style={{width: '100%', height: 200}} source={require('../res/bisnistrip.png')} />
        </View>

        <TouchableOpacity style={styles.programLeft}>
          <Text style={{fontSize:18,color:'#fff'}}>Testing</Text>
            <Text style={{color:'#fff',fontSize:22,fontWeight:'bold',}}>
            PROGRAM
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.programRight}>
          <Text style={{fontSize:16,color:'#fff',fontWeight:'bold'}}>{bT.toUpperCase()}</Text>
        </TouchableOpacity>

      </View>

    );
  }
}

var bT = 'Business Trip';

//return <RootStack />;
const styles = StyleSheet.create({
  containerProgram: {
    flex: 1,
    flexDirection:'row'
  },
  bgProgram:{
    position:'relative',
    left:0,
    top:0,
    width:'100%'
  },
  programLeft: {
    position:'absolute',
    top:0,
    bottom:0,
    zIndex:2,
    left:0,
    padding:20,
    color:'#fff',
    backgroundColor:'rgba(238,64,54,0.7)',
    justifyContent: 'center',
    alignItems:'center',
    width:150
  },
  programRight: {
    position:'absolute',
    bottom:0,
    zIndex:2,
    right:0,
    padding:20,
    color:'#fff',
    justifyContent: 'center',
    alignItems:'center',
    width:170
  },
  btnModal:{
    backgroundColor:'#ee4036',
    padding:5,
    paddingLeft:15,
    paddingRight:15,
    borderRadius:20,
    color:'#fff'
  }
});

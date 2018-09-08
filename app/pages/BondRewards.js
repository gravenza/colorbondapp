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
  import DrawerHeader from '../component/DrawerHeader';
  import TabNavBottom from '../component/TabNavBottom';
  import BondRewardfr from '../component/BondRewardfr';

export default class BondRewards extends React.Component {

  constructor(props){
    super(props);
    this.state = {isLoading: true}
  }

  componentDidMount(){
    return fetch('http://apps.colorbond.id/api/reward')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
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
  _btnPress = () => { this.props.navigation.toggleDrawer() }

  render() {

    return (
      <View style={styles.container}>

        <DrawerHeader bgcolor={'#333'} btnpress={this._btnPress} title={"REWARD"} />

          <View style={styles.merchantBox}>
            <Image style={{width:'100%',height:250}} source={{uri:'http://apps.colorbond.id/access/assets/file/reward_slider/1.jpg'}} />
          </View>

          <BondRewardfr />

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

})

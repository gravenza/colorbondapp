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
  import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class BondProject extends Component {

  constructor(props){
    super(props);
    this.state = {isLoading: true}
  }

  componentDidMount(){
    return fetch('http://apps.colorbond.id/api/projects?id=123&type=0')
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

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(


      <View style={{flex:1, padding:20}}>
        <Text style={{fontSize:16, fontWeight:'bold',marginBottom:20}}>Latest Project :</Text>
        {this.state.dataSource.map((item) =>
          <View style={styles.rowProject} key={item.id_project}>
            <View style={styles.listItem}>
              <Image style={{width:30, height:30}} source={require('../res/button_05_02.png')} />
              <Text style={styles.textList}>{item.project_name}</Text>
            </View>
          </View>
        )}
      </View>

    );
  }
}

//return <RootStack />;
const styles = StyleSheet.create({
  rowProject: {
    flex: 1,
    flexDirection:'column',
    marginBottom:10
  },
  listItem:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start'
  },
  textList: {
    fontSize:16,
    color:'#333',
    alignSelf:'center'
  },
  btnDetails: {
    position:'absolute',
    bottom:0,
    zIndex:2,
    right:0,
    padding:20,
    color:'#fff'
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

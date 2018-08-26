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

export default class BondWowcards extends Component {

  constructor(props){
    super(props);
    this.state = {isLoading: true}
  }

  componentDidMount(){
    return fetch('http://apps.colorbond.id/api/banner?id=2')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson
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


      <View>
        {this.state.dataSource.map((item) =>
          <View key={item.bannerwaw_id}>
            <View style={styles.bgEvent}>
              <Image style={{width: '100%', height: 250}} source={{uri: item.file_location+'/'+item.image}} />
            </View>
          </View>
        )}
      </View>

    );
  }
}

//return <RootStack />;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column'
  },
  bgEvent:{
    position:'relative',
    left:0,
    top:0,
    width:'100%'
  },
  textwrap: {
    position:'absolute',
    bottom:0,
    zIndex:2,
    left:0,
    padding:20,
    color:'#fff'
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

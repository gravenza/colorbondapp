import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
  StyleSheet} from 'react-native';
  import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class BondPoint extends Component {

  constructor(props){
    super(props);
    
    this.state = {isLoading: true};

    AsyncStorage.getItem('name', (error, result) => {
        if (result) {
            this.setState({
                name: result
            });
        }
    });
  }

  // componentDidMount(){
  //
  //   return fetch('http://apps.colorbond.id/api/projects/point?id=129')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //
  //       this.setState({
  //         isLoading: false,
  //         dataSource: responseJson
  //       }, function(){
  //
  //       });
  //
  //     })
  //     .catch((error) =>{
  //       console.error(error);
  //     });
  // }

  componentWillMount(){
    this.queryData();
  }

  queryData = async () => {

    AsyncStorage.getItem('id', (error, result) => {
        if (result) {
          const ids = result

          fetch('http://apps.colorbond.id/api/projects/point?id='+ ids)
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

          console.log(this.state.id)
        }
    });

    //const link = () => { return (this.state.ids)};
    //const url = link+ this.state.id;
    //const response = await fetch(link);
    //const dataJson = await response.json();
    //this.setState({isLoading: false, dataSource: dataJson});
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

      <View style={{backgroundColor:'#ddd'}}>
        {this.state.dataSource.map((item) =>
          <View style={styles.row} key={item.id_users}>

            <View style={styles.pointLeft}>
              <Text>Hi {this.state.name}</Text>
              <Text>{'Welcome, let\'s increase your point'}</Text>
            </View>

            <View style={styles.pointRight}>
              <Image style={styles.imgPoint} source={require('../res/button_02.png')} />
              <Text style={{flex:1,flexDirection:'column'}}>
                <Text style={{width:'100%'}}>My Point {"\n"}</Text>
                <Text style={{width:'100%',fontWeight:'bold'}}>{item.poin}</Text>
              </Text>
            </View>

          </View>
        )}
      </View>

    );
  }
}

//return <RootStack />;
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection:'row',
    padding:20
  },
  pointLeft: {
    borderRightWidth:1,
    borderRightColor:'#666',
    width:'65%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  pointRight:{
    flex: 1,
    flexDirection:'row',
    width:'35%',
    padding:5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgPoint: {
    width:50,
    height:50
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

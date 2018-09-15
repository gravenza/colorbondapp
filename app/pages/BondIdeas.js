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
  AppRegistry,
  ActivityIndicator,
  AsyncStorage} from 'react-native';
  import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
  import DrawerHeader from '../component/DrawerHeader';
  import TabNavBottom from '../component/TabNavBottom';
  import DetailArticle from './DetailArticle';
  import Carousel from 'react-native-carousel-view';


export default class BondIdeas extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount(){
    return fetch('http://apps.colorbond.id/api/inspirasi?result=5')
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

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, justifyContent:'center', alignItems:'center', padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={styles.container}>

        <DrawerHeader btnpress={this._btnPress} title={"INSPIRATION"} />
          <View style={[styles.mainSlider,{marginTop:-50}]}>
          <Carousel
            width={null}
            height={240}
            delay={6000}
            indicatorAtBottom={true}
            indicatorSize={60}
            indicatorText="•"
            inactiveIndicatorText= "•"
            indicatorColor="red"
            >

            {this.state.dataSource.map((item) =>
              <View key={item.id_inspirasi}>
                <Image style={{width:420,height:240,}}  source={{ uri:item.image_slider}} />
                <Text style={styles.titleSlide}>{item.title}</Text>
              </View>
            )}

          </Carousel>
          </View>

          <View style={styles.article}>
            {this.state.dataSource.map((item) =>
              <View key={item.id_inspirasi}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('DetailArticle',{article_id:item.id_inspirasi }) }} style={{width:'100%',height:120}}>
                <Image style={{width:420,height:120,}} resizeMode="cover"  source={{ uri:item.image_slider}} />
                <Text style={styles.titleArticle}>{item.title}</Text>
                </TouchableOpacity>
              </View>
            )}
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
  mainSlider: {
    position: 'relative',
    justifyContent:'center',
    alignItems:'center'
  },
  titleSlide:{
    marginTop:-90,
    zIndex:3,
    color:'#fff',
    fontWeight:'bold',
    fontSize:18,
    alignSelf:'center'
  },
  mainArticle: {
    position: 'relative',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  },
  titleArticle:{
    marginTop:-80,
    zIndex:3,
    color:'#fff',
    fontWeight:'bold',
    fontSize:18,
    alignSelf:'center'
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
});

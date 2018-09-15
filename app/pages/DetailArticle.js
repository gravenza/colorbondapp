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
  import Carousel from 'react-native-carousel-view';
  import ParallaxScrollView from 'react-native-parallax-scroll-view';


export default class DetailArticle extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }


  }

  componentDidMount(){

    const { navigation } = this.props;
    const itemId = navigation.getParam('article_id', 'NO-ID');

    return fetch('http://apps.colorbond.id/api/inspirasi?id='+ itemId)
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

        {this.state.dataSource.map((item)=>
        <ParallaxScrollView key={item.id_inspirasi}
          backgroundColor="gray"
          contentBackgroundColor="white"
          parallaxHeaderHeight={300}
          renderForeground={() => (
           <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{width:420,height:300,}}  source={{ uri:item.image_top }} />
            </View>
          )}>
          <View style={{paddingHorizontal:20,paddingVertical:10}}>
            <Text style={{color:'red'}}>{'Inspiration'}</Text>
            <Text style={styles.titleArticle}>{item.title}</Text>
            <Text style={{marginBottom:10}}>{item.author}</Text>
            <Text style={{marginBottom:10}}>{item.date_submit}</Text>
            <Text style={{marginBottom:10}}>{item.content}</Text>
            <Image style={{width:'100%',height:200,marginBottom:50}} source={{ uri:item.image_bottom }} />
          </View>
        </ParallaxScrollView>

        )}



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
    color:'#333',
    fontWeight:'bold',
    fontSize:22,
    paddingTop:5,
    paddingBottom:15,
    marginBottom:10,
    borderBottomWidth:1,
    borderBottomColor:'#333'
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

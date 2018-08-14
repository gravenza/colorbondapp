import React, {Component} from 'react';
import {Platform, Text, View, Image, Button, StyleSheet,
TouchableHighlight} from 'react-native';

export default class FrCategory extends React.Component {

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.backgroundCategory}>
          <Image source={require('./res/new_menu_bg.png')} style={styles.bgImg} />
        </View>
          <View style={styles.wrapper}>
            <TouchableHighlight style={styles.catButton} onPress={this.props.press}>
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.catButton}>
              <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.catButton}>
              <Text></Text>
            </TouchableHighlight>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'transparent',
  },
  backgroundCategory: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  bgImg:{
    width: '100%',
    height:'100%',
    resizeMode: 'cover'
  },
  wrapper:{
    position:'absolute',
    bottom:0,
    left:0,
    width:'100%',
    height:'80%'
  },
  catButton:{
    width:'100%',
    height:'30%',
    opacity:0.7,
  }
})

import React, {Component} from 'react';
import {Platform, Text, View, Image, Button} from 'react-native';
import {styles} from './assets/style';
import AppIntroSlider from 'react-native-app-intro-slider';
import { StackNavigator, NavigationActions } from 'react-navigation';

const slides = [
  {
    key: 'somethun',
    title: '',
    text: '',
    image: require('./res/intro_01.png'),
    imageStyle: styles.imageSlide,
    backgroundColor: '#0f0f0f',
  },
  {
    key: 'somethun-dos',
    title: '',
    text: '',
    image: require('./res/intro_02.png'),
    imageStyle: styles.imageSlide,
    backgroundColor: '#0f0f0f',
  },
  {
    key: 'somethun1',
    title: '',
    text: '',
    image: require('./res/intro_03.png'),
    imageStyle: styles.imageSlide,
    backgroundColor: '#0f0f0f',
  }
];

export default class FragmentIntroApp extends React.Component {
  
  render() {

    return (
      <AppIntroSlider
        slides={slides}
        //renderItem={this._renderItem}
        //bottomButton
        showPrevButton
        showSkipButton
        // hideNextButton
        // hideDoneButton
        onSkip={() => console.log("skipped")}
        onDone={this.props.screen}
      />
    );
  }
}

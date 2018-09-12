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
  Dimensions,
  Animated} from 'react-native';
  import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
  import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
  import Modal from "react-native-modal";
  import {FirstRoute,SecondRoute,ThirdRoute} from "./BondTabView";

  export default class BondRewardfr extends React.Component {
    state = {
      index: 0,
      routes: [
        { key: 'first', title: 'Shopping Voucher' },
        { key: 'second', title: 'Business Travel' },
        { key: 'third', title: 'Bussines Gathering' },
      ]
    };

    _toggleModal1 = () =>
      this.setState({ isModalVisible1: !this.state.isModalVisible1 });

    _toggleModal2 = () =>
      this.setState({ isModalVisible2: !this.state.isModalVisible2 });

    _toggleModal3 = () =>
      this.setState({ isModalVisible3: !this.state.isModalVisible3 });

    _renderTabBar = props => {
      const inputRange = props.navigationState.routes.map((x, i) => i);

      return (
        <View style={styles.tabBar}>
          {props.navigationState.routes.map((route, i) => {
            const color = props.position.interpolate({
              inputRange,
              outputRange: inputRange.map(
                inputIndex => (inputIndex === i ? '#959292' : '#fff')
              ),
            });
            return (
              <TouchableOpacity
                key={i}
                style={styles.tabItem}
                onPress={() => this.setState({ index: i })}>
                <Animated.Text style={{ color, textAlign:'center',fontSize:16, textTransform: 'uppercase' }}>{route.title.toUpperCase()}</Animated.Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
    };

    _renderScene = ({ route }) => {
      switch (route.key) {
      case 'first':
        return <FirstRoute navmodal={this.state.isModalVisible1} toggleModal={this._toggleModal1} />;
      case 'second':
        return <SecondRoute navmodal={this.state.isModalVisible2} toggleModal={this._toggleModal2} />;
      case 'third':
        return <ThirdRoute navmodal={this.state.isModalVisible3} toggleModal={this._toggleModal3} />;
      default:
        return null;
      }
    };

    render() {
      return (
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width, height:200 }}
        />
      );
    }
  }

  var styles = StyleSheet.create({
    container : {
      height:130,
    },
    tabBar: {
    flexDirection: 'row',
    backgroundColor:'#4d6792',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  })

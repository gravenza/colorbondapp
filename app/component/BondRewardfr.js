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

  const FirstRoute = () => (
    <View style={[styles.container, { backgroundColor: '#ddd' }]}>
      <TouchableOpacity>
      <Image style={{width: '100%', height: 130}} source={{uri:'http://apps.colorbond.id/access/assets/file/reward_slider/1.jpg'}} />
      </TouchableOpacity>
    </View>
  );
  const SecondRoute = () => (
    <View style={[styles.container, { backgroundColor: '#ddd' }]} >
      <TouchableOpacity>
      <Image style={{width: '100%', height: 130}} source={{uri:'http://apps.colorbond.id/access/assets/file/reward_slider/2.jpg'}} />
      </TouchableOpacity>
    </View>
  );
  const ThirdRoute = () => (
    <View style={[styles.container, { backgroundColor: '#ddd' }]}>
      <TouchableOpacity>
      <Image style={{width: '100%', height: 130}} source={{uri:'http://apps.colorbond.id/access/assets/file/reward_slider/3.jpg'}} />
      </TouchableOpacity>
    </View>
  );

  export default class BondRewardfr extends React.Component {
    state = {
      index: 0,
      routes: [
        { key: 'first', title: 'Shopping Voucher' },
        { key: 'second', title: 'Business Travel' },
        { key: 'third', title: 'Bussines Gathering' },
      ],
    };

    // _handleIndexChange = index => this.setState({ index });

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

    render() {
      return (
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
            third: ThirdRoute,
          })}
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

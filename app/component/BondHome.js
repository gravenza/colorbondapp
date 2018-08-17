import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  StyleSheet,
  AsyncStorage} from 'react-native';
  import { createStackNavigator } from 'react-navigation';
  import BondEvent from './BondEvent';
  import BondProgram from './BondProgram';
  import BannerWowcard from './BannerWowcard';
  import BondPoint from './BondPoint';
  import BondProject from './BondProject';

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../res/new_bondclub.png')}
          style={{ width: 150, height: 40 }}
        />
      </View>
    );
  }
}
export default class BondHome extends Component {

  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerStyle : {
      backgroundColor: '#000',
    },
    headerLeft: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#000"
      />
    ),
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#000"
      />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <BondEvent />
          <BondProgram />
          <BondPoint />
          <BondProject />
          <BannerWowcard />
        </ScrollView>
      </View>
    )
  }
}

//return <RootStack />;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column'
  },
})

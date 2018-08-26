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
  ActivityIndicator,
  AsyncStorage} from 'react-native';
  import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
  import DrawerHeader from '../component/DrawerHeader';
  import TabNavBottom from '../component/TabNavBottom';

export default class BondVariant extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      statusxpd : true,
      statusxrw : true,
      statusultra : true,
      statusxal : true,
      statusm : true,
      captionxpd : "COLORBOND® XPD has been developed by Bluescope to provide premium durability in excellent weather ability & high form ability for exterior application.",
      captionxrw : "With our Thermatech® solar refl­ectance technology, our dirt-resisting Clean Technology, and durable paint and base substrate, we create a future that is comfortable for people and the landscape.",
      captionultra : "COLORBOND® Ultra prepainted steel speci­fically design by NS BlueScope, combines long term durability and exceptional corrosion resistance.",
      captionxal : "COLORBOND® XAL is a prepainted aluminium that has long lasting, durable good workability, lightweight alternative to other cladding materials.",
      captionm : "The secreat of Colorbond M lies in magnesium. Introduce into the alumunium-zinc alloy coating, it activates the allumunium to create a self-sealing effect that greatly improves galvanic protection and corrosion resistance.",
    }
  }

  ShowHideXpd = () => { this.state.statusxpd == true ? this.setState({statusxpd: false}) : this.setState({statusxpd: true}) };

  ShowHideXrw = () => { this.state.statusxrw == true ? this.setState({statusxrw: false}) : this.setState({statusxrw: true}) };

  ShowHideUltra = () => { this.state.statusultra == true ? this.setState({statusultra: false}) : this.setState({statusultra: true}) };

  ShowHideXal = () => { this.state.statusxal == true ? this.setState({statusxal: false}) : this.setState({statusxal: true}) };

  ShowHideM = () => { this.state.statusm == true ? this.setState({statusm: false}) : this.setState({statusm: true}) };



  static navigationOptions = {
    drawerLabel: 'Variant Colorbond',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../res/button_05.png')}
        style={[{width:24,height:24}, {tintColor: tintColor}]}
      />
    ),
  }

  componentDidMount(){
    return fetch('http://apps.colorbond.id/api/events/view')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.events,
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

    return (
      <View style={styles.container}>

        <View style={styles.bgUniversal}>
          <Image style={{width:480}} source={require('../res/bg_universal.png')} />
        </View>

        <DrawerHeader btnpress={this._btnPress} title={"VARIAN COLORBOND"} />

          <ScrollView>
            <View style={styles.container}>
              <View style={styles.varianBox}>
                <TouchableOpacity onPress={this.ShowHideXpd}>
                  <Image style={styles.variantImg} source={ require('../res/color_xpd.png')} />
                </TouchableOpacity>
                {this.state.statusxpd ? null : <Text style={styles.variantCaption}>{this.state.captionxpd}</Text> }
              </View>

              <View style={styles.varianBox}>
                <TouchableOpacity onPress={this.ShowHideXrw}>
                  <Image style={styles.variantImg} source={ require('../res/color_xrw.png')} />
                </TouchableOpacity>
                {this.state.statusxrw ? null : <Text style={styles.variantCaption}>{this.state.captionxrw}</Text> }
              </View>

              <View style={styles.varianBox}>
                <TouchableOpacity onPress={this.ShowHideUltra}>
                  <Image style={styles.variantImg} source={ require('../res/color_ultra.png')} />
                </TouchableOpacity>
                {this.state.statusultra ? null : <Text style={styles.variantCaption}>{this.state.captionultra}</Text> }
              </View>

              <View style={styles.varianBox}>
                <TouchableOpacity onPress={this.ShowHideXal}>
                  <Image style={styles.variantImg} source={ require('../res/color_xal.png')} />
                </TouchableOpacity>
                {this.state.statusxal ? null : <Text style={styles.variantCaption}>{this.state.captionxal}</Text> }
              </View>

              <View style={styles.varianBox}>
                <TouchableOpacity onPress={this.ShowHideM}>
                  <Image style={styles.variantImg} source={ require('../res/color_xal.png')} />
                </TouchableOpacity>
                {this.state.statusm ? null : <Text style={[styles.variantCaption, {marginBottom:40}]}>{this.state.captionm}</Text> }
              </View>

            </View>
          </ScrollView>



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

//return <RootStack />;
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column'
  },
  bgUniversal:{
    position:'absolute',
    left:0,
    top:0,
  },
  varianBox:{

  },
  variantImg:{
    width:'100%',
    height:110,
    resizeMode:'center'
  },
  variantCaption:{
    padding:20,
    color:'#333',
    backgroundColor:'#fff',
    fontSize:14,
  }

})

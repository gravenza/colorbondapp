import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated} from 'react-native';
  import Modal from "react-native-modal";

export class FirstRoute extends React.Component{
  constructor(props){
    super(props);

    state = {
      point: '',
      type: 0
    };
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: '#ddd' }]}>
        <TouchableOpacity onPress={this.props.toggleModal}>
        <Image style={{width: '100%', height: 130}} source={{uri:'http://apps.colorbond.id/access/assets/file/reward_slider/1.jpg'}} />
        </TouchableOpacity>

        <Modal isVisible={this.props.navmodal}>
          <View style={styles.containerModal}>
            <Image style={{width: '100%', height: 200, marginBottom:10}} source={{uri:'http://apps.colorbond.id/access/assets/file/reward_slider/1.jpg'}} />
              <Text style={{alignSelf:'center', fontSize:18}}>{'MITRA ADI PERKASA'}</Text>
              <Text style={{width:'100%', textAlign:'center'}}>{'GET VOUCHER 1 Point'}</Text>

              <View style={styles.rows}>
                <Text style={styles.labelgroup}>{'Exchange for'}</Text>
                <TextInput style={styles.inputtext} onChangeText={(point) => this.setState({point})} underlineColorAndroid='transparent' />
                <Text style={styles.labelgroup}>{'Point'}</Text>
              </View>

              <View style={[styles.rows,{marginTop:0}]}>
                <TouchableOpacity onPress={this.props.toggleModal}>
                  <Text style={[styles.btn, {backgroundColor:'#2bb49f'}]}>{'REDEEM'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.toggleModal}>
                  <Text style={[styles.btn,{backgroundColor:'#ddd'}]}>{'CLOSE'}</Text>
                </TouchableOpacity>
              </View>


          </View>
        </Modal>

      </View>
    )
  }
}

export class SecondRoute extends React.Component{
  constructor(props){
    super(props);

    state = {
    isModalVisible2: false
    };
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: '#ddd' }]}>
        <TouchableOpacity onPress={this.props.toggleModal}>
        <Image style={{width: '100%', height: 130}} source={{uri:'http://apps.colorbond.id/access/assets/file/reward_slider/2.jpg'}} />
        </TouchableOpacity>

        <Modal isVisible={this.props.navmodal}>
          <View style={{ flex: 1, backgroundColor:'yellow' }}>
              <Text>Hello!</Text>
              <TouchableOpacity onPress={this.props.toggleModal}>
                <Text>Hide me!</Text>
              </TouchableOpacity>
          </View>
        </Modal>

      </View>
    )
  }
}

export class ThirdRoute extends React.Component{
  constructor(props){
    super(props);

    state = {
    isModalVisible3: false
    };
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: '#ddd' }]}>
        <TouchableOpacity onPress={this.props.toggleModal}>
        <Image style={{width: '100%', height: 130}} source={{uri:'http://apps.colorbond.id/access/assets/file/reward_slider/3.jpg'}} />
        </TouchableOpacity>

        <Modal isVisible={this.props.navmodal}>
          <View style={{ flex: 1, backgroundColor:'green' }}>
              <Text>Hello!</Text>
              <TouchableOpacity onPress={this.props.toggleModal}>
                <Text>Hide me!</Text>
              </TouchableOpacity>
          </View>
        </Modal>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    height:130,
  },
  containerModal: {
    //flex: 1,
    backgroundColor:'#fff',
    alignItems:'center',
    padding:10,
    borderRadius:10
  },
  rows:{
    flexDirection:'row',
    marginTop:5
  },
  inputtext:{
    padding:2,
    paddingLeft:10,
    paddingRight:10,
    borderWidth:1,
    borderColor:'#ddd',
    alignSelf:'stretch',
    marginBottom:10,
    backgroundColor:'#ddd',
    width:80,
    height:25,
    marginLeft:10,
    marginRight:10,
    fontSize:10
  },
  labelgroup:{
    marginTop:2
  },
  btn:{
    padding:5,
    borderRadius:5,
    margin:5,
    marginTop:0,
    width:80,
    textAlign:'center'
  }
})

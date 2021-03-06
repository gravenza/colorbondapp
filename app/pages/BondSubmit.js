import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  Picker,
  ScrollView,
  TextInput,
  StyleSheet,
  CameraRoll,
  TouchableOpacity,
  KeyboardAvoidingView,
  PermissionsAndroid,
  AsyncStorage} from 'react-native';
  import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
  import DrawerHeader from '../component/DrawerHeader';
  import TabNavBottom from '../component/TabNavBottom';
  import DatePicker from 'react-native-datepicker'

export default class BondSubmit extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      date:'',
      categorySize:''
    }
  }

  static navigationOptions = {
    drawerLabel: 'Project Submit',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../res/button_05.png')}
        style={[{width:24,height:24}, {tintColor: tintColor}]}
      />
    ),
  }

  getPhoto(){
    CameraRoll.getPhotos({ first: 1000000 })
      .then(res => {
        let photoArray = res.edges;
        this.setState({ showPhotoGallery: true, photoArray: photoArray })
      })
  }

  _pressrwd = () => { this.props.navigation.navigate('Reward') };
  _presssbt = () => { this.props.navigation.navigate('Submit') };
  _pressntf = () => { this.props.navigation.navigate('Notif') };
  _pressids = () => { this.props.navigation.navigate('Ideas') };
  _btnPress = () => { this.props.navigation.toggleDrawer() }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.bgSubmit}>
          <Image style={{width:480,height:768}} source={require('../res/submit_bg.png')} />
        </View>

        <DrawerHeader btnpress={this._btnPress} title={"SUBMIT PROJECT"} />

        <KeyboardAvoidingView style={{marginBottom:120}}>
        <ScrollView style={styles.wrapper}>

          <View style={styles.row}>
            <Text style={{fontWeight:'bold',fontSize:16,marginRight:80,marginTop:15}}>{'Project Details'}</Text>
            <View style={styles.row}>
              <Image style={{width:50, height:50}} source={require('../res/button_02.png')} />
              <View style={styles.column}>
                <Text style={{fontSize:14,marginTop:10}}>{'My Point'}</Text>
                <Text style={{fontWeight:'bold'}}>0</Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Project Name</Text>
            <TextInput style={styles.inputText} placeholder='Project Name' />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Project Owner</Text>
            <TextInput style={styles.inputText} placeholder='Project Owner' />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>{'Construction Start Date'}</Text>
            <DatePicker
              style={{width: 208,height:40,backgroundColor:'#ddd'}}
              date={this.state.date}
              mode="date"
              placeholder="Select Date"
              format="YYYY-MM-DD"
              minDate="1960-01-01"
              maxDate="2018-12-30"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => {this.setState({date: date})}}
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>{'Location'}</Text>
            <TextInput style={styles.inputText} placeholder='Your project location' />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>{'Size'}</Text>
            <TextInput style={[styles.inputText,{width:'50%'}]} placeholder='Size' />
            <Text style={{marginLeft:10,paddingTop:5}}>{'/m2'}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>{'Size Category'}</Text>
            <Picker
              selectedValue={this.state.categorySize}
              style={{ height: 30, width: '60%' }}
              itemStyle={{backgroundColor:'#ddd'}}
              onValueChange={(itemValue, itemIndex) => this.setState({categorySize: itemValue})}>
              <Picker.Item label="SPECIFIED" value="SPECIFIED" />
              <Picker.Item label="WIN" value="WIN" />
              <Picker.Item label="WIN COLORBOND+LYSAGHT" value="WIN COLORBOND+LYSAGHT" />
            </Picker>
          </View>

          <View style={styles.column}>
            <Text style={styles.labelFull}>{'Upload Specification & Additional Document'}</Text>
            <TouchableOpacity onPress={this.getPhoto()}>
            <TextInput style={styles.inputTextFull} placeholder='File Picker' />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>{'Color'}</Text>
            <TextInput style={styles.inputText} placeholder='Products color in your project' />
          </View>

          <View style={styles.column}>
            <Text style={[styles.label,{width:'100%'}]}>{'Colorbond materials Used'}</Text>
            <View style={styles.row}>
            <Picker
              selectedValue={this.state.categorySize}
              style={{ height: 30, width: '50%', marginRight:10 }}
              itemStyle={{backgroundColor:'#ddd'}}
              onValueChange={(itemValue, itemIndex) => this.setState({categorySize: itemValue})}>
              <Picker.Item label="SPECIFIED" value="SPECIFIED" />
              <Picker.Item label="WIN" value="WIN" />
              <Picker.Item label="WIN COLORBOND+LYSAGHT" value="WIN COLORBOND+LYSAGHT" />
            </Picker>
            <Picker
              selectedValue={this.state.categorySize}
              style={{ height: 30, width: '45%' }}
              itemStyle={{backgroundColor:'#ddd'}}
              onValueChange={(itemValue, itemIndex) => this.setState({categorySize: itemValue})}>
              <Picker.Item label="SPECIFIED" value="SPECIFIED" />
              <Picker.Item label="WIN" value="WIN" />
              <Picker.Item label="WIN COLORBOND+LYSAGHT" value="WIN COLORBOND+LYSAGHT" />
            </Picker>
            </View>
          </View>

          <View style={[styles.row,{justifyContent:'center',marginBottom:20}]}>
            <TouchableOpacity>
            <Text style={styles.btnSubmit}>{'SUBMIT'}</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
        </KeyboardAvoidingView>



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
  bgSubmit:{
    position:'absolute',
    left:0,
    top:0,
  },
  row:{
    flexDirection:'row',
    marginBottom:15
  },
  column:{
    flexDirection:'column',
    marginBottom:15
  },
  wrapper:{
    backgroundColor:'#fff',
    marginLeft:20,
    marginRight:20,
    marginTop:10,
    padding:20,
    borderRadius:10,
  },
  label:{
    width:'30%',
    paddingTop:5,
    marginRight:20
  },
  inputText:{
    backgroundColor:'#ddd',
    width:'70%',
    height:30,
    padding:0,
    paddingLeft:10,
    paddingRight:10,
  },
  labelFull:{
    width:'100%',
    paddingTop:5,
    marginRight:20
  },
  inputTextFull:{
    backgroundColor:'#ddd',
    width:'100%',
    height:30,
    padding:0,
    paddingLeft:10,
    paddingRight:10,
  },
  btnSubmit:{
    backgroundColor:'#ec3039',
    color:'#fff',
    borderRadius:5,
    padding:5,
    paddingLeft:20,
    paddingRight:20,
    textAlign:'center',
    marginBottom:20
  }
})

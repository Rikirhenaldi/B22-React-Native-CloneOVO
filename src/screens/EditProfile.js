/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import {FormControl, Input} from 'native-base';
import ActionButtonPurple from '../components/ActionButtonPurple';
import { connect } from 'react-redux';
import { editPutProfile } from '../redux/actions/users';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { showMessage, hideMessage } from 'react-native-flash-message';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state =  {picture: null, name: '', phoneNumber: '', email: '' };
  }
  async componentDidMount(){
    const user = await this.props?.users?.data;
    this.setState({picture: user.picture});
    this.setState({name: user.name});
    this.setState({phoneNumber: user.phone});
    this.setState({email: user.email});
    console.log(this.state);
  }

  onSelectImageFrom = () => {
    Alert.alert('Option', 'Choose your Picture By :', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Camera',
        onPress: () => this.selectImageByTakeCamera(),
      },
      {
        text: 'Storage',
        onPress: () => this.selectFromStorage(),
      },
    ]);
  };

  selectFromStorage = (e) => {
    launchImageLibrary({}, response => {
      if (!response.didCancel) {
        const maxSize = 1024 * 1024;
        if (response.assets[0].fileSize < maxSize) {
          this.setState({picture : response.assets[0].uri});
        } else {
          showMessage({
            message: 'Selected Image is to Large!',
            type: 'info',
            backgroundColor: 'red',
            color: 'white',
            duration: 1000,
          });
        }
      }
    });
  };

  selectImageByTakeCamera= (e) => {
    let options = {
      mediaType: 'photo',
      maxWidth: 150,
      maxHeight: 150,
    };
    launchCamera(options, response => {
      if (!response.didCancel) {
        const maxSize = 1024 * 1024;
        if (response.assets[0].fileSize < maxSize) {
          this.setState({picture: response.assets[0].uri});
        } else {
          showMessage({
            message: 'Size of Taken Image is to Large',
            type: 'info',
            backgroundColor: 'red',
            color: 'white',
            duration: 1000,
          });
        }
      }
    });
  };

  onEditProfile = (e) => {
    e.preventDefault();
    const {picture, name, email, phoneNumber} = this.state;
    const {token} = this.props.auth;
    this.props.editPutProfile({picture, name, email, phoneNumber}, token).then(() => {
      if (this.props.users?.message === 'Profile Updated Sucsessfully') {
        showMessage({
          message: 'Profile Updated Sucsessfully',
          type: 'info',
          backgroundColor: '#8f74b5',
          duration: 1000,
        });
      } else {
        showMessage({
          message: `${this.props.users.message}`,
          type: 'info',
          backgroundColor: '#8f74b5',
          color: 'white',
          duration: 1000,
        });
      }
      return this.props.navigation.reset({index: 0, routes: [{name: 'Home'}]});
    });
  }

  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.imageBox}>
          <Image style={styles.image}
            source={{uri:this.state.picture}}
          />
          <TouchableOpacity style={styles.buttonCam} onPress={this.onSelectImageFrom}>
          <FaIcon name="camera" size={18} color={'white'} />
          </TouchableOpacity>
        </View>
        <FormControl style={styles.boxForm}>
            <View style={styles.boxFormLine}>
              <Text style= {styles.title}>Nama Lengkap</Text>
                  <Input
                  style={styles.button2}
                  w="100%"
                  p={3}
                  placeholder="Nama Lengkap"
                  placeholderTextColor="black"
                  color="black"
                  variant="underlined"
                  value={this.state.name}
                  onChangeText={value=>this.setState({name:value})}
              />
            </View>
            <View style={styles.boxFormLine}>
            <Text style= {styles.title}>Nomer Ponsel</Text>
              <Input
                  style={styles.button2}
                  w="100%"
                  p={3}
                  placeholder="Nomer Ponsel"
                  placeholderTextColor="black"
                  color="black"
                  variant="underlined"
                  keyboardType="numeric"
                  value={this.state.phoneNumber}
                  onChangeText={value=>this.setState({phoneNumber:value})}
              />
            </View>
            <View style={styles.boxFormLine}>
              <Text style= {styles.title}>Email</Text>
                  <Input
                  style={styles.button2}
                  w="100%"
                  p={3}
                  placeholder="Nama Lengkap"
                  placeholderTextColor="black"
                  color="black"
                  variant="underlined"
                  value={this.state.email}
                  onChangeText={value=>this.setState({email:value})}
              />
            </View>
            </FormControl>
            <View style={styles.boxButtonSave}>
              <ActionButtonPurple buttonName="Simpan" action={this.onEditProfile}/>
            </View>
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  imageBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  image: {
    width : 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'grey',
    marginLeft: 30,
  },
  buttonCam: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#694e99',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: 70,
    left: -34,
  },
  boxForm: {
    alignItems: 'center',
    width: 280,
  },
  boxFormLine: {
    width: '100%',
    marginTop: 20,
  },
  boxButtonSave: {
    marginTop: 30,
  },
});
const mapStateToprops = state => ({
  users : state.users,
  auth : state.auth,
});

const mapDispatchToProps = {editPutProfile};

export default connect(mapStateToprops, mapDispatchToProps)(EditProfile);

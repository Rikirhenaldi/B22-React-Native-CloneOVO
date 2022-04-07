/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {FormControl, Input} from 'native-base';
import { authRegister } from '../redux/actions/auth';
import { clearMessage } from '../redux/actions/auth';
import { connect } from 'react-redux';
import ActionButtonPurple from '../components/ActionButtonPurple';
import { showMessage, hideMessage } from 'react-native-flash-message';

class Sign extends Component {
  constructor(props) {
    super(props);
    this.state =  {name: '', phone: '', email: '', pin: ''};
  }
  onRegister = (e) =>{
    e.preventDefault();
    const {name, phone, email, pin} = this.state;
    this.props.authRegister(name, phone, email, pin).then(()=> {
      if (this.props.auth.errMsg === 'Format Phone number is wrong, number must start with 08 or +62 .. and length more than 10'){
        showMessage({
          message: 'Format Phone number is wrong',
          type: 'info',
          backgroundColor: '#870139',
          duration: 1000,
        });
        this.props.clearMessage();
      } else if (this.props.auth.errMsg  === 'You are not yet Input Right Email'){
        showMessage({
          message: 'You are not yet Input Right Email',
          type: 'info',
          backgroundColor: '#870139',
          duration: 1000,
        });
        this.props.clearMessage();
      } else if (this.props.auth.errMsg  === 'Pin length must be 6 digit'){
        showMessage({
          message: 'Pin length must be 6 digit',
          type: 'info',
          backgroundColor: '#870139',
          duration: 900,
        });
        this.props.clearMessage();
      } else if (this.props.auth.sccMsg  === 'register succesfully') {
        showMessage({
          message: 'Register Succesfully',
          type: 'info',
          backgroundColor: '#8f74b5',
          duration: 900,
        });
      return this.props.navigation.reset({index: 0, routes: [{name: 'login'}]});
      }
    });
  }
  render() {
    return (
        <View style= {styles.parent}>
        <View style= {styles.boxtitle}>
            <FormControl style={styles.boxForm}>
                <Text style= {styles.title}>Join OVO</Text>
                <Input
                style={styles.button2}
                w="82%"
                p={3}
                placeholder="Nama Lengkap"
                placeholderTextColor="white"
                color="white"
                variant="underlined"
                onChangeText={(value)=> this.setState({name: value})}
                // value={this.state.email}
                // onChangeText={value=>this.setState({email:value})}
            />
            <Input
                style={styles.button2}
                w="82%"
                p={3}
                placeholder="Nomer Ponsel"
                placeholderTextColor="white"
                color="white"
                variant="underlined"
                keyboardType="numeric"
                onChangeText={(value)=> this.setState({phone: value})}
                // value={this.state.email}
                // onChangeText={value=>this.setState({email:value})}
            />
            <Input
                style={styles.button2}
                w="82%"
                p={3}
                placeholder="Email"
                placeholderTextColor="white"
                color="white"
                variant="underlined"
                onChangeText={(value)=> this.setState({email: value})}
                // value={this.state.email}
                // onChangeText={value=>this.setState({email:value})}
            />
            <Input
                style={styles.button2}
                w="82%"
                p={3}
                placeholder=" Security Pin"
                placeholderTextColor="white"
                color="white"
                type={false ? 'text' : 'password'}
                variant="underlined"
                keyboardType="numeric"
                onChangeText={(value)=> this.setState({pin: value})}
                // value={this.state.email}
                // onChangeText={value=>this.setState({email:value})}
            />
            </FormControl>
        </View>
        <View style= {styles.backBox}/>
        <View style= {styles.boxButton}>
            <View style= {styles.boxAgree}>
                <Text style= {styles.title2}> Saya Setuju Dengan Syarat & Ketentuan dan Kebijakan Privasi </Text>
            </View>
            <View style= {styles.button}>
                <ActionButtonPurple buttonName="JOIN" action={this.onRegister}/>
            </View>
            <TouchableOpacity style= {styles.button} onPress={()=> this.props.navigation.navigate('login')}>
                <Text style= {styles.buttonTitle}>Sign in</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    parent: {
      backgroundColor: '#694e99',
      flex: 1,
    },
    boxForm: {
      alignItems: 'center',
    },
    title: {
      color: 'white',
      fontWeight: '300',
      fontSize: 40,
      marginBottom: 20,
    },
    boxAgree: {
        width: 250,
        fontSize: 16,
        marginTop: 30,
      },
    title2: {
        color: '#694e99',
        fontWeight: '300',
        width: 250,
        fontSize: 14,
      },
    buttonTitle: {
      color: '#694e99',
      fontWeight: 'bold',
      fontSize: 16,
      marginTop: 10,
    },
    boxtitle : {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#694e99',
      height: 400,
      borderBottomLeftRadius: 100,
    },
    backBox : {
      zIndex: -4,
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      height: 400,
      width: 200,
      marginTop: -300,
    },
    boxButton: {
      alignItems: 'center',
      backgroundColor: 'white',
      height: 450,
      borderTopRightRadius: 100,
      marginTop: -100,
    },
    button: {
      marginTop: 20,
    },
  });

  const mapStateToprops = state => ({
    auth: state.auth,
  });

  const mapDispatchToProps = {authRegister, clearMessage};
export default connect(mapStateToprops, mapDispatchToProps)(Sign);

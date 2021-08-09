/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {FormControl, Input} from 'native-base';
import ActionButton from '../components/ActionButton';
import { authLogin } from '../redux/actions/auth';
import { connect } from 'react-redux';
import { clearMessage } from '../redux/actions/auth';
import { showMessage, hideMessage } from 'react-native-flash-message';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state =  {phone: '' };
  }
  onLogin = (e) =>{
    e.preventDefault();
    const {phone} = this.state;
    this.props.authLogin(phone).then(()=> {
      if (this.props.auth.errMsg === 'Phone Number is wrong' || this.props.auth.errMsg === undefined){
        showMessage({
          message: 'Phone Number is wrong',
          type: 'info',
          backgroundColor: '#870139',
          duration: 1000,
        });
        this.props.clearMessage();
      } else if (this.props.auth.errMsg  === 'Your Number Not Yet Register'){
        showMessage({
          message: 'Your Number Not Yet Register',
          type: 'info',
          backgroundColor: '#870139',
          duration: 60,
        });
        this.props.clearMessage();
      } else if (this.props.auth.token  !== null ) {
        showMessage({
          message: 'Login Succesfully',
          type: 'info',
          backgroundColor: '#8f74b5',
          duration: 60,
        });
      return this.props.navigation.reset({index: 0, routes: [{name: 'loginpin'}]});
      }
    });

  }
  render() {
    const {token} = this.props.auth;
    return (
        <View style= {styles.parent}>
        <View style= {styles.boxtitle}>
            <FormControl style={styles.boxForm}>
                <Text style= {styles.title}>Sign In</Text>
                {/* {token === null || token === undefined ? null : showMessage({
              message: 'login Successully',
              type: 'info',
            })} */}
            <Input
                style={styles.button2}
                w="80%"
                p={3}
                placeholder="Nomer Ponsel"
                placeholderTextColor="white"
                color="white"
                variant="underlined"
                keyboardType="numeric"
                onChangeText={value=> this.setState({phone: value})}
                // value={this.state.email}
                // onChangeText={value=>this.setState({email:value})}
            />
            <View style= {styles.button}>
                <ActionButton buttonName="Sign In" action={this.onLogin} />
            </View>
            </FormControl>
        </View>
        <View style= {styles.backBox}/>
        <View style= {styles.boxButton}>
            <TouchableOpacity style= {styles.button} onPress={()=> this.props.navigation.navigate('signup')}>
                <Text style= {styles.buttonTitle}>Join OVO</Text>
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
      fontSize: 18,
      marginTop: 130,
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
      marginTop: 40,
    },
  });
  const mapStateToprops = state => ({
    auth: state.auth,
  });
const mapDispatchToProps = {authLogin, clearMessage};
export default connect(mapStateToprops, mapDispatchToProps)(Login);

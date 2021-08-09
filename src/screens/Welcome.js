/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ButtonPurple from '../components/PurpelButton';
import ButtonWhite from '../components/WhiteButton';

export default class Welcome extends Component {
  render() {
    return (
      <View style= {styles.parent}>
        <View style= {styles.boxtitle}>
          <Text style= {styles.title}> WELCOME </Text>
        </View>
        <View style= {styles.backBox}/>
        <View style= {styles.boxButton}>
        <Text style= {styles.title2}> OVO </Text>
          <View style= {styles.button}>
            <ButtonPurple buttonName="JOIN NOW" routeName="signup"/>
          </View>
          <View style= {styles.button}>
            <ButtonWhite buttonName="SIGN IN" routeName="login"/>
          </View>
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
  title: {
    color: 'white',
    fontWeight: '300',
    fontSize: 50,
  },
  title2: {
    color: '#694e99',
    fontWeight: '300',
    fontSize: 50,
    marginTop: 40,
  },
  boxtitle : {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#694e99',
    height: 300,
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
    marginTop: -300
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
  }
});

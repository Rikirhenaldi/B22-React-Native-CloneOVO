/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ButtonPurple = ({buttonName,routeName}) => {
  const navigation = useNavigation();
    return (
      <TouchableOpacity onPress={()=> {navigation.navigate(routeName);}} style={styles.button}>
      <Text style={styles.buttonText}>{buttonName}</Text>
      </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
  button: {
    width: 290,
    height: 50,
    backgroundColor: '#694e99',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default ButtonPurple;

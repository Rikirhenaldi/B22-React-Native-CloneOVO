/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const ActionButton = ({buttonName,action}) => {
    return (
      <TouchableOpacity onPress={action} style={styles.button}>
      <Text style={styles.buttonText}>{buttonName}</Text>
      </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
  button: {
    width: 290,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 40,
    borderColor: '#694e99',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonText: {
    color: '#694e99',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default ActionButton;

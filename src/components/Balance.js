/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default function Balance() {
  return (
    <View style={styles.parent}>
      <View style={styles.UpperBox} />
      <View style={styles.floatingBox}>
        <TouchableOpacity style={styles.iconBox}>
          <Image
            style={styles.iconBox}
            source={require('../assets/images/Topup.png')}
          />
          <Text style={styles.iconText}>Top Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBox}>
          <Image
            style={styles.iconBox}
            source={require('../assets/images/Transfers.png')}
          />
          <Text style={styles.iconText}>Transfers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBox}>
          <Image
            style={styles.iconBox}
            source={require('../assets/images/History.png')}
          />
          <Text style={styles.iconText}>History</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  UpperBox: {
    backgroundColor: '#694e99',
    height: 250,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  floatingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 320,
    height: 70,
    marginTop: -30,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 20,
    elevation: 3,
  },
  iconBox: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  iconText: {
    width: 70,
    height: 30,
    color: '#694e99',
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 4,
  },
});

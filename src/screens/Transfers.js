/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import MAIcon from 'react-native-vector-icons/MaterialIcons';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default class Transfers extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.text}>Penerima Baru</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Favorite</Text>
          </TouchableOpacity>
        </View>
        <View>
        <View  style={styles.boxWrapper3}>
            <TouchableOpacity style={styles.buttonAkun} onPress={() => this.props.navigation.navigate('viaovo')}>
                <View style={styles.buttonValue} >
                    <MAIcon name="smartphone" size={24} color={'#491a73'}/>
                    <Text style={styles.buttonText}>Ke Sesama OVO</Text>
                </View>
                <View>
                <FA5Icon name="chevron-right" size={20} color={'grey'}/>
                </View>
            </TouchableOpacity>
         </View>
        </View>
        <View>
        <View  style={styles.boxWrapper3}>
            <TouchableOpacity style={styles.buttonAkun}>
                <View style={styles.buttonValue} >
                    <FAIcon name="bank" size={24} color={'#491a73'}/>
                    <Text style={styles.buttonText}>Ke Rekening Bank</Text>
                </View>
                <View>
                <FA5Icon name="chevron-right" size={20} color={'grey'}/>
                </View>
            </TouchableOpacity>
         </View>
        </View>
        <View style={styles.child}>
            <View style={styles.boxId}>
                <Text style={styles.ovoId}>Transaksi Terakhir</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  child: {
    marginTop: 20,
    flex: 1,
    backgroundColor: 'white',
  },
  boxId: {
    width: 200,
    height: 30,
    marginTop: 20,
  },
  ovoId: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#694e99',
    height: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonAkun: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 20,
  },
  buttonValue: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  buttonText: {
      fontSize: 14,
      marginLeft: 20,
  },
  boxWrapper3: {
    backgroundColor: 'white',
    height: 70,
    width: 320,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 3,
  },
});

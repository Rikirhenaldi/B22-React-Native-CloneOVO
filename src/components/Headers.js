/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Headers({navigation, scene}) {
  console.log(scene.route.name);
  return (
        <View style={headerStyle.parent}>
          {scene.route.name === 'Home' ?
          <TouchableOpacity>
          <Text style={headerStyle.TitleBar}>OVO</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={() => navigation.goBack()} style={headerStyle.TitleBar}>
            <Icon name="chevron-back" color="white" size={25} />
            <Text style={headerStyle.TitleBar2}>{scene.route.name.toUpperCase()}</Text>
          </TouchableOpacity>
          }

          {/* {scene.route.name === 'Home' || scene.route.name === 'profile'  ?
          <TouchableOpacity onPress={()=> navigation.navigate('notification')}>
          <Icon name="notifications-sharp" color="white" size={25} />
          </TouchableOpacity>
          : <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Icon name="chevron-back" color="white" size={25} />
          </TouchableOpacity>
         } */}
        </View>
  );
}

const headerStyle = StyleSheet.create({
  parent: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 10,
  },
  TitleBar: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
    flexDirection: 'row',
  },
  TitleBar2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    flexDirection: 'row',
    marginLeft: 30,
  },
});


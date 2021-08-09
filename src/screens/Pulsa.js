/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, Image} from 'react-native';
import { FormControl, Input} from 'native-base';
import { connect } from 'react-redux';
import { getProducts } from '../redux/actions/transactions';

class Pulsa extends Component {
  constructor(props) {
    super(props);
    this.state =  {provider: 'Pulsa Tri', price: '', phoneNumber: '', product: '', tax: '', categoryProduct: '', data: {} };
  }
  async componentDidMount(){
    const user = this.props.users?.data;
    const {token} = this.props.auth;
    // if(user.phone.startsWith("089")){
      await this.props.getProducts(1, token);
      this.setState({data: this.props.transactions.products});
      console.log('ini data',this.state.data);
    // }
  }
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.providerBox}>
          <Text style={styles.title}>{this.state.provider}</Text>
        </View>
        <View style={styles.formBox}>
        <FormControl style={styles.boxForm}>
            <View style={styles.boxFormLine}>
              <Text style= {styles.name}>Nomer Ponsel</Text>
                  <Input
                  style={styles.button2}
                  w="100%"
                  p={3}
                  placeholder="Nomer Ponsel"
                  placeholderTextColor="black"
                  fontSize={16}
                  color="black"
                  variant="Filled"
                  backgroundColor= "#d0b5f5"
                  keyboardType="numeric"
                  onChangeText={(value)=> this.setState({phoneNumber: value})}
                  value={this.state.name}
              />
            </View>
            </FormControl>
        </View>
        <View style={styles.pulsaBox}>
          <TouchableOpacity >
            <Text>Pulsa</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Kuota</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxWrapper}>
        <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={this.state.data}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('', {id: item.id})} style={styles.productBox}>
            <View style={styles.textWrapper}>
            <Text style={styles.price}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => String(index)}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  providerBox: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 14,
    marginBottom: 10,
  },
  formBox: {
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  pulsaBox: {
    width: '100%',
    paddingHorizontal: 40,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  productBox: {
    width: 120,
    height: 80,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#d0b5f5',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  boxWrapper: {
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
const mapStateToprops = state => ({
  users: state.users,
  auth: state.auth,
  transactions: state.transactions,
});
const mapDispatchToProps = {getProducts};
export default connect(mapStateToprops, mapDispatchToProps)(Pulsa);

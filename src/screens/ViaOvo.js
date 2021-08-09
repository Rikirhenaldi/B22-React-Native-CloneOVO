/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {FormControl, Input} from 'native-base';
import { connect } from 'react-redux';
import { getProfile } from '../redux/actions/users';
import { transferBalance } from '../redux/actions/users';
import ActionButtonPurple from '../components/ActionButtonPurple';
import { showMessage, hideMessage } from 'react-native-flash-message';

class ViaOvo extends Component {
  constructor(props) {
    super(props);
    this.state =  {phone: '', amount: '' };
  }
  componentDidMount(){
    const {token} = this.props.auth;
    this.props.getProfile(token);
  }
  onTransferBalance = (e) => {
    e.preventDefault();
    const {token} = this.props.auth;
    const {phone, amount} = this.state;
    this.props.transferBalance(phone, amount, token).then(() => {
      if (this.props.users.sccMsg === 'Transfer Balance successfully'){
        showMessage({
          message: 'Transfer Balance successfully',
          type: 'info',
          backgroundColor: '#8f74b5',
          duration: 1000,
        });
        return this.props.navigation.reset({index: 0, routes: [{name: 'Home'}]});
      } else if (this.props.users.sccMsg === "Can't Transfer Balance Less than Rp.5.000"){
        showMessage({
          message: "Can't Transfer Balance Less than Rp.5.000",
          type: 'info',
          backgroundColor: '#870139',
          duration: 1000,
        });
        return this.props.navigation.reset({index: 0, routes: [{name: 'Home'}]});
      } else if (this.props.users.sccMsg === 'Reciver User not Found'){
        showMessage({
          message: 'Reciver User not Found',
          type: 'info',
          backgroundColor: '#870139',
          duration: 1000,
        });
      }
    });


  }
  render() {
    const {data} = this.props.users;
    return (
      <View>
        <FormControl style={styles.boxForm}>
          <Input
            style={styles.button2}
            w="80%"
            p={4}
            placeholder="Masukan Nomer Ponsel Tujuan"
            placeholderTextColor="grey"
            color="black"
            variant="underlined"
            keyboardType="numeric"
            underlineColorAndroid="black"
            value={this.state.phone}
            onChangeText={(value)=>this.setState({phone:value})}
          />
          <View style={styles.textwraper}>
            <Text style={styles.balance}>Sumber Dana</Text>
          </View>
          <TouchableOpacity style={styles.buttonAkun}>
            <View style={styles.buttonValue}>
              <View style={styles.ovoButton}>
                <Text style={styles.ovoText}>OVO</Text>
              </View>
              <View>
                <Text style={styles.buttonText}>OVO Cash</Text>
                <View style={styles.balanceWraper}>
                  <Text style={styles.balance}>Balance</Text>
                  <Text style={styles.valueBalance}>{data?.balance?.toLocaleString('en')}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.boxinput}>
            <View style={styles.textwraper2}>
              <Text>Masukan Nominal</Text>
            </View>
            <Input
              style={styles.button2}
              w="90%"
              p={4}
              placeholder="0"
              placeholderTextColor="black"
              color="black"
              variant="underlined"
              keyboardType="numeric"
              underlineColorAndroid="black"
              value={this.state.amount}
              onChangeText={(value)=>this.setState({amount:value})}
            />
          </View>
          <View style={styles.buttonTransfer}>
            <ActionButtonPurple buttonName="Transfer" action={this.onTransferBalance} />
          </View>
        </FormControl>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
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
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    width: 150,
    height: 50,
  },
  buttonAkun: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderWidth: 1,
    width: 300,
    height: 70,
    marginLeft: 6,
    borderRadius: 8,
  },
  buttonValue: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  ovoButton: {
    backgroundColor: '#694e99',
    height: 30,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  ovoText: {
    color: 'white',
    fontWeight: 'bold',
  },
  balanceWraper: {
    flexDirection: 'row',
    marginLeft: 20,
    alignItems: 'center',
  },
  balanceWraper2: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
    alignItems: 'center',
    height: 60,
  },
  balance: {
    marginRight: 5,
    fontSize: 14,
  },
  valueBalance: {
    fontSize: 12,
  },
  textwraper: {
    marginTop: 30,
    width: 290,
    marginBottom: 20,
  },
  textwraper2: {
    width: 260,
    marginBottom: 10,
  },
  boxinput: {
    backgroundColor: '#f0f0f0',
    height: 150,
    width: 300,
    elevation: 3,
    borderRadius: 20,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTransfer: {
    marginTop: 30,
    marginBottom: 30,
  },
});
const mapStateToprops = state => ({
  users: state.users,
  auth: state.auth,
});

const mapDispatchToProps = {getProfile, transferBalance};

export default connect(mapStateToprops, mapDispatchToProps)(ViaOvo);

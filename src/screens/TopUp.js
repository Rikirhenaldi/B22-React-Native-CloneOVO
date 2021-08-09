/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Input} from 'native-base';
import { connect } from 'react-redux';
import { getProfile } from '../redux/actions/users';
import { topUpBalance } from '../redux/actions/users';
import { showMessage, hideMessage } from 'react-native-flash-message';

class TopUp extends Component {
  constructor(props) {
    super(props);
    this.state =  {amount: '' };
  }
  componentDidMount(){
    const {token} = this.props.auth;
    this.props.getProfile(token);
  }
  onTopUp = (e) =>{
    e.preventDefault();
    const {token} = this.props.auth;
    const {amount} = this.state;
    this.props.topUpBalance(amount,token).then(()=> {
      if (this.props.users.sccMsg === 'Top Up successfully'){
        showMessage({
          message: 'Top Up successfully',
          type: 'info',
          backgroundColor: '#8f74b5',
          duration: 1000,
        });
        return this.props.navigation.reset({index: 0, routes: [{name: 'Home'}]});
      } else if (this.props.users.sccMsg === "Can't Top up Less than Rp.5.000"){
        showMessage({
          message: "Can't Top up Less than Rp.5.000",
          type: 'info',
          backgroundColor: '#870139',
          duration: 1000,
        });
        return this.props.navigation.reset({index: 0, routes: [{name: 'Home'}]});
      }
    });
  }

  render() {
    const {data} = this.props.users;
    return (
      <View style={styles.parent}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.text}>Instant Top Up</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Metode Lain</Text>
          </TouchableOpacity>
        </View>

        <View  style={styles.boxWrapper3}>
            <View style={styles.boxId}>
                <Text style={styles.ovoId}>Top Up Ke</Text>
            </View>
            <TouchableOpacity style={styles.buttonAkun}>
                <View style={styles.buttonValue} >
                    <View style={styles.ovoButton}>
                      <Text style={styles.ovoText}>OVO</Text>
                    </View>
                    <View>
                      <Text style={styles.buttonText}>OVO Cash</Text>
                      <View  style={styles.balanceWraper}>
                        <Text style={styles.balance}>Balance</Text>
                        <Text  style={styles.valueBalance}>{data?.balance?.toLocaleString('en')}</Text>
                      </View>
                    </View>
                </View>
            </TouchableOpacity>
         </View>
         <View style={styles.boxWrapper2}>
            <View style={styles.boxId}>
                <Text style={styles.ovoId}>Pilih Nominal Top Up</Text>
                <View style={styles.buttonTopUpWraper}>
                  <View  style={styles.balanceWraper2}>
                    <TouchableOpacity style={styles.buttonTopUp}>
                      <Text>Rp. 100.000</Text>
                    </TouchableOpacity>
                  </View>

                  <View  style={styles.balanceWraper2}>
                    <TouchableOpacity style={styles.buttonTopUp}>
                      <Text>Rp. 200.000</Text>
                    </TouchableOpacity>
                  </View>

                  <View  style={styles.balanceWraper2}>
                    <TouchableOpacity style={styles.buttonTopUp}>
                      <Text>Rp. 500.000</Text>
                    </TouchableOpacity>
                  </View>
                </View>
            </View>
            <View style={styles.input}>
              <Text style={styles.textinput}>Atau Masukan Nominal Di sini</Text>
            <Input
                variant="filled"
                placeholder="Masukan Nominal"
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
                keyboardType="numeric"
                onChangeText={(value) => this.setState({amount: value})}
              />
            </View>
         </View>
         <View style={styles.buttonSignWraper}>
             <TouchableOpacity style={styles.signOut} onPress={this.onTopUp}>
                 <Text style={styles.signOutText}>Top Up Sekarang</Text>
             </TouchableOpacity>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
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
  boxWrapper2: {
    backgroundColor: 'white',
    height: 250,
    marginBottom: 10,
  },
  boxWrapper3: {
    backgroundColor: 'white',
    height: 150,
    marginBottom: 10,
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
  buttonAkun: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderWidth: 1,
    width: 300,
    height: 70,
    marginLeft: 20,
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
  buttonTopUp: {
    borderWidth: 1,
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonTopUpWraper: {
    flexDirection: 'row',
    width: 300,
  },
  input: {
    marginTop: 80,
    width: 310,
    justifyContent: 'center',
    marginLeft: 20,
  },
  textinput: {
    marginBottom: 8,
    marginLeft: 15,
  },
  buttonSignWraper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  signOut: {
      width: 300,
      height: 45,
      backgroundColor: '#694e99',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
  },
  signOutText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
  },
});
const mapStateToprops = state => ({
  users: state.users,
  auth: state.auth,
});

const mapDispatchToProps = {getProfile, topUpBalance};
export default connect(mapStateToprops, mapDispatchToProps)(TopUp);

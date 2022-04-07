/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { connect } from 'react-redux';
import { buyPulsa } from '../redux/actions/transactions';
import { clearMessageTransaction } from '../redux/actions/transactions';
import { showMessage } from 'react-native-flash-message';
import { getProductDetail } from '../redux/actions/transactions';

class KonfirmasiPembayaran extends Component {
  componentDidMount(){
    this.props.getProductDetail(this.props.auth.token, this.props.route.params.id)
  }
  onBuy = () => {
    this.props.buyPulsa(
      this.props.auth.token,
      this.props.route.params.id,
      this.props.route.params.product,
      this.props.route.params.tax,
      this.props.route.params.categoryProduct,
      this.props.route.params.phoneNumber,).then(()=>{
        if (this.props.transactions.errMsg === 'Saldo anda tidak cukup untuk membeli Pulsa'){
          showMessage({
            message: 'Saldo anda tidak cukup untuk membeli Pulsa',
            type: 'info',
            backgroundColor: '#870139',
            duration: 1000,
          });
          this.props.clearMessageTransaction();
        } else if (this.props.transactions.errMsg  === 'Product ini Habis'){
          showMessage({
            message: 'Product ini Habis',
            type: 'info',
            backgroundColor: '#870139',
            duration: 1000,
          });
          this.props.clearMessageTransaction();
        } else if (this.props.transactions.sccMsg  === 'Pembayaran berhasil'){
          showMessage({
            message: 'Pembayaran berhasil',
            type: 'info',
            backgroundColor: '#8f74b5',
            duration: 1000,
          });
          this.props.clearMessageTransaction();
          return this.props.navigation.reset({index: 0, routes: [{name: 'Home'}]});
        } 
      })
  }
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.upperbox}>
          <View style={styles.titleBox}>
            <Image
              style={styles.iconBox}
              source={require('../assets/images/logotri.png')}
            />
            <Text style={styles.titleText}>{this.props.route.params.categoryProduct}</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.payBox}>
            <Text style={styles.payText}>Pembayaran</Text>
            <TouchableOpacity>
              <Text style={styles.detailText}>Lihat Detail</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.rpText}>Rp</Text>
            <Text style={styles.priceText}>{(this.props.route.params.tax + this.props.transactions.productdetail.price).toLocaleString('en')}</Text>
          </View>
        </View>
        <View style={styles.boxMethod}>
          <View style={styles.boxMethodewrap}>
          <Text style={styles.titleText}>Metode Pembayaran</Text>
            {this.props.users.data.balance < (this.props.route.params.tax + this.props.transactions.productdetail.price) ?
             <View style={styles.boxCash}>
              <Text style={styles.payText}>OVO Cash</Text>
              <Text style={styles.cashText}>Rp.{this.props.users.data.balance.toLocaleString('en')} -- Tidak cukup</Text>
              <View style={styles.pointBox}>
                <Text style={styles.payText}>0 OVO Point</Text>
              </View>
            </View>
             :
             <View style={styles.boxCash}>
              <Text style={styles.payText2}>OVO Cash</Text>
              <Text style={styles.cashText2}>Rp.{this.props.users.data.balance.toLocaleString('en')}</Text>
              <View style={styles.pointBox}>
                <Text style={styles.payText2}>0 OVO Point</Text>
              </View>
            </View> 
             }
          </View>
        </View>
        <View style={styles.buttonbox}>
          <View style={styles.buttonwrap}>
            <TouchableOpacity style={styles.button} onPress={()=> this.onBuy()}>
              <Text style={styles.buttonText}>Bayar</Text>
            </TouchableOpacity>
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
    alignItems: 'center',
    width: '100%',
  },
  iconBox: {
    width: 40,
    height: 40,
  },
  titleBox: {
    width: '100%',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    backgroundColor: 'white',
  },
  line: {
    width: '90%',
    borderBottomWidth: 3,
    borderColor: '#f0f0f0',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  payText: {
    fontSize: 18,
    color: '#a1a1a1',
    fontWeight: 'bold',
  },
  payText2: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  detailText: {
    fontSize: 18,
    color: '#19e8ff',
    fontWeight: 'bold',
  },
  upperbox: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  payBox: {
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  priceBox: {
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    backgroundColor: 'white',
    marginTop: -10,
  },
  priceText: {
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 2,
  },
  rpText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: -10,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#694e99',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonbox: {
    width: '100%',
    height: 90,
    // display: "flex",
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonwrap: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  boxMethod: {
    width: '100%',
    flex: 2,
  },
  boxMethodewrap: {
    width: '100%',
    height: 200,
    // backgroundColor: 'yellow',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
  boxCash: {
    backgroundColor: 'white',
    width: '90%',
    height: 120,
    marginHorizontal: '3%',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 10,
    paddingHorizontal: '4%',
  },
  cashText: {
    fontSize: 14,
    color: '#a1a1a1',
    marginVertical: 4,
  },
  cashText2: {
    fontSize: 14,
    color: 'black',
    marginVertical: 4,
  },
  pointBox: {
    width: '100%',
    height: 40,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: '4%',
    justifyContent: 'center',
  },
});
const mapStateToprops = state => ({
  users: state.users,
  auth: state.auth,
  transactions: state.transactions,
});

const mapDispatchToProps = {buyPulsa, clearMessageTransaction, getProductDetail };
export default connect(mapStateToprops, mapDispatchToProps)(KonfirmasiPembayaran);

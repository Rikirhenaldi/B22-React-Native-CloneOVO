/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, Image, ActivityIndicator} from 'react-native';
import { FormControl, Input} from 'native-base';
import DashedLine from 'react-native-dashed-line';
import { connect } from 'react-redux';
import { getProducts, getProductDetail } from '../redux/actions/transactions';
import * as Animatable from 'react-native-animatable';

class Pulsa extends Component {
  constructor(props) {
    super(props);
    this.state =  {provider: 'Pulsa Tri', price: '', phoneNumber: '', product: '', tax: '', categoryProduct: '', data: {}, paymentbox: false, tax: 2000};
  }
  async componentDidMount(){
    const user = this.props.users?.data;
    const {token} = this.props.auth;
    // if(user.phone.startsWith("089")){
      await this.props.getProducts(1, token).then(()=> {
        this.setState({data: this.props.transactions.products});
        this.setState({phoneNumber : user.phone});
        console.log('ini data',this.state.data);
      });


    // }
  }
  onShowpayment = (productId) => {
    this.setState({paymentbox:true});
    this.props.getProductDetail(this.props.auth.token, productId);
  }

  onHidepayment = () => {
    this.setState({paymentbox:false});
  }
  render() {
    const user = this.props.users?.data;
    // console.log(this.props.route.params.id);
    return (
      <View style={styles.parent}>
        <View style={styles.parent2}>
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
                  value={this.state.phoneNumber}
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
        style={styles.box1}
        data={this.state.data}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => this.onShowpayment(item.id)} style={styles.productBox}>
            <View style={styles.textWrapper}>
            <Text style={styles.price}>Pulsa {item.price.toLocaleString('en')}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => String(index)}
        />
        </View>
        </View>
        {this.state.paymentbox === true ?
        <View style ={styles.boxpayment}>
          {this.props.transactions.productdetail.id ?
          <View style={styles.boxdetail}>
            <View style={styles.boxheaderwraper}>
              <Text style={styles.headerText}>Informasi Pelanggan</Text>
              <View style={styles.colbox}>
                <View style={styles.rowbox}>
                  <Text style={styles.textdetail}>Nomor Ponsel</Text>
                  <Text style={styles.textdetail} >{this.state.phoneNumber}</Text>
                </View>
                <View style={styles.rowbox}>
                <Text style={styles.textdetail}>Voucher Tri</Text>
                <Text style={styles.textdetail}>{this.props.transactions.productdetail.price.toLocaleString('en')}</Text>
                </View>
              </View>
            </View>

            <View>
              <Text style={styles.headerText}>Detail Pembayaran</Text>
              <View style={styles.colbox}>
                <View style={styles.rowbox}>
                  <Text style={styles.textdetail}>Harga Voucher</Text>
                  <Text style={styles.textdetail} >Rp.{this.props.transactions.productdetail.price.toLocaleString('en')}</Text>
                </View>
                <View style={styles.rowbox}>
                <Text style={styles.textdetail}>Biaya Transaksi</Text>
                <Text style={styles.textdetail}>Rp.{this.state.tax.toLocaleString('en')}</Text>
                </View>
                <DashedLine style={styles.dashed} dashLength={14} dashThickness={6} dashGap={4} />
                <View style={styles.rowbox}>
                <Text style={styles.title}>Total Pembayaran</Text>
                <Text style={styles.title}>Rp.{(this.state.tax + this.props.transactions.productdetail.price).toLocaleString('en')}</Text>
                </View>
                <View style={styles.rowbox}>
                <TouchableOpacity style={styles.buttongrey} onPress={()=> this.onHidepayment()}>
                  <Text style={styles.title}>Ubah</Text>
                </TouchableOpacity>
                <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.buttonpurpelanimasi}>
                <TouchableOpacity style={styles.buttonpurpel} onPress={()=> this.props.navigation.navigate('konfirmasi pembayaran',
                {id: this.props.transactions.productdetail.id,
                product: 'pulsa', categoryProduct: 'Pulsa Tri',
                tax: this.state.tax,
                phoneNumber: this.state.phoneNumber,
                })}>
                  <Text style={styles.title2}>Konfirmasi</Text>
                </TouchableOpacity>
                </Animatable.View>
                </View>
              </View>
            </View>
          </View>
        :
        <View style ={styles.boxIndicator}>
          <ActivityIndicator size={70} color="#694e99" />
        </View>
        }
        </View>
        : null
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  parent2: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    width: '100%',
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
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  name: {
    fontSize: 14,
    marginBottom: 10,
  },
  formBox: {
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  pulsaBox: {
    width: '85%',
    paddingHorizontal: 40,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 60,
    borderBottomWidth: 1,
  },
  productBox: {
    width: 155,
    height: 80,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#694e99',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    display: 'flex',
  },
  boxWrapper: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  box1: {
    backgroundColor: "white",
    width: '100%',
    paddingLeft: 8,
  },
  boxpayment: {
    // flex: 5,
    justifyContent: 'flex-end',
    width: '100%',
    height: 490,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: 'white',
    zIndex: 20,
    elevation: 8,
    alignItems: 'center',
  },
  boxIndicator: {
    height: 100,
    width: '90%',
    display: 'flex',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxdetail: {
    height: 450,
    width: '90%',
    display: 'flex',
    // backgroundColor: "blue"
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rowbox: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: "yellow",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  textdetail: {
    fontSize: 16,
  },
  boxheaderwraper: {
    // backgroundColor: "yellow",
    height: 140,
    marginBottom: 10,
  },
  dashed: {
    marginTop: 20,
    marginBottom: 15,
  },
  buttongrey: {
    width : '45%',
    backgroundColor: '#f0f0f0',
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonpurpel: {
    width : '100%',
    backgroundColor: '#694e99',
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonpurpelanimasi: {
    width : '45%',
    backgroundColor: '#694e99',
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
const mapStateToprops = state => ({
  users: state.users,
  auth: state.auth,
  transactions: state.transactions,
});
const mapDispatchToProps = {getProducts, getProductDetail};
export default connect(mapStateToprops, mapDispatchToProps)(Pulsa);

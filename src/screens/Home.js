/* eslint-disable prettier/prettier */
/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { getProfile } from '../redux/actions/users';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state =  {menu: [
      {name: 'PLN', source: require('../assets/images/lightning.png'), routeName: 'pln'},
      {name: 'Pulsa', source: require('../assets/images/smartphone.png'), routeName: 'pulsa'},
      {name: 'Voucher Game', source: require('../assets/images/controller.png'), routeName: 'vouchergame'},
      {name: 'Invest', source: require('../assets/images/growth.png'), routeName: 'invest'},
      {name: 'BPJS', source: require('../assets/images/shield.png'), routeName: 'bpjs'},
      {name: 'Internet', source: require('../assets/images/smarttv.png'), routeName: 'internet'},
      {name: 'Proteksi', source: require('../assets/images/umbrella.png'), routeName: 'protection'},
      {name: 'Pulsa', source: require('../assets/images/smartphone.png'), routeName: 'other'} ]},
      {promo: [
        {source: require('../assets/images/promo1.jpg'), routeName: 'pln'},
        {source: require('../assets/images/promo2.jpg'), routeName: 'pulsa'},
        {source: require('../assets/images/promo3.jpg'), routeName: 'vouchergame'},
        {source: require('../assets/images/promo4.jpg'), routeName: 'invest'}]};
  }
  componentDidMount(){
    const {token} = this.props.auth;
    this.props.getProfile(token);
  }
  render() {
    const {data} = this.props.users;
    return (
        <FlatList
         showsVerticalScrollIndicator={false}
         style={styles.parent}
         ListHeaderComponent={()=> (
          <View>
            <View style={styles.UpperBox}>
              <View style={styles.innerBox}>
                <Text style={styles.innerBoxTitle}>OVO Cash</Text>
                <View style={styles.innerBoxDirection}>
                  <Text style={styles.rp}>Rp</Text>
                  <Text style={styles.balance}>{data.balance?.toLocaleString('en')}</Text>
                </View>
                <View style={styles.innerBoxDirection}>
                  <Text style={styles.innerBoxTitle}>OVO Poin</Text>
                  <Text style={styles.poin}>0</Text>
                </View>
              </View>
            </View>
              <View style={styles.floatingBox}>
              <TouchableOpacity style={styles.iconBox} onPress={() => this.props.navigation.navigate('topup')}>
                <Image
                style={styles.iconBox}
                source={require('../assets/images/Topup.png')}
                />
                <Text style={styles.iconText}>Top Up</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconBox} onPress={() => this.props.navigation.navigate('transfers')}>
                <Image
                style={styles.iconBox}
                source={require('../assets/images/Transfers.png')}
                />
                <Text style={styles.iconText}>Transfers</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconBox} onPress={() => this.props.navigation.navigate('history')} >
                <Image
                style={styles.iconBox}
                source={require('../assets/images/History.png')}
                />
                <Text style={styles.iconText}>History</Text>
              </TouchableOpacity>
              </View>
          </View>
         )}
         ListFooterComponent={()=> (
          <View>
            <View style={styles.boxMenu}>
                <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={4}
                data={this.state.menu}
                renderItem={({item}) => (
                  <View style={styles.listMenu}>
                  <TouchableOpacity style={styles.circleIcon} onPress={() => this.props.navigation.navigate(item.routeName)}>
                    <Image
                  style={styles.iconBox}
                  source={item.source}
                  />
                  <Text style={styles.menuText}>{item.name}</Text>
                </TouchableOpacity>
                </View>
                )}
                keyExtractor={(item, index) => String(index)}
                />
                </View>
                <View style={styles.boxPromo}>
                  <View style={styles.titleDirection}>
                    <Text style={styles.titlePromo}>Info & Promo Special</Text>
                    <Text style={styles.seeMore}>Lihat Semua</Text>
                  </View>
                  <ScrollView horizontal >
                    <TouchableOpacity style={styles.buttonswipe}>
                      <Image
                      style={styles.swipe}
                      source={require('../assets/images/promo1.jpg')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonswipe}>
                      <Image
                      style={styles.swipe}
                      source={require('../assets/images/promo2.jpg')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonswipe}>
                      <Image
                      style={styles.swipe}
                      source={require('../assets/images/promo3.jpg')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                      style={styles.swipe}
                      source={require('../assets/images/promo4.jpg')}
                      />
                    </TouchableOpacity>
                  </ScrollView>
                </View>


                <View style={styles.boxPromo}>
                  <View style={styles.titleDirection}>
                    <Text style={styles.titlePromo}>Rekomendasi Pilihan</Text>
                  </View>
                  <ScrollView horizontal >
                    <TouchableOpacity style={styles.buttonswipe}>
                      <Image
                      style={styles.swipe}
                      source={require('../assets/images/promo1.jpg')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonswipe}>
                      <Image
                      style={styles.swipe}
                      source={require('../assets/images/promo2.jpg')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonswipe}>
                      <Image
                      style={styles.swipe}
                      source={require('../assets/images/promo3.jpg')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                      style={styles.swipe}
                      source={require('../assets/images/promo4.jpg')}
                      />
                    </TouchableOpacity>
                  </ScrollView>
                </View>
          </View>
         )}
        />
    );
  }
}
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    paddingBottom: 20,
  },
  UpperBox: {
    backgroundColor: '#694e99',
    height: 140,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
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
  boxMenu: {
    width: 320,
    height: 220,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 20,
    marginTop: -10,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  boxPromo: {
    height: 220,
    backgroundColor: 'white',
    marginTop: -10,
    padding: 20,
    marginBottom: 20,
  },
  boxPromoHeader: {
    flexDirection: 'row',
  },
  listMenu: {
    flexDirection: 'row',
  },
  circleIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    marginTop: 20,
  },
  menuText: {
    color: '#694e99',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
  titleDirection : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 320,
    height: 30,
  },
  titleDirection2 : {
    flexDirection: 'row',
    alignItems: 'center',
    width: 330,
    height: 30,
  },
  titlePromo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeMore: {
    color: 'blue',
  },
  swipe: {
    backgroundColor: 'grey',
    width: 320,
    height: 150,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonswipe: {
    marginRight: 20,
  },
  innerBox: {
    marginLeft: 20,
    marginTop: 10,
  },
  innerBoxTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  innerBoxDirection: {
    flexDirection: 'row',
    marginBottom: 2,
    marginTop: 2,
  },
  balance: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  poin: {
    color: 'gold',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 5,
  },
  rp: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 5,
  },
});

const mapStateToprops = state => ({
  users: state.users,
  auth: state.auth,
});

const mapDispatchToProps = {getProfile};
export default connect(mapStateToprops, mapDispatchToProps)(Home);

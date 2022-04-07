/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { authLogOut } from '../redux/actions/auth';
import { connect } from 'react-redux';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state =  {picture: null, name: '', phoneNumber: '' };
    }
    async componentDidMount(){
        const user = await this.props?.users?.data;
        this.setState({picture: user.picture});
        this.setState({name: user.name});
        this.setState({phoneNumber: user.phone});
        console.log(this.state);
    }
  render() {
    return (
      <ScrollView style={styles.parent}>
          <View style={styles.boxWrapper}>
            <View style={styles.profile}>
                <Image
                style={styles.image}
                source={{uri: this.state.picture}}
                />
                <View>
                    <Text style={styles.namebold}>{this.state.name}</Text>
                    <Text style={styles.phone}>{this.state.phoneNumber}</Text>
                </View>
            </View>
            <View style={styles.separator}/>
            <View style={styles.detail}>
                <Text style={styles.namebold}>OVO Premiere</Text>
                <TouchableOpacity>
                <Text style={styles.phone}>Lihat Detail ></Text>
                </TouchableOpacity>
            </View>
          </View>

          <View style={styles.boxWrapper}>
            <View style={styles.boxId}>
                <Text style={styles.ovoId}>OVO ID</Text>
            </View>
            <View style={styles.code}>
                <TouchableOpacity style={styles.button}>
                    <AntIcon name="qrcode" size={34} color={'#3c1e57'}/>
                    <Text style={styles.codeText}>QR Code</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <AntIcon name="barcode" size={34} color={'#3c1e57'}/>
                    <Text style={styles.codeText}>Loyalty</Text>
                </TouchableOpacity>
            </View>
          </View>
          <View style={styles.boxWrapper2}>
            <View style={styles.boxId}>
                <Text style={styles.ovoId}>Akun</Text>
            </View>
            <TouchableOpacity style={styles.buttonAkun} onPress={() => {this.props.navigation.navigate('editprofile');}}>
                <View style={styles.buttonValue} >
                    <FA5Icon name="user-edit" size={24} color={'#491a73'}/>
                    <Text style={styles.buttonText} >Edit Profile</Text>
                </View>
                <View>
                <FA5Icon name="chevron-right" size={20}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonAkun}>
                <View style={styles.buttonValue} >
                    <FA5Icon name="credit-card" size={24} color={'#491a73'}/>
                    <Text style={styles.buttonText} >My Card</Text>
                </View>
                <View>
                <FA5Icon name="chevron-right" size={20}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonAkun}>
                <View style={styles.buttonValue} >
                    <FA5Icon name="qrcode" size={24} color={'#491a73'}/>
                    <Text style={styles.buttonText} >Kode Promo</Text>
                </View>
                <View>
                <FA5Icon name="chevron-right" size={20}/>
                </View>
            </TouchableOpacity>
         </View>
         <View  style={styles.boxWrapper3}>
            <View style={styles.boxId}>
                <Text style={styles.ovoId}>Keamanan</Text>
            </View>
            <TouchableOpacity style={styles.buttonAkun}>
                <View style={styles.buttonValue} >
                    <FAIcon name="lock" size={24} color={'#491a73'}/>
                    <Text style={styles.buttonText}>Ubah Security Code</Text>
                </View>
                <View>
                <FA5Icon name="chevron-right" size={20}/>
                </View>
            </TouchableOpacity>
         </View>
         <View style={styles.boxWrapper4}>
            <View style={styles.boxId}>
                <Text style={styles.ovoId}>Tentang</Text>
            </View>
            <TouchableOpacity style={styles.buttonAkun}>
                <View style={styles.buttonValue} >
                    <Icon name="certificate-outline" size={24} color={'#491a73'}/>
                    <Text style={styles.buttonText}>Keuntungan pakai OVO</Text>
                </View>
                <View>
                <FA5Icon name="chevron-right" size={20}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonAkun}>
                <View style={styles.buttonValue} >
                    <FA5Icon name="lightbulb" size={24} color={'#491a73'}/>
                    <Text style={styles.buttonText}>Panduan OVO</Text>
                </View>
                <View>
                <FA5Icon name="chevron-right" size={20}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonAkun}>
                <View style={styles.buttonValue} >
                    <Ionicon name="md-newspaper-sharp" size={24} color={'#491a73'}/>
                    <Text style={styles.buttonText}>Syarat dan Ketentuan</Text>
                </View>
                <View>
                <FA5Icon name="chevron-right" size={20}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonAkun}>
                <View style={styles.buttonValue} >
                    <Ionicon name="shield-checkmark-sharp" size={24} color={'#491a73'}/>
                    <Text style={styles.buttonText}>Kebijakan Privasi</Text>
                </View>
                <View>
                <FA5Icon name="chevron-right" size={20}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonAkun}>
                <View style={styles.buttonValue} >
                    <AntIcon name="questioncircle" size={24} color={'#491a73'}/>
                    <Text style={styles.buttonText}>Pusat Bantuan</Text>
                </View>
                <View>
                <FA5Icon name="chevron-right" size={20}/>
                </View>
            </TouchableOpacity>
         </View>
         <View style={styles.buttonSignWraper}>
             <TouchableOpacity onPress={this.props.authLogOut} style={styles.signOut}>
                 <Text style={styles.signOutText}>Sign Out</Text>
             </TouchableOpacity>
         </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    boxWrapper: {
        backgroundColor: 'white',
        height: 150,
        marginBottom: 10,
    },
    boxWrapper2: {
        backgroundColor: 'white',
        height: 200,
        marginBottom: 10,
    },
    boxWrapper3: {
        backgroundColor: 'white',
        height: 120,
        marginBottom: 10,
    },
    boxWrapper4: {
        backgroundColor: 'white',
        height: 320,
        marginBottom: 10,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,

    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 200,
        height: 80,
        marginTop: 20,
    },
    boxId: {
        width: 200,
        height: 30,
        marginTop: 20,
    },
    namebold: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    ovoId: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    phone: {
        color: 'grey',
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        width: '90%',
        marginLeft: 20,
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        width: '90%',
        marginLeft: 20,
    },
    code: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        width: '90%',
        marginLeft: 20,
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
    codeText : {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
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
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    buttonSignWraper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 10,
    },
    signOut: {
        width: 300,
        height: 50,
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
    users : state.users,
});

const mapDispatchToProps = {authLogOut};

export default connect(mapStateToprops, mapDispatchToProps)(Profile);

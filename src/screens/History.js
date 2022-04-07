/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import { FormControl, Input} from 'native-base';
import { connect } from 'react-redux';
import { getHistoryTransfer } from '../redux/actions/history';

class History extends Component {
  constructor(props){
    super(props);
    this.state = { searchByNumber: 0 }
  }
  componentDidMount(){
    this.props.getHistoryTransfer(this.props.auth.token, this.state.searchByNumber)

  }
  render() {
    return (
      <View style={styles.parent}>
        <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.parent}
        ListHeaderComponent={()=> (
          <View style={styles.upperBox}>
            <View>
            <Input
                style={styles.button2}
                w="100%"
                p={3}
                placeholder="search history transfer"
                placeholderTextColor="grey"
                color="grey"
                variant="rounded"
                borderColor= "#694e99"
                onChangeText={value=> this.setState({searchByNumber: value})}
            />
            </View>
            <View style={styles.choiceBox}>
              <TouchableOpacity style={styles.buttonUnderline}>
                <Text style={styles.choiceText}>Transfers</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonNoUnderline}>
                <Text style={styles.choiceText}>Transactions</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        // renderItem={({item})=> (
        //   <View>
        //     <Text>Transfer to</Text>
        //   </View>
        // )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    width: '100%',
  },
  upperBox: {
    width: "100%",
    height: 135,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  choiceBox: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: "100%",
    height: 50,
    alignItems: "center",
    marginTop: 20,
  },
  choiceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonUnderline: {
    width: '50%',
    borderBottomWidth: 5,
    borderBottomColor: "#694e99",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonNoUnderline: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const mapStateToprops = state => ({
  users: state.users,
  auth: state.auth,
  transactions: state.transactions,
});

const mapDispatchToProps = {getHistoryTransfer};
export default connect(mapStateToprops, mapDispatchToProps)(History)
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeBaseProvider} from 'native-base';
import Headers from './src/components/Headers';
import Home from './src/screens/Home';
import Welcome from './src/screens/Welcome';
import TopUp from './src/screens/TopUp';
import Transfers from './src/screens/Transfers';
import History from './src/screens/History';
import Pln from './src/screens/Pln';
import Pulsa from './src/screens/Pulsa';
import VoucherGame from './src/screens/VoucherGame';
import Invest from './src/screens/Invest';
import Bpjs from './src/screens/Bpjs';
import SignOrLogin from './src/screens/SignOrLogin';
import Login from './src/screens/Login';
import Sign from './src/screens/Sign';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Notifications from './src/screens/Notifications';
import Profile from './src/screens/Profile';
import ViaOvo from './src/screens/ViaOvo';
import {connect} from 'react-redux';
// import { authLogin } from './src/redux/actions/auth';
import FlashMessage from 'react-native-flash-message';
import EditProfile from './src/screens/EditProfile';
import LoginPin from './src/screens/LoginPin';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#694e99',
        inactiveTintColor: 'grey',
        labelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
        style: {height: 65, paddingBottom: 8},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Deals"
        component={Home}
        options={{
          tabBarLabel: 'Deals',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="pricetag" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Home}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="scan-circle-sharp" color={color} size={36} />
          ),
        }}
      />
      <Tab.Screen
        name="Finance"
        component={Home}
        options={{
          tabBarLabel: 'Finance',
          tabBarIcon: ({color, size}) => (
            <FoundationIcon name="bitcoin-circle" color={color} size={34} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <FAIcon name="user-circle" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};

class App extends Component {
  render() {
    const example = null;
    const {token} = this.props.auth;
    return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="welcome">
            {token === null || token === undefined ? (
              <React.Fragment>
                <Stack.Screen
                  component={Welcome}
                  options={{
                    title: null,
                    cardStyle: {backgroundColor: 'transparent'},
                    headerTransparent: true,
                  }}
                  name="welcome"
                />
                <Stack.Screen
                  options={{
                    title: null,
                    cardStyle: {backgroundColor: 'transparent'},
                    headerTransparent: true,
                  }}
                  name="signorlogin"
                  component={SignOrLogin}
                />
                <Stack.Screen
                  options={{
                    title: null,
                    cardStyle: {backgroundColor: 'transparent'},
                    headerTransparent: true,
                  }}
                  name="login"
                  component={Login}
                />
                <Stack.Screen
                  options={{
                    title: null,
                    cardStyle: {backgroundColor: 'transparent'},
                    headerTransparent: true,
                  }}
                  name="signup"
                  component={Sign}
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Stack.Screen
                  component={LoginPin}
                  name="loginpin"
                  options={{
                    header: Headers,
                    cardStyle: {backgroundColor: '#694e99'},
                  }}
                />
                <Stack.Screen
                  component={BottomTab}
                  name="Home"
                  options={{
                    header: Headers,
                    cardStyle: {backgroundColor: '#694e99'},
                  }}
                />
                <Stack.Screen
                  component={TopUp}
                  options={{
                    title: 'Top up',
                    headerTitleStyle: {color: 'white'},
                    headerStyle: {backgroundColor: '#694e99'},
                    headerTintColor: 'white',
                  }}
                  name="topup"
                />
                <Stack.Screen
                  component={Transfers}
                  options={{
                    title: 'Transfers',
                    headerTitleStyle: {color: 'white'},
                    headerStyle: {backgroundColor: '#694e99'},
                    headerTintColor: 'white',
                  }}
                  name="transfers"
                />
                <Stack.Screen
                  component={ViaOvo}
                  options={{
                    title: 'Ke Sesama OVO',
                    headerTitleStyle: {color: 'white'},
                    headerStyle: {backgroundColor: '#694e99'},
                    headerTintColor: 'white',
                  }}
                  name="viaovo"
                />
                <Stack.Screen
                  component={History}
                  options={{
                    title: 'History',
                    headerTitleStyle: {color: 'white'},
                    headerStyle: {backgroundColor: '#694e99'},
                    headerTintColor: 'white',
                  }}
                  name="history"
                />
                <Stack.Screen
                  component={Pln}
                  options={{
                    header: Headers,
                    cardStyle: {backgroundColor: 'transparent'},
                    headerTransparent: true,
                  }}
                  name="pln"
                />
                <Stack.Screen
                  component={Pulsa}
                  options={{
                    header: Headers,
                    title: 'Pulsa',
                    cardStyle: {backgroundColor: '#694e99'},
                    headerTransparent: false,
                  }}
                  name="pulsa"
                  
                />
                <Stack.Screen
                  component={VoucherGame}
                  options={{
                    header: Headers,
                    cardStyle: {backgroundColor: 'transparent'},
                    headerTransparent: true,
                  }}
                  name="vouchergame"
                />
                <Stack.Screen
                  component={Invest}
                  options={{
                    header: Headers,
                    cardStyle: {backgroundColor: 'transparent'},
                    headerTransparent: true,
                  }}
                  name="invest"
                />
                <Stack.Screen
                  component={Bpjs}
                  options={{
                    header: Headers,
                    cardStyle: {backgroundColor: 'transparent'},
                    headerTransparent: true,
                  }}
                  name="bpjs"
                />
                <Stack.Screen
                  component={Notifications}
                  options={{
                    header: Headers,
                    cardStyle: {backgroundColor: 'transparent'},
                    headerTransparent: true,
                  }}
                  name="notification"
                />
                <Stack.Screen
                  component={Profile}
                  options={{
                    header: Headers,
                    cardStyle: {backgroundColor: 'transparent'},
                    headerTransparent: true,
                  }}
                  name="profile"
                />
                <Stack.Screen
                  component={EditProfile}
                  options={{
                    title: 'Edit Profile',
                    headerTitleStyle: {color: 'white'},
                    headerStyle: {backgroundColor: '#694e99'},
                    headerTintColor: 'white',
                  }}
                  name="editprofile"
                />
              </React.Fragment>
            )}
          </Stack.Navigator>
          <FlashMessage position="top" />
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}
const mapStateToprops = state => ({
  auth: state.auth,
});
export default connect(mapStateToprops, null)(App);

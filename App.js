import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator  from './AppNavigator';
// import SplashScreen from 'react-native-splash-screen';
// import Geolocation from '@react-native-community/geolocation';
import {
  View, 
  Text,  
  StyleSheet, 
  Image,
  PermissionsAndroid,
  Platform,
  YellowBoxs,
  YellowBox
} from 'react-native';


const AppContainer = createAppContainer(AppNavigator);
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);

export default class App extends React.Component {
  constructor(){
    super();
  }
  
  render() {
    return <AppContainer />;
  
  }
}
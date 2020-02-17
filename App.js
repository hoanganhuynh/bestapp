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
  Platform
} from 'react-native';


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  // state = {
  //   currentLongitude: 'unknown',//Initial Longitude
  //   currentLatitude: 'unknown',//Initial Latitude
  // }
  // componentDidMount = () => {
  //   var that = this;
  //   //Checking for the permission just after component loaded
  //   if(Platform.OS === 'android'){
  //     this.callLocation(that);
  //   }else{
  //     async function requestLocationPermission() {
  //       try {
  //         const granted = await PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
  //             'title': 'Location Access Required',
  //             'message': 'This App needs to Access your location'
  //           }
  //         )
  //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //           // Kiểm tra, nếu cho phép..
  //           that.callLocation(that);
  //         } else {
  //           alert("Permission Denied");
  //         }
  //       } catch (err) {
  //         alert("err",err);
  //         console.warn(err)
  //       }
  //     }
  //     requestLocationPermission();
  //   }    
  //   }
  //   callLocation(that){
  //   //alert("callLocation Called");
  //     Geolocation.getCurrentPosition(
  //       // cung cấp location current
  //         (position) => {
  //           const currentLongitude = JSON.stringify(position.coords.longitude);
  //           // get Kinh độ location json
  //           const currentLatitude = JSON.stringify(position.coords.latitude);
  //           // get Vĩ độ location json
  //           that.setState({ currentLongitude:currentLongitude });
  //           //Setting State Longitude to re re-render the Longitude Text
  //           that.setState({ currentLatitude:currentLatitude });
  //           //Setting state Latitude to re re-render the Longitude Text
  //         },
  //         (error) => alert(error.message),
  //         { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //     );
  //     that.watchID = Geolocation.watchPosition((position) => {
  //       //Cung cấp vị trí được thay đổi
  //         console.log(position);
  //         const currentLongitude = JSON.stringify(position.coords.longitude);
  //         //getting the Longitude from the location json
  //         const currentLatitude = JSON.stringify(position.coords.latitude);
  //         //getting the Latitude from the location json
  //         that.setState({ currentLongitude:currentLongitude });
  //        //Setting state Longitude to re re-render the Longitude Text
  //         that.setState({ currentLatitude:currentLatitude });
  //        //Setting state Latitude to re re-render the Longitude Text
  //     });
  //   }

  // componentWillUnmount = () => {
  //     Geolocation.clearWatch(this.watchID);
  //}
  render() {
    return <AppContainer />;
  }
}
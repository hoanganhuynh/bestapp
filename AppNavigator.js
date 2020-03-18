import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Places from './screens/places';
import Place from './screens/place';
import Home from './screens/Home';
// import AutoCompleteSearch from './screens/autocompletesearch'

const AppNavigator = createStackNavigator({
  Places: {
    screen: Home,
    name: 'Home',
  },
  Place: {
    screen: Place,
  },
  // AutoCompleteSearch: {
  //     screen: AutoCompleteSearch
  // }
});

export default AppNavigator;

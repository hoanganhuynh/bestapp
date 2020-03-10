/*This is an example of AutoComplete Input/ AutoSuggestion Input*/
import React, {Component} from 'react';
//import react in our code.
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
//import all the components we are going to use.
import Autocomplete from 'react-native-autocomplete-input';
import Axios from 'axios';
//import Autocomplete component
const API = 'https://swapi.co/api';
//Demo base API to get the data for the Autocomplete suggestion
class AutoCompleteInput extends Component {
  constructor(props) {
    super(props);
    //Initialization of state
    //films will contain the array of suggestion
    //query will have the input from the autocomplete input
    this.state = {
      query: '',
      places: [],
    };
  }
  placesGoogle(query) {
    if (query === '') {
      return;
    }
    Axios.get(
      `https://graph.facebook.com/v3.2/search?
      type=place&q=${query}
      &limit=10
      &center=10.776944444444,106.69527777778&distance=1000
      &fields=name,checkins,website,cover
      &categories=["FOOD_BEVERAGE", "SHOPPING_RETAIL"]
      &access_token=1065422447180107|Tog5AXGJeQu6D3GivvCL0AQEbEI`)
      .then(res => res.data.data)
      .then(places => {
        this.setState({places});
      });
  }
  handleData(query) {
    console.log(query);
    this.placesGoogle(query);
  }
  render() {
    const {query, places} = this.state;
    // const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
    return (
      <View style={styles.container}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          //data to show in suggestion
          data={places}
          //default value if you want to set something in input
          defaultValue={query}
          /*onchange of the text changing the state of the query which will trigger
          the findFilm method to show the suggestions*/
          onChangeText={text => this.handleData(text)}
          placeholder="Enter the film title"
          renderItem={({item}) => (
            //you can change the view you want to show in suggestion from here
            <TouchableOpacity
              onPress={() => this.setState({query: item.title})}>
              <Text key={item.id} style={styles.itemText}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.descriptionContainer}>
          {places.length > 0 ? (
            <Text style={styles.infoText}>{this.state.query}</Text>
          ) : (
            <Text style={styles.infoText}>Enter The Places Title</Text>
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    padding: 16,
    marginTop: 40,
  },
  autocompleteContainer: {
    backgroundColor: '#ffffff',
    borderWidth: 0,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 2,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
  },
});
export default AutoCompleteInput;

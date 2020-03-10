import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Map from './Map';
/*
The component is child component for location search 
the selected location can be stored in state variable
*/
export default class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      loc: '',
      };
    }
    /// state value updated from child component map;
    handler(arg) {
      this.setState({
        loc: arg
      });
      return;
    }
    render() {
      return (
        <View>
          <View>
            <Text>Name</Text>
            <TextInput />
          </View>
          <View>
            <Text>Address</Text>
            <TextInput />
          </View>
          <View>
            <Text>Description</Text>
            <TextInput />
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}> {this.state.loc}</Text>
          </View>
          <View>
            <Map handler={this.handler.bind(this)} />
          </View>
        </View>
      );
    }
  }
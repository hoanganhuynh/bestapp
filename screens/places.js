import React from 'react';

import {
  Text,
  StyleSheet,
  FlatList,
  View,
  Picker,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
  Button,
} from 'react-native';

import PlacesList from '../components/placesItem';
import {CustomButton} from '../components/customBtn';

import {Header, SearchBar} from 'react-native-elements';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {GoogleAutoComplete} from 'react-native-google-autocomplete';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import LocationItem from '../components/LocationItem';
import GooglePlacesAutoBar from '../src/components/GooglePlacesAutoBar';
// import API_KEY from '../key';

export default class Places extends React.Component {
  state = {
    search: 'xxx',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  static navigationOptions = {
    // title: 'Trang chủ',
    headerShown: false,
    header: () => {
      return null;
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      places: [
        {id: 1, name: 'The Coffee House', address: '57, Xã Vĩnh Bình, Chợ Lách, Bến Tre' },
        {id: 2, name: 'Hủ Tiếu Mực Đặc Sản Bến Tre', address: '57, Xã Vĩnh Bình, Chợ Lách, Bến Tre' },
        {id: 3, name: 'Phở 16', address: '11A, 3/2, Xuân Khánh, Ninh Kiều, Tp Cần Thơ' },
        {id: 4, name: 'My Queen Coffee', address: '8/4/12, Trần Hưng Đạo, Xuân Khánh, Ninh Kiều, Tp Cần Thơ' },
        {id: 5, name: 'Star 1 Coffee', address: '47 Mậu Thân, Xuân Khánh, Ninh Kiều, Tp Cần Thơ' },
        {id: 6, name: 'Star 2 Coffee', address: '47 Mậu Thân, Xuân Khánh, Ninh Kiều, Tp Cần Thơ' },
        {id: 7, name: 'Star 3 Coffee', address: '47 Mậu Thân, Xuân Khánh, Ninh Kiều, Tp Cần Thơ' },
        {id: 8, name: 'Star 4 Coffee', address: '47 Mậu Thân, Xuân Khánh, Ninh Kiều, Tp Cần Thơ' },
      ],};
  }
  render() {
    const { search } = this.state;
    const { navigation } = this.props;
    const { places } = this.state;
    return (
      <View>
        <ScrollView>
          <Header
            placement="left"
            centerComponent={{ text: 'Suggest Place App', style: { color: '#fff', fontSize: 25, marginBottom: 18, fontFamily: "Montserrat-Medium"} }}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ['#0055ff', "#0055ff"],
              start: { x: 0, y: 0 },
              end: { x: 1, y: 0 },
            }}
          />
          <View style={{ backgroundColor: '#fff', paddingHorizontal: 12}}>

            {/*<SearchBar*/}
            {/*placeholder="Nhập địa điểm..."*/}
            {/*onChangeText={this.updateSearch}*/}
            {/*value={search}*/}
            {/*platform='android'*/}
            {/*/>*/}
            <GoogleAutoComplete
              apiKey="AIzaSyBLHmn1n0S57YXvJF9o_NEuyE7BJgrH_QM"
              debounce={500}>
              {({
                handleTextChange,
                locationResults,
                  fetchDetails,
                  isSearching,
                  inputValue
                }) => (
                <React.Fragment>
                  <View>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Search a places.."
                      onChangeText={handleTextChange}
                      value={inputValue}
                    />
                    {/* <Button title='Clear' onPress={} /> */}
                  </View>
                  {isSearching && <ActivityIndicator />}
                  <ScrollView>
                    {locationResults.map(el => (
                      <LocationItem
                        {...el}
                        key={el.id}
                        fetchDetails={fetchDetails}
                      />
                    ))}
                  </ScrollView>
                </React.Fragment>
              )}
            </GoogleAutoComplete>
            <GooglePlacesAutoBar/>
            <View style={styles.labelDropdown}>
              <Icon
                style={styles.customIco}
                name="map"
                size={15}
                color="#0055ff"
              />
              <Text style={styles.labelNameDropdown}>Nơi bạn muốn ghé thăm?</Text>
            </View>
            <Picker
              selectedValue={this.state.placeEat}
              style={styles.dropdownCustom}
              mode='dropdown'
              onValueChange={(itemValue, itemIndex) =>
                this.setState({placeEat: itemValue})
              }>
              <Picker.Item label="Quán ăn bình dân" value="PĐ" />
              <Picker.Item label="Bãi biển" value="NK" />
              <Picker.Item label="Quán ăn lề đường" value="CĐ" />
              <Picker.Item label="Nhà hàng" value="OM" />
              <Picker.Item label="Homestay" value="TN" />
            </Picker>

            <View style={styles.labelDropdown}>
              <Icon
                style={styles.customIco}
                name="coffee"
                size={15}
                color="#0055ff"
              />
              <Text style={styles.labelNameDropdown}>Bạn muốn ăn hay uống?</Text>
            </View>
            <Picker
              selectedValue={this.state.food}
              style={styles.dropdownCustom}
              mode='dropdown'
              onValueChange={(itemValue, itemIndex) =>
                this.setState({food: itemValue})
              }>
              <Picker.Item label="Trà sữa" value="TS" />
              <Picker.Item label="Bánh" value="B" />
              <Picker.Item label="Đồ nướng" value="ĐN" />
              <Picker.Item label="Lẫu" value="L" />
              <Picker.Item label="Trà" value="T" />
            </Picker>

            <View style={styles.labelDropdown}>
              <Icon
                style={styles.customIco}
                name="times-circle"
                size={15}
                color="#0055ff"
              />
              <Text style={styles.labelNameDropdown}>Từ khoá không mong muốn</Text>
            </View>
            <TextInput
              style={styles.inpNotChar}
              placeholder='Mỗi từ khoá cách nhau bởi dấu ,'
            />

            <CustomButton
              title="Tìm kiếm"
              onPress={() => Alert.alert(`Tính năng nữa làm sau...`)}
              style={{ /* some styles for button */ }}
              textStyle={{ /* styles for button title */ }}
            />

            <Text style={styles.resSearch}>'{search}' có {places.length} kết quả tìm thấy..</Text>
            <Text style={styles.recentPlace}>Địa điểm gần bạn</Text>
            <FlatList
              data={places}
              renderItem={({ item }) =>
                <PlacesList
                  place={item}
                  onPress={() => navigation.navigate('Place', {
                    placeName: item.name,
                    addressPlace: item.address
                  })}
                />
              }
              keyExtractor={item => item.id}
              contentContainerStyle={styles.container}
            />

          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    marginBottom: 25
  },
  resSearch: {
    color: '#222',
    marginTop: 12,
    fontSize: 16,
    fontFamily: "Montserrat-Medium"
  },
  dropdownCustom: {
    fontSize: 18,
    color: '#777',
    fontFamily: "Montserrat-Medium"
  },
  labelDropdown: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 8,
  },
  customIco: {
    marginRight: 10,
    marginTop: 4,
    color: "#0055ff"
  },
  labelNameDropdown: {
    fontSize: 17,
    fontFamily: "Montserrat-Medium",
    color: "#0055ff"
  },
  inpNotChar: {
    backgroundColor: '#fafafa',
    marginTop: 6,
    marginBottom: 6,
    color: '#555',
    fontSize: 17,
    paddingHorizontal: 12
  },
  recentPlace: {
    marginTop: 30,
    fontSize: 25,
    fontFamily: 'Montserrat-Medium',
    color: '#111'
  },
  textInput: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    paddingHorizontal: 16,
    marginTop: 10,
  },
});

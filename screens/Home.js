import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Axios from 'axios';
import {SearchBar, Button, Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FlatList} from 'react-native-gesture-handler';

class Home extends Component {
  static navigationOptions = {
    headerShown: false,
    header: () => {
      return null;
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      places: [
        {
          formatted_address:
            '23 Nguyễn Công Trứ, Phường 1, Vị Thanh, Hậu Giang, Vietnam',
          geometry: {location: [Object], viewport: [Object]},
          icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png',
          id: '5f1f664bf3f93862065289feb41744b397da827d',
          name: 'Quán Trà Sữa Halu 1',
          photos: [[Object]],
          place_id: 'ChIJ60cYOhDpoDERLkhSn6w-mgk',
          plus_code: {
            compound_code: 'QFH8+GH Vị Thanh, Hau Giang',
            global_code: '6PX7QFH8+GH',
          },
          rating: 4.4,
          reference: 'ChIJ60cYOhDpoDERLkhSn6w-mgk',
          types: ['cafe', 'food', 'point_of_interest', 'establishment'],
          user_ratings_total: 10,
        },
        {
          formatted_address:
            'Số 21 Nguyễn Công Trứ, Phường 1, Vị Thanh, Hậu Giang, Vietnam',
          geometry: {location: [Object], viewport: [Object]},
          icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png',
          id: '48bcecd767742d3e94206a8ee62a40b2ab99c591',
          name: 'trà sữa Mon tea',
          opening_hours: {open_now: true},
          place_id: 'ChIJdSZ6ptnpoDEREygMJuVEgxQ',
          plus_code: {
            compound_code: 'QFH8+JM Vị Thanh, Hau Giang',
            global_code: '6PX7QFH8+JM',
          },
          rating: 5,
          reference: 'ChIJdSZ6ptnpoDEREygMJuVEgxQ',
          types: [
            'cafe',
            'food',
            'point_of_interest',
            'store',
            'establishment',
          ],
          user_ratings_total: 1,
        },
        {
          formatted_address: 'Nàng Mau, Vị Thủy District, Hau Giang, Vietnam',
          geometry: {location: [Object], viewport: [Object]},
          icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png',
          id: '92cf2085d2abe776fb437d0a1a3676268ebe9de7',
          name: 'Trà Sữa CR7',
          opening_hours: {open_now: true},
          photos: [[Object]],
          place_id: 'ChIJxd9AHhrvoDEReH2ASo8PyY8',
          plus_code: {
            compound_code: 'QG3H+9X tt. Nàng Mau, Vị Thanh, Hau Giang',
            global_code: '6PX7QG3H+9X',
          },
          rating: 4.4,
          reference: 'ChIJxd9AHhrvoDEReH2ASo8PyY8',
          types: ['cafe', 'food', 'point_of_interest', 'establishment'],
          user_ratings_total: 19,
        },
        {
          formatted_address: 'Hòa Lợi, Giồng Riềng, Kien Giang 90000, Vietnam',
          geometry: {location: [Object], viewport: [Object]},
          icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png',
          id: 'b3a09f7ca79d040b20276dd19811225ce6ad9eaa',
          name: 'Trà Sữa Song Phúc',
          photos: [[Object]],
          place_id: 'ChIJHUA4gZuUoDER0AItjEs5BpY',
          plus_code: {
            compound_code: 'WFFV+PQ Hòa Lợi, Giồng Riềng, Kien Giang',
            global_code: '6PX7WFFV+PQ',
          },
          rating: 4.3,
          reference: 'ChIJHUA4gZuUoDER0AItjEs5BpY',
          types: ['cafe', 'food', 'point_of_interest', 'establishment'],
          user_ratings_total: 3,
        },
        {
          formatted_address: 'Phường IV, Vị Thanh, Hau Giang, Vietnam',
          geometry: {location: [Object], viewport: [Object]},
          icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png',
          id: 'df5d9a98e8ede9933763400292f7bda081b79757',
          name: 'Trà Sữa Trân Châu,THCS Châu Văn Liêm',
          place_id: 'ChIJJXjRmW3poDER0zvZGdMakqg',
          plus_code: {
            compound_code: 'QFR8+CM Vị Thanh, Hau Giang',
            global_code: '6PX7QFR8+CM',
          },
          rating: 0,
          reference: 'ChIJJXjRmW3poDER0zvZGdMakqg',
          types: [
            'cafe',
            'food',
            'point_of_interest',
            'store',
            'establishment',
          ],
          user_ratings_total: 0,
        },
        {
          formatted_address:
            'Đường Nguyễn Tri Phương, Nàng Mau, Vị Thuỷ, Hậu Giang, Vietnam',
          geometry: {location: [Object], viewport: [Object]},
          icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png',
          id: 'afdbc0fe5c333d8f4d15da9b9a69a1b86d387f49',
          name: 'Trà Sữa Diễm Thúy',
          place_id: 'ChIJKblEQBfvoDER_B9PGuk0mh0',
          plus_code: {
            compound_code: 'QG2H+CC tt. Nàng Mau, Vị Thanh, Hau Giang',
            global_code: '6PX7QG2H+CC',
          },
          rating: 3.6,
          reference: 'ChIJKblEQBfvoDER_B9PGuk0mh0',
          types: ['cafe', 'food', 'point_of_interest', 'establishment'],
          user_ratings_total: 7,
        },
        {
          formatted_address:
            'Cạnh trường Mẫu Giáo Hương Sen, ấp 6, Phụng Hiệp, Hậu Giang, Vietnam',
          geometry: {location: [Object], viewport: [Object]},
          icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png',
          id: 'c449ae4f2fd9fbb1fb014a0b18576f5cf01832b7',
          name: 'Trà Sữa STAR',
          opening_hours: {open_now: true},
          photos: [[Object]],
          place_id: 'ChIJq375jyH3oDERtlFTqHqpdwg',
          plus_code: {
            compound_code: 'QJGX+RQ Hòa An, Phụng Hiệp District, Hau Giang',
            global_code: '6PX7QJGX+RQ',
          },
          rating: 2.5,
          reference: 'ChIJq375jyH3oDERtlFTqHqpdwg',
          types: ['cafe', 'food', 'point_of_interest', 'establishment'],
          user_ratings_total: 2,
        },
        {
          formatted_address:
            'Đường QL61, Nàng Mau, Vị Thuỷ, Hậu Giang, Vietnam',
          geometry: {location: [Object], viewport: [Object]},
          icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png',
          id: '3009eff367a5ee12529b8d40f5dfdf10614db828',
          name: 'Trà sữa và ăn vặt MIN',
          opening_hours: {open_now: true},
          place_id: 'ChIJSQn4JVfpoDERn2tVNazQT8o',
          plus_code: {
            compound_code: 'RC4W+36 Vị Thanh, Hau Giang',
            global_code: '6PX7RC4W+36',
          },
          rating: 0,
          reference: 'ChIJSQn4JVfpoDERn2tVNazQT8o',
          types: ['cafe', 'food', 'point_of_interest', 'establishment'],
          user_ratings_total: 0,
        },
        {
          formatted_address:
            'TT. Long Mỹ, Long Mỹ District, Hau Giang, Vietnam',
          geometry: {location: [Object], viewport: [Object]},
          icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png',
          id: '496fd17aed6b4911f8cd8dba386d43610f2b0be7',
          name: 'Trà Sữa Paris',
          opening_hours: {open_now: true},
          photos: [[Object]],
          place_id: 'ChIJf_9TKRbloDERE0E2a3pUim4',
          plus_code: {
            compound_code: 'MHQC+C6 Long Mỹ, Long Mỹ District, Hau Giang',
            global_code: '6PX7MHQC+C6',
          },
          rating: 4.2,
          reference: 'ChIJf_9TKRbloDERE0E2a3pUim4',
          types: ['cafe', 'food', 'point_of_interest', 'establishment'],
          user_ratings_total: 5,
        },
        {
          formatted_address: 'Trường Xuân B, Thới Lai, Cần Thơ, Vietnam',
          geometry: {location: [Object], viewport: [Object]},
          icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png',
          id: '3199c981ab1a903ac77461ff8479f2438cc56d8b',
          name: 'Cafe Trà Sữa Y Lan',
          opening_hours: {open_now: true},
          photos: [[Object]],
          place_id: 'ChIJH-PM6-2ToDER2rPmaJj2QCk',
          plus_code: {
            compound_code: 'XG77+6C Trường Xuân, Thới Lai, Cần Thơ',
            global_code: '6PX7XG77+6C',
          },
          rating: 4,
          reference: 'ChIJH-PM6-2ToDER2rPmaJj2QCk',
          types: ['cafe', 'food', 'point_of_interest', 'establishment'],
          user_ratings_total: 4,
        },
        {
          formatted_address:
            'Đường Nguyễn Huệ, TT. Long Mỹ, Long Mỹ, Hậu Giang, Vietnam',
          geometry: {location: [Object], viewport: [Object]},
          icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png',
          id: '0ea7f1470cdc6275185f4de5ddd04a5b518a6854',
          name: 'Trà Sữa K162',
          opening_hours: {open_now: true},
          photos: [[Object]],
          place_id: 'ChIJqVJdmZ3loDERNluePuEEBGQ',
          plus_code: {
            compound_code: 'MHP9+66 Long Mỹ, Long Mỹ District, Hau Giang',
            global_code: '6PX7MHP9+66',
          },
          rating: 5,
          reference: 'ChIJqVJdmZ3loDERNluePuEEBGQ',
          types: ['cafe', 'food', 'point_of_interest', 'establishment'],
          user_ratings_total: 4,
        },
        {
          formatted_address:
            '98 Đoàn Thị Điểm, Phường 1, Vị Thanh, Hậu Giang, Vietnam',
          geometry: {location: [Object], viewport: [Object]},
          icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png',
          id: '715fb888e3f14187a1cc69962d037b8293a34b35',
          name: 'Rich Tea',
          opening_hours: {open_now: true},
          photos: [[Object]],
          place_id: 'ChIJfb2bGHHpoDERnwLffvsT2mc',
          plus_code: {
            compound_code: 'QFH8+W2 Vị Thanh, Hau Giang',
            global_code: '6PX7QFH8+W2',
          },
          rating: 4.2,
          reference: 'ChIJfb2bGHHpoDERnwLffvsT2mc',
          types: ['cafe', 'food', 'point_of_interest', 'establishment'],
          user_ratings_total: 40,
        },
        {
          formatted_address: 'Lộ Bà Đầm, TT. Thới Lai, Cờ Đỏ, Cần Thơ, Vietnam',
          geometry: {location: [Object], viewport: [Object]},
          icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png',
          id: '084951884feb3d6fceb75c1cd8f0f1df151d8d0f',
          name: 'Coffee milk tea _ Rio',
          opening_hours: {open_now: true},
          photos: [[Object]],
          place_id: 'ChIJ4QJJwHmQoDERkY61T3OF5KY',
          plus_code: {
            compound_code: '3H65+F4 Thới Lai town, Thới Lai, Cần Thơ',
            global_code: '7P273H65+F4',
          },
          rating: 3.4,
          reference: 'ChIJ4QJJwHmQoDERkY61T3OF5KY',
          types: ['cafe', 'food', 'point_of_interest', 'establishment'],
          user_ratings_total: 11,
        },
        {
          formatted_address: 'Tân Thạnh, Thới Lai, Cần Thơ, Vietnam',
          geometry: {location: [Object], viewport: [Object]},
          icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png',
          id: '91559355986dd7405abbe2c84f8f0beb596561e2',
          name: 'Trà Sữa Se7en Day',
          opening_hours: {open_now: true},
          photos: [[Object]],
          place_id: 'ChIJn6RBkoKRoDERLxcrx4ztsbY',
          plus_code: {
            compound_code: '3H75+RX Thới Lai town, Thới Lai, Cần Thơ',
            global_code: '7P273H75+RX',
          },
          rating: 3.6,
          reference: 'ChIJn6RBkoKRoDERLxcrx4ztsbY',
          types: ['cafe', 'food', 'point_of_interest', 'establishment'],
          user_ratings_total: 17,
        },
        {
          formatted_address:
            'TT. Giồng Riềng, Giồng Riềng, Kien Giang, Vietnam',
          geometry: {location: [Object], viewport: [Object]},
          icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png',
          id: '03c789ddf0557edad30b0c67c32a873db5ab4c4f',
          name: 'Quán trà sữa Mocha',
          photos: [[Object]],
          place_id: 'ChIJed76M624oDERNDP_CXPfGJc',
          plus_code: {
            compound_code: 'W867+V4 Giồng Riềng, Kien Giang',
            global_code: '6PX7W867+V4',
          },
          rating: 4,
          reference: 'ChIJed76M624oDERNDP_CXPfGJc',
          types: ['cafe', 'food', 'point_of_interest', 'establishment'],
          user_ratings_total: 8,
        },
        {
          formatted_address:
            '52F Đường 3/2, Xuân Khánh, Ninh Kiều, Cần Thơ, Vietnam',
          geometry: {location: [Object], viewport: [Object]},
          icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png',
          id: 'bc0c923a851ac729acb530d1c0ae5f18f6a8c26b',
          name: 'Trà sữa Home',
          opening_hours: {open_now: true},
          photos: [[Object]],
          place_id: 'ChIJf8cKkyOIoDERfzr0V_KlQpA',
          plus_code: {
            compound_code: '2QHF+9R Xuan Khanh, Ninh Kiều, Cần Thơ',
            global_code: '7P272QHF+9R',
          },
          rating: 4.6,
          reference: 'ChIJf8cKkyOIoDERfzr0V_KlQpA',
          types: ['cafe', 'food', 'point_of_interest', 'establishment'],
          user_ratings_total: 47,
        },
        {
          formatted_address:
            '140 Triệu Vĩnh Tường, Cây Dương, Phụng Hiệp, Hậu Giang, Vietnam',
          geometry: {location: [Object], viewport: [Object]},
          icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png',
          id: '6136ea16938892094e1c5294d0be3ed0af08c9c9',
          name: 'Quán Trà Sữa STAR',
          photos: [[Object]],
          place_id: 'ChIJWWtB-uL3oDERvAp-a2ODWX8',
          plus_code: {
            compound_code: 'QPJQ+RC Cây Dương, Phụng Hiệp District, Hau Giang',
            global_code: '6PX7QPJQ+RC',
          },
          rating: 0,
          reference: 'ChIJWWtB-uL3oDERvAp-a2ODWX8',
          types: ['cafe', 'food', 'point_of_interest', 'establishment'],
          user_ratings_total: 0,
        },
        {
          formatted_address:
            '35 Trần Chiên, Lê Bình, Cái Răng, Cần Thơ, Vietnam',
          geometry: {location: [Object], viewport: [Object]},
          icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png',
          id: '157391dbf6eb423a9d0c0850c1934b52640bac9b',
          name: 'Trà sữa D-up',
          opening_hours: {open_now: true},
          photos: [[Object]],
          place_id: 'ChIJJRBylIeJoDERCgFKUPzdVY8',
          plus_code: {
            compound_code: '2Q25+F3 Lê Bình, Cái Răng, Cần Thơ',
            global_code: '7P272Q25+F3',
          },
          rating: 4.9,
          reference: 'ChIJJRBylIeJoDERCgFKUPzdVY8',
          types: ['cafe', 'food', 'point_of_interest', 'establishment'],
          user_ratings_total: 15,
        },
        {
          formatted_address:
            'Đường 3-2, Đông Phước A, Ninh Kiều, Cần Thơ, Vietnam',
          geometry: {location: [Object], viewport: [Object]},
          icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png',
          id: '5c93d59b1fab0c3515404b182dff4050cf4a242e',
          name: 'Trà sữa M.Y.O',
          opening_hours: {},
          photos: [[Object]],
          place_id: 'ChIJJzWmpeeLoDERi8lX1gLPqSA',
          plus_code: {
            compound_code: 'WQRC+W7 Đông Phước A, Châu Thành, Hau Giang',
            global_code: '6PX7WQRC+W7',
          },
          rating: 5,
          reference: 'ChIJJzWmpeeLoDERi8lX1gLPqSA',
          types: ['cafe', 'food', 'point_of_interest', 'establishment'],
          user_ratings_total: 1,
        },
        {
          formatted_address:
            '44 QL1A, Tân Phú Thạnh, Châu Thành A, Hậu Giang, Vietnam',
          geometry: {location: [Object], viewport: [Object]},
          icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png',
          id: '0fccd664dab4d4374db26b0ecc6371b0471d8a67',
          name: 'Trà sữa Cầu Vồng',
          photos: [[Object]],
          place_id: 'ChIJHTu4Mi2KoDERgn3lN9xh9wk',
          plus_code: {
            compound_code: 'XP6P+94 Tân Phú Thạnh, Châu Thành A, Hau Giang',
            global_code: '6PX7XP6P+94',
          },
          rating: 4,
          reference: 'ChIJHTu4Mi2KoDERgn3lN9xh9wk',
          types: ['cafe', 'food', 'point_of_interest', 'establishment'],
          user_ratings_total: 10,
        },
      ],
      search: '',
      key: 'AIzaSyDO1_pcK-CD8zXv2bd14diPjZh7z5AnLfU',
    };
  }
  handleUpdate = search => {
    this.setState({search});
  };
  searchPlaces = async () => {
    const {key, search} = this.state;
    const data = await Axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${search}&key=${key}`,
    );
    const places = data.data.results;
    this.setState({places});
    console.log(places);
  };
  handleSubmit = _ => {
    console.log('Submit');
    this.searchPlaces();
  };
  render() {
    const {search, places} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <SearchBar
          // lightTheme={true}
          round={true}
          onChangeText={this.handleUpdate}
          value={search}
          placeholder="Search"
        />
        <Button onPress={this.handleSubmit} title="Search" />
        <Text style={styles.titlePlace}>Địa điểm gợi ý</Text>
        <FlatList
          data={places}
          keyExtractor={item => item.place_id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Place', {
                  item,
                });
              }}>
              <View style={styles.box}>
                <Image source={{uri: item.icon}} style={styles.image} />
                <View style={styles.box__body}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.text}>{item.formatted_address}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#222',
    height: '100%'
  },
  box: {
    flex: 2,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 10,
  },
  text: {
    color: '#f5f5f5',
    width: 'auto',
  },
  box__body: {
    color: 'gray',
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  titlePlace: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'dodgerblue',
    marginVertical: 10
  },
});
export default Home;

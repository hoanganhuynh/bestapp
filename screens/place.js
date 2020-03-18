import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {SliderBox} from 'react-native-image-slider-box';
import {CustomButtonMapGo} from '../components/customBtnGoMap';
import Axios from 'axios';

export default class Place extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree',
      ],
      price: [
        '25.000 - 55.000',
        '20.000 - 65.000',
        '15.000',
        '35.000 - 50.000',
        'Miễn phí',
      ],
      phone: ['+84 132 345 661', '+84 888 123 222', '+84 666 345 777'],
      key: 'AIzaSyDO1_pcK-CD8zXv2bd14diPjZh7z5AnLfU',
      place: {
        name: '',
        formatted_phone_number: '',
        rating: 0,
      },
    };
  }
  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }
  onRegionChange(region) {
    this.setState({region});
  }
  fetchData = async id => {
    const {key} = this.state;
    const result = await Axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&fields=name,rating,formatted_phone_number&key=${key}`,
    );
    const data = result.data.result;
    console.log(data);
    this.setState({place: data});
  };
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('item').name,
    };
  };
  componentDidMount() {
    const item = this.props.navigation.getParam('item');
    this.fetchData(item.place_id);
  }
  render() {
    const item = this.props.navigation.getParam('item');
    const {place} = this.state;
    return (
      <View
        style={{
          backgroundColor: '#fff',
          fontFamily: 'Raleway-Medium',
        }}>
        <ScrollView>
          <SliderBox
            images={this.state.images}
            sliderBoxHeight={250}
            // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
            dotColor="#0055ff"
            inactiveDotColor="#fff"
            autoplay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'cover'}
            ImageComponentStyle={{
              borderRadius: 15,
              width: '97%',
              marginTop: 10,
            }}
          />
          <Text style={styles.titlePlace}>{item.name || ''}</Text>
          <View style={styles.addrBtn}>
            <Icon
              style={styles.customIcon}
              name="map-marked"
              size={15}
              color="#0055ff"
            />
            <Text numberOfLines={2} style={styles.addressPlace}>
              {' '}
              {item.formatted_address}
            </Text>
            <CustomButtonMapGo
              location={item.geometry}
              title="Xem trên Google Map"
            />
          </View>

          <View style={styles.priceIco}>
            <Icon
              style={styles.customIcoPrice}
              name="money-bill-wave"
              size={15}
              color="white"
            />
            <Text style={styles.price}>
              {
                this.state.price[
                  Math.floor(Math.random() * this.state.price.length)
                ]
              }
            </Text>
          </View>
            <View style={styles.priceIco}>
            <Icon
                style={styles.customIcoPrice}
                name="phone"
                size={15}
                color="white"
            />
            <Text style={styles.price}>
              {place.formatted_phone_number ? place.formatted_phone_number : 0}
            </Text>
           </View>
          <View style={styles.priceIco}>
            <Icon
              style={styles.customIcoPrice}
              name="tag"
              size={15}
              color="white"
            />
            <Text style={styles.price}>Bình Dân</Text>
          </View>

          <View style={styles.priceIco}>
            <Icon
              style={styles.customIcoPrice}
              name="star"
              size={15}
              color="white"
            />
            <Text style={styles.price}>{place.rating}</Text>
          </View>

          <View style={styles.priceIco}>
            <Icon
              style={styles.customIcoPrice}
              name="atom"
              size={15}
              color="white"
            />
            <Text style={styles.price}>{item.types.map(i => i + ',')}</Text>
          </View>

          <View style={styles.priceIco}>
            <Text>User rating: </Text>
            <Text style={styles.price}>{item.user_ratings_total}</Text>
          </View>
          {/* <MapView
                    initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                /> */}
          <Text style={styles.description}>
            Bến Tre là một tỉnh thuộc vùng Đồng bằng sông Cửu Long, Việt Nam.
            Tỉnh Bến Tre nằm ở cuối nguồn sông Cửu Long, tiếp giáp biển Đông với
            chiều dài đường biển khoảng 65 km và các tỉnh Tiền Giang, Trà Vinh,
            Vĩnh Long. Trung tâm của tỉnh Bến Tre cách Thành phố Hồ Chí Minh 87
            km về phía Tây qua tỉnh Tiền Giang và Long An
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    paddingTop: 16,
  },
  imgPlace: {
    resizeMode: 'stretch',
    height: 250,
    marginVertical: 12,
    marginRight: 12,
    marginLeft: 10,
    width: '95%',
    borderRadius: 6,
  },
  titlePlace: {
    marginHorizontal: 10,
    fontSize: 25,
    color: '#444',
    marginVertical: 16,
    fontFamily: 'Raleway-Bold',
  },
  addrBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  customIco: {
    // marginLeft: 5
  },
  addressPlace: {
    width: 195,
    color: '#666',
    // marginHorizontal: 8,
    color: '#777',
    fontSize: 17,
    fontFamily: 'Montserrat-Medium',
  },
  description: {
    marginHorizontal: 12,
    marginBottom: 8,
    fontSize: 17,
    lineHeight: 25,
    color: '#666',
    borderTopColor: '#999',
    borderTopWidth: 0.3,
    paddingTop: 8,
    fontFamily: 'Montserrat-Medium',
  },
  price: {
    fontSize: 17,
    color: '#666',
    fontFamily: 'Montserrat-Medium',
  },
  priceIco: {
    marginHorizontal: 12,
    marginVertical: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  customIcoPrice: {
    marginRight: 10,
    color: '#0055ff',
  },
});

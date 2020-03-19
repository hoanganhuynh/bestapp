	import React from 'react';
	import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';

	import Icon from 'react-native-vector-icons/FontAwesome5';
	import {SliderBox} from 'react-native-image-slider-box';
	import {CustomButtonMapGo} from '../components/customBtnGoMap';
	import Axios from 'axios';
	import {FlatList} from 'react-native-gesture-handler';

	export default class Place extends React.Component {
		static navigationOptions = {
			headerShown: false,
			header: () => {
				return null;
			},
		};
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
			reviews: [],
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
		`https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&fields=opening_hours,vicinity,name,rating,formatted_phone_number,review&key=${key}`,
		);
		const data = result.data.result;
		const newPlace = Object.assign(this.state.place, data);
		console.log(data);
		this.setState({place: newPlace});
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
			backgroundColor: '#222',
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
				name="clock"
				size={15}
				color="white"
				/>

				{place.opening_hours && (
				<Text style={styles.price}>
					Activity: {place.opening_hours.open_now ? 'Open' : 'Close'}
				</Text>
				)}

				{!place.opening_hours && (
				<Text style={styles.price}>Activity: Close</Text>
				)}

				{place.opening_hours && (
				<FlatList
					style={styles.timeOpen}
					data={place.opening_hours.weekday_text}
					keyExtractor={item => item.author_name}
					renderItem={({item}) => (
					<View style={styles.box}>
						<Text style={styles.timedayOpen}>{item}</Text>
					</View>
					)}
				/>
				
				)}
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
				name="list"
				size={15}
				color="white"
				/>
				<Text style={styles.price}>{item.types.map(i => i + ',')}</Text>
			</View>

			{/* <View style={styles.priceIco}>
				<Icon
				style={styles.customIcoPrice}
				name="star"
				size={15}
				color="white"
				/>
				<Text style={styles.titleUR}>User rating: </Text>
				<Text style={styles.price}>{item.user_ratings_total}</Text>
			</View> */}

			{/* <MapView
						initialRegion={{
						latitude: 37.78825,
						longitude: -122.4324,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
						}}
					/> */}
			<View>
				<Text style={styles.titleRV}>Review ({item.user_ratings_total})</Text>
				<FlatList
				data={place.reviews}
				keyExtractor={item => item.author_name}
				renderItem={({item}) => (
					
						<View style={styles.avtAndInfo}>
							<Image
							style={{width: 50, height: 50}}
							source={{uri: item.profile_photo_url}}
							/>
							<View style={styles.nameAndYear}>
								<Text style={styles.title}>{item.author_name}</Text>
								
								<Text style={styles.sub_title}>
								{item.relative_time_description}
								</Text>

								<Text style={styles.description}>"{item.text}"</Text>
							</View>
						</View>
					
				)}
				/>
			</View>
			</ScrollView>
		</View>
		);
	}
	}

	const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#222',
		padding: 8,
		paddingTop: 16,
	},
	box: {
		borderBottomColor: '#555',
		borderBottomWidth: 0.5,
		padding: 5,
	},
	title: {
		color: '#999',
		fontSize: 17,
		fontWeight: '600',
	},
	sub_title: {
		fontSize: 14,
		color: '#999',
	},
	description: {
		fontSize: 16,
		marginVertical: 4,
		fontStyle: 'italic',
		width: 320,
		color: '#999'
	},
	nameAndYear: {
		paddingHorizontal: 10,
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
		color: '#999',
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
		color: '#999',
		// marginHorizontal: 8,
		fontSize: 17,
		fontFamily: 'Montserrat-Medium',
	},
	price: {
		fontSize: 17,
		color: '#999',
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
	titleUR: {
		fontSize: 18,
		color: '#999',
	},
	titleRV: {
		fontSize: 20,
		fontWeight: '600',
		color: '#999',
		paddingVertical: 10,
		marginLeft: 10,
	},
	avtAndInfo: {
		display: 'flex',
		flexDirection: 'row',
		paddingHorizontal: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#333',
		marginBottom: 15,
	},
	timeOpen: {
		paddingHorizontal: 10
	},
	timedayOpen: {
		color: '#999'
	}
	});

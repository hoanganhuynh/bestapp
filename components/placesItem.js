import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome5";
import { CustomButtonMap } from './customBtnMap';

import { 
    View, 
    Text, 
    StyleSheet, 
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';


export default function PlacesList(props) {
    const { place, onPress } = props;
    return (        
        <View style={styles.styleFlat}>            
            <Image style={styles.imagePlace} source={require('../assets/image01.jpeg')} />
            <View style={styles.compRight}>
                <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                    <Text numberOfLines={1} style={styles.namePlace}> {place.name} </Text>                
                </TouchableOpacity>

                <View style={styles.addrBtn}>
                    <Icon
                        style={styles.customIco}
                        name="map-marked"
                        size={15}
                        color="#0055ff"
                    />
                    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                        <Text numberOfLines={2} style={styles.addressPlace}> {place.address} </Text>
                    </TouchableOpacity>
                    <CustomButtonMap
                        title="Tìm kiếm"
                        onPress={() => Alert.alert(`Tính năng nữa làm sau...`)}
                        style={{ /* some styles for button */ }}
                        textStyle={{ /* styles for button title */ }}
                    />
                </View>
            </View>
        </View>
    
    )
}

const styles = StyleSheet.create({
    styleFlat: {
        padding: 6,
        backgroundColor: '#fcfcfc',
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 8,
        borderWidth: 0.8,
        borderColor: '#ccc',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 0,
        // },
        // shadowOpacity: 0.40,
        // shadowRadius: 4.41,
        // elevation: 2,
        flexDirection: 'row',
        // marginLeft: 0,
        width: '99%',
        marginLeft: 2
    },
    imagePlace: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    namePlace: {
        fontSize: 20,
        marginBottom: 12,
        width: 260,
        color: "#0055ff",
        fontFamily: "Montserrat-Medium"
    },
    addrBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    compRight: {
        flexDirection: 'column',
        marginLeft: 10
    },
    addressPlace: {
        width: 125,
        color: '#666',
        marginHorizontal: 10,
        fontFamily: "Montserrat-Medium"
    },
    customIco: {
        marginLeft: 6
    },
})
import React from 'react';
import { 
    TouchableOpacity, 
    StyleSheet, 
    Text 
} from 'react-native';
// import { createOpenLink } from 'react-native-open-maps';
import getDirections from 'react-native-google-maps-directions';

export const CustomButtonMapGo = (props) => {
    const handleGetDirection  = () => {
        const datas = {
            source: {
                latitude: 10.0291, 
                longitude: 105.7695
            },
            destination: {
                latitude: 10.269355,
                longitude: 106.072311
            },
            params: [
                {
                key: "travelmode",
                value: "driving"        // may be "walking", "bicycling" or "transit" as well
                }
            ],
        }
        getDirections(datas)
    }

    // const home = { latitude: 10.0291, longitude: 105.7695 };
    // const openFacebookHQ = createOpenLink(facebookHQ);
    // const openYosemiteZoomedOut = createOpenLink({ ...home, zoom: 10 });
    
    
    const { 
        title = 'Enter', 
        style = {}, 
        textStyle = {}, 
        onPress
    } = props;

    return (
        <TouchableOpacity onPress={ handleGetDirection } style={[styles.button, style]}>
            <Text style={[styles.text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        height: 37,
        width: 145,
        borderRadius: 99,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#0055ff",
        shadowColor: "#0008ff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,

        elevation: 6,
    },
    text: {
        fontSize: 13,
        color: '#FFFFFF',
        fontFamily: "Montserrat-Medium",
        textAlign: 'center'
    },
});

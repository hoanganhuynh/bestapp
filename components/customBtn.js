import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';


export const CustomButton = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        height: 45,
        borderRadius: 99,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#0055ff",
    },
    text: {
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: "Montserrat-Bold"
    },
});

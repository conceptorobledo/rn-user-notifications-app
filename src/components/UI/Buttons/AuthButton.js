import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const authButton = (props) => {
    return (
        <TouchableOpacity style={[styles.button,{backgroundColor:props.color,borderColor:props.color}]} onPress={props.onPress}>
        <Text style={styles.text}>{ props.title }</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:{
        marginTop:10,
        padding: 20,
        width:'100%',
        borderRadius: 14,
        borderWidth: 1,
        alignItems: 'center'
    },
    text:{
        color:'white',
        fontWeight: '700',
        fontSize: 18
    }
})

export default authButton;

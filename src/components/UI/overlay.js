import React from 'react';
import { View, StyleSheet } from 'react-native';

const overlay = (props) => {
    return (
        <View style={[styles.overlay,{backgroundColor: props.color}]}>
            { props.children }
        </View>
    );
};

export default overlay;

const styles = StyleSheet.create({
    overlay: {
        //Posiciona de manera absoluta y posiciona todos los ejes en 0
        ...StyleSheet.absoluteFillObject
    }
});
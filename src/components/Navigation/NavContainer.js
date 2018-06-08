import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import EngineIcon from '../SVG/engineIcon';

const navContainer = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPress}>
                <EngineIcon/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25
    }
})

export default navContainer;
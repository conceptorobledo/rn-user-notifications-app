import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';

class ProfileScreen extends Component {

    render() {
        return (
            <View style={styles.screen}>
                <ProfileComponent/>
            </View>
        );
    }
}

export default ProfileScreen;


const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#FFF",
        flex: 1
    }
})
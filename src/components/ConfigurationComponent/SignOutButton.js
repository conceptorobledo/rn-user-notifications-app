import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import { View, Text, StyleSheet, Button } from 'react-native';

class SignOutButton extends Component {

    signOutUser = () => {
        firebase.auth().signOut()
    }
    render() {
        return (
            <Button color="red"
            title={"Sign Out"} onPress={this.signOutUser} />
        );
    }
}

export default SignOutButton;

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: 'red'
    }
});
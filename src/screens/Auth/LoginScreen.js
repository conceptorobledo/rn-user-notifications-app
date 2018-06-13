import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

import Logo from '../../components/AuthComponent/Logo';
import LoginForm from '../../components/AuthComponent/LoginForm/LoginForm';
import Overlay from '../../components/UI/overlay';

class LoginScreen extends Component {

    state = {};
    /* static navigationOptions = {
        header: null
    } */

    isAuth = res => {
        if (res === false) {
            console.log('error');
        }
        if (res) {
            console.log('okey');
            this.props.navigation.navigate('NFC');
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/background.jpg')}>
                </ImageBackground>
                <Overlay color={"rgba(0,168,232, 0.5)"}/>
                <Logo />
                <LoginForm loginStatusVerified={this.isAuth} />
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'orange'
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    }
});
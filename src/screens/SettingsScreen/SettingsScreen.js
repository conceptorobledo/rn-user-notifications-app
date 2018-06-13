import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import SignOutButton from '../../components/UI/Buttons/SignOutButton';

class SettingsScreen extends Component {
    //TODO
    //Ver si se puede arreglar la flecha por defecto de navegación o
    //Poner icono de flecha
    static navigationOptions = ({navigation}) => ({
    headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}><Text>Retroceder</Text></TouchableOpacity>
    })

    componentDidMount(){           
        console.log(this.props);   
    }
    render() {
        return (
            <View>
                <SignOutButton/>
            </View>
        );
    }
}

export default SettingsScreen;
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ProfileComponent extends Component {
    render() {
        return (
            <View>
                <Text style={styles.profileImage}>Componente de Perfil</Text>
                <Text style={styles.profileImage}>Componente de Perfil</Text>
            </View>
        );
    }
}

export default ProfileComponent;

const styles = StyleSheet.create({
    
})
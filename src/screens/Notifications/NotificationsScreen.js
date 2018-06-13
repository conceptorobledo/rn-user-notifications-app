import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import NotificationsList from '../../components/NotificationsList/NotificationsList'
import NavContainer from '../../components/Navigation/NavContainer';


class NotificationsScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        headerRight: <NavContainer onPress={()=>navigation.navigate("Settings")}/>
    })
    
    render() {
        return (
            <View style={styles.screen}>
                <NotificationsList />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#FFF"
    }
})

export default NotificationsScreen;
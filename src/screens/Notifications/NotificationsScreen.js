import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import NotificationsList from '../../components/NotificationsList/NotificationsList'
import SignOutButton from '../../components/ConfigurationComponent/SignOutButton';


class NotificationsScreen extends Component {

    render() {
        return (
            <View>
                <NotificationsList/>
                <SignOutButton/>
            </View>
        );
    }
}

export default NotificationsScreen;
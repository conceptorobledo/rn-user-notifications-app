import React from 'react';
import { createStackNavigator } from 'react-navigation';

import NotificationsScreen from '../screens/Notifications/NotificationsScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';

export const AppStackNavigator = createStackNavigator({
    Notificaciones: {screen: NotificationsScreen},
    Perfil: {screen: ProfileScreen},
    Settings: {screen: SettingsScreen }
});

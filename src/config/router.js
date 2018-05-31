import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';

import NotificationsScreen from '../screens/Notifications/NotificationsScreen'
import ProfileScreen from '../screens/Profile/ProfileScreen'

export const AppStackNavigator = createMaterialTopTabNavigator({
    "Notificaciones": NotificationsScreen,
    "Perfil": ProfileScreen
});

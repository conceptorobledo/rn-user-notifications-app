import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';

import timestampconverter from '../../scripts/timestampconverter';

import NotificationsListItem from './NotificationsListItem/NotificationListItem';


class NotificationsList extends Component {

    state = {
        notifications: [],
        notificationsLoaded: false,
        userHomeId: undefined,
        page:1
    }

    componentDidMount() {
        const database = firebase.database();
        const patrolsRef = database.ref('patrols');
        const homesRef = database.ref('homes');
        const userRef = database.ref('users');
        const userUid = firebase.auth().currentUser.uid;

        //TODO Cargar por firebase el userHomeId para definir hogar donde se deben sacar los datos.
        userRef.child(userUid + '/homeId').once('value', (data) => {
            this.setState({ userHomeId: data.val() }, initialRequest);
        }, errData);

        const initialRequest = () => {
            //Verifica que las notificaciones estan cargadas.
            //TODO Esto debiese de gatillarse solo una vez, sacar de ciclo de firebase al terminar de llamar la función.
            homesRef.child(this.state.userHomeId + '/patrols').orderByKey().limitToLast(20).on('child_added', (data) => {
                const patrolId = data.val();
                let notificationsArray = [];
                patrolsRef.child(patrolId).once('value', (patrolData) => {
                    const i = patrolData.val();
                    i.key = patrolId;

                    this.setState(function (prevState) {
                        return {
                            notifications: [...prevState.notifications, i]
                        }
                    });
                    if (!this.state.notificationsLoaded) {
                        this.setState({
                            notificationsLoaded: true
                        });
                    }

                }, errData);
            }, errData);
        }

        function errData(err) {
            console.log('error');
            console.log(err);
        }

    }

    render() {
        let notifications = <Text>Something went wrong!</Text>;
        if (!this.state.error) {
            notifications = this.state.notifications.map(notification => {
                //Convierte timestamp a date con función
                const hours = timestampconverter.EpochtoDate(notification.timestamp).hours;
                const dayOfMonth = timestampconverter.EpochtoDate(notification.timestamp).day_month;
                console.log('notificación !!!')
                return { day: dayOfMonth, hours: hours, key: notification.key };
            });
            notifications.reverse();
        }
        //Verifica que haya notificaciones
        if (this.state.notifications.length > 1) {
            //Notificaciones ordenadas desde la última
            return (
                <FlatList data={notifications} initialNumToRender={5} keyExtractor={item => item.key} renderItem={({ item }) => <NotificationsListItem item={item} />} />
            );
        }
        else if (!this.state.notificationsLoaded) {
            return (<Text style={styles.pretext}>Loading...</Text>)
        }
        else {
            return (<Text style={styles.pretext}>No hay notificaciones</Text>);
        }
    }

}

const styles = StyleSheet.create({
    pretext: {
        fontSize: 25
    }
});


export default NotificationsList;
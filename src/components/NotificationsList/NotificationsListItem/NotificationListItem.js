import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const notificationListItem = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.thumbnail} source={require('../../../assets/patrolbird.png')} />
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}> Hemos visitado su casa </Text>
                <Text style={styles.textBody}> {props.item.day} a las {props.item.hours} </Text>                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',        
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#f4f4f4',
        paddingHorizontal: 5,
        paddingVertical: 20,
        marginHorizontal: 15
    },
    thumbnail: {
        width: 50,
        height:50,
        marginRight:10
    },
    textHeader: {
        fontSize: 20
    },
    textBody:{
        marginTop: 5
    }
});

export default notificationListItem;
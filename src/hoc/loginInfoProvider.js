import React, { Component } from 'react';
import firebase from 'react-native-firebase';

const MyContext = React.createContext();

class LoginInfoProvider extends Component {

    componentDidMount(){
        const userUid = firebase.auth().currentUser.uid;
    }

    render() {
        return (
            <MyContext.Provider value="yo soy el valor">
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export default LoginInfoProvider;
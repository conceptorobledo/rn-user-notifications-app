import React, { PureComponent } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native'

class Input extends PureComponent {
    //TODO 
    //Terminar de formatear el campo input

    _handleChange = value => {
        this.props.onChange(this.props.name, value);
    }

    _handleTouch = () => {
        this.props.onTouch(this.props.name);
    }

    render() {
        let isPassword = false;
        if (this.props.fieldType == 'password') {
            isPassword = true;
        }

        const { label, error } = this.props;

        return (
            <View style={[styles.inputWrapper,  error && styles.warning ]}>
                <TextInput
                    style={styles.input}
                    onChangeText={this._handleChange}
                    onBlur={this._handleTouch}
                    underlineColorAndroid='transparent'
                    value={this.props.value}
                    placeholder={label}
                    placeholderTextColor='#fff'
                    secureTextEntry={isPassword}
                    autoCapitalize="none"
                />
                {error && <Text style={{color:'#cc3366'}}>{error}</Text> }
            </View>
        );
    }
}


export default Input;

const styles = StyleSheet.create({
    input: {
        borderColor: '#fff',
        fontSize: 20,
    },
    inputWrapper: {
        borderRadius: 14,
        backgroundColor: 'rgba(250,250,250,0.5)',
        marginBottom: 25,
        padding: 5,
        paddingLeft: 15
    },
    warning:{
        borderColor:'#cc3366',
        borderWidth: 1
    }

});
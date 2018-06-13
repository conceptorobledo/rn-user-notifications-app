// Formik x React Native example
import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import { Text, View, StyleSheet, Alert } from 'react-native';
import AuthButton from '../../UI/Buttons/AuthButton';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from './Input';


class LoginForm extends Component {

  _handleSubmit = (values, bag) => {
    console.log('handlesubmit');
    const email = values.email;
    const password = values.password;
    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then((user) => {
      })
      .catch((err) => {
        const { code, message } = err;
        switch (code) {
          case 'auth/user-not-found':
            bag.setErrors({ email: 'El usuario no existe' })
            break;
          case 'auth/wrong-password':
            bag.setErrors({ password: 'Contraseña equivocada' })
            break;
        }
      });
  }

  render() {
    return (
      <View style={styles.box}>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={this._handleSubmit}
          validationSchema={Yup.object().shape({
            email: Yup.string().email('No es un email valido').required('Favor ingresa tu email'),
            password: Yup.string().required('Favor ingresa tu contraseña')
          })}
          render={({ values, handleSubmit, setFieldValue, errors, touched, setFieldTouched }) => (
            //setFieldValue imperativamente interactua con el input field, por lo que hay que guardar los "cambios" cada vez que se teclea una letra nueva.
            <React.Fragment>
              <Input label="Email" name="email" error={touched.email && errors.email} value={values.email} onChange={setFieldValue} onTouch={setFieldTouched} />
              <Input label="Contraseña" name="password" error={touched.password && errors.password} value={values.password} fieldType={'password'} onChange={setFieldValue} onTouch={setFieldTouched} />
              <AuthButton onPress={handleSubmit} color={"#E4572E"} title="Login" />
              <Text style={{ color: 'white' }}>Dummy Text</Text>
            </React.Fragment>
          )}
        />
      </View>
    )
  }

};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  }

});

export default LoginForm;


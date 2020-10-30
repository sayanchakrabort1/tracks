import React, { useState , useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Button , Text } from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {

  const {state, signup} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
      headerText="Sign Up for Tracker"
      errorMessage={state.errorMessage}
      submitBtnTxt="Sign Up"
      onSubmit={signup}
      />
      <NavLink 
        text='Already have an account? Sign in instead.'
        routeName='Signin'
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 175,
    marginLeft: 5,
    marginRight: 5
  }
});

export default SignupScreen;

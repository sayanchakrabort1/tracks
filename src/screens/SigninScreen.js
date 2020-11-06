import React, { useState , useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Button , Text } from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = ({ navigation }) => {
  const {state, signin, clearErrorMessage} = useContext(AuthContext);

  return (
    <View style={styles.container}>
    <NavigationEvents
      onWillBlur={clearErrorMessage}
    />
      <AuthForm
      headerText="Sign In for Tracker"
      errorMessage={state.errorMessage}
      submitBtnTxt="Sign in"
      onSubmit={signin}
      />
      <NavLink
        text="Don't have an account? Sign up instead."
        routeName='Signup'
      />
    </View>
  );
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

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SigninScreen;

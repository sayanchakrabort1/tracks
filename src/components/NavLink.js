import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import Spacer from '../components/Spacer';

const NavLink = ({navigate , text, routeName}) => {
    return (
        
        <TouchableOpacity onPress={() => navigation.navigate(routeName)} style={{marginTop:20}}>
        <Spacer>
            <Text style={styles.signin}>{text}</Text>
        </Spacer>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    signin: {
        color: 'blue'
    }
});

export default withNavigation(NavLink);
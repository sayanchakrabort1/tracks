import React, { useState } from 'react';
import { Text, Button, Input } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, submitBtnTxt,  onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={{marginTop: 185}}>
        <Text h3> {headerText} </Text>
        <Spacer />
        <Input 
            label="Email" 
            value={email} 
            onChangeText={ (e) => setEmail(e) }
            autoCapitalize="none"
            autoCorrect={false}
            />
        <Spacer />
        <Input 
            label="Password" 
            value={password} 
            onChangeText={ (e) => setPassword(e) } 
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
        />
        { errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        <Spacer />
        <Button title={submitBtnTxt} onPress={ () => {onSubmit({email, password})} }/>
        </View>
    )
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red'
    }
});

export default AuthForm;
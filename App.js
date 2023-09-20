/**
 * @file React Native - Lab 3
 * @author Emre Deniz
 */

import React from 'react';
import {View, SafeAreaView, StyleSheet, TextInput, Text, Alert, TouchableOpacity} from 'react-native';

export default function App() {
    const [firstNameValue, onChangeFirstName] = React.useState('');
    const [lastNameValue, onChangeLastName] = React.useState('');
    const [emailValue, onChangeEmail] = React.useState('');

    // Clear button function
    function onClickClearButton() {
        onChangeFirstName('');
        onChangeLastName('');
        onChangeEmail('');
    };

    // Send button function
    function onClickSendButton() {
        Alert.alert(firstNameValue + '\n' + lastNameValue + '\n' + emailValue);
    };

    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.wrapper}>
                {/* Header Title */}
                <Text style={styles.header}>CONTACT FORM</Text>
                
                {/* Text input fields */}
                <TextInput
                    style = {styles.inputStyle}
                    onChangeText = {text => onChangeFirstName(text)}
                    value = {firstNameValue}
                    placeholder = "First Name"
                />
                <TextInput
                    style = {styles.inputStyle}
                    onChangeText = {text => onChangeLastName(text)}
                    value = {lastNameValue}
                    placeholder = "Last Name"
                />
                <TextInput
                    style = {styles.inputStyle}
                    onChangeText = {text => onChangeEmail(text)}
                    value = {emailValue}
                    placeholder = "Email"
                />

                {/* Send button */}
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: 'green'}]}
                    onPress = {onClickSendButton}>
                    <Text style={[{color: 'white'}, {fontSize: 24}, {fontWeight: 'bold'}, , {textAlign: 'center'}]}>SEND</Text>
                </TouchableOpacity>

                {/* Clear button */}
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: 'red'}]}
                    onPress = {onClickClearButton}>
                    <Text style={[{color: 'white'}, {fontSize: 24}, {fontWeight: 'bold'}, {textAlign: 'center'}]}>CLEAR</Text>
                </TouchableOpacity>
            </View>

            <Text>{'\n'}</Text>

            {/* Output */}
            {/* <Text style = {{fontSize: 20}}>{output}</Text> */}
        </SafeAreaView>
    );
};

// Style definitions
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        borderWidth: 2,
        borderColor: 'black',
        padding: 20,
        borderRadius: 10
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputStyle: {
        fontSize: 20,
        padding: 10,
        marginTop: 5,
        height: 50,
        width: 300,
        borderWidth: 2,
        borderColor: 'black',
    },
    button: {
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        width: 300
    }
});

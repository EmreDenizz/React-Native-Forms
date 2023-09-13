/**
 * @file React Native - Lab 3
 * @author Emre Deniz
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, Button, Switch} from 'react-native';

export default function App() {
    const [inputValue, onChangeInput] = React.useState('');
    const [isChecked, setChecked] = useState(false);

    return (
        <SafeAreaView style = {[styles.container, isChecked ? {backgroundColor: 'black'} : {backgroundColor: 'white'}]}>
            {/* Text input field */}
            <TextInput
                style = {styles.input_style}
                onChangeText = {text => onChangeInput(text)}
                value = {inputValue}
                placeholder = "Enter text.."
            />

            <Text>{'\n'}</Text>

            {/* Clear button */}
            <Button
                onPress = {() => onChangeInput('')}
                title = "Clear" 
                color = "red"
            />

            <Text>{'\n'}</Text>

            {/* Output text */}
            <Text style = {{color: 'orange', fontSize: 24}}>{inputValue}</Text>

            <Text>{'\n'}</Text>
        </SafeAreaView>
    );
};

// Style definitions
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input_style: {
        fontSize: 24,
        padding: 10,
        height: 50,
        width: '80%',
        borderWidth: 2,
        borderColor: 'orange',
        backgroundColor: 'lightgray'
    }
});

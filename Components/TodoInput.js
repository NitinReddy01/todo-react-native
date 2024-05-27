import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function TodoInput(props) {
    const [input,setInput]=useState('');
    let inputHandler=(enteredText)=>{
        // console.log(e);
        setInput(enteredText);
    }
    let addTodoHandler=()=>{
        // console.log(input)
        props.onAddTodo(input);
    }
    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder='Enter your TODO'  onChangeText={inputHandler} />
                <Button title='Add Todo' onPress={addTodoHandler} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
    },
    textInput: {
        borderWidth: 1,
        width: '70%',
        padding: 8
    }
});
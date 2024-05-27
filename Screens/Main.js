import { StyleSheet, View } from 'react-native';
import TodoInput from '../Components/TodoInput';
import TodoItems from '../Components/TodoItems';
import { useState } from 'react';


export default function Main() {
  const [todo, setTodo] = useState([]);
  let addTodo = (enteredText) => {
    // console.log(enteredText);
    setTodo(()=>[...todo,enteredText]);
  }
  return (
    <>
      <View style={styles.appContainer}>
        <TodoInput onAddTodo={addTodo}/>
        <TodoItems item={todo} />
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});

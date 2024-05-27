import { ScrollView, StyleSheet, Text, View } from 'react-native';


export default TodoItems = (props)=>{
    return (
        <>
            <View style={styles.todoContainer}>
                <ScrollView>
                {props.item.map((i)=><Text style={styles.todoItem} key={i} >{i}</Text>)}
                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    todoContainer:{
      flex:5,
      marginTop:20
    },
    todoItem:{
        margin:8,
        padding:8,
        backgroundColor:'blue',
        color:'white',
        borderRadius:7
    }
  });
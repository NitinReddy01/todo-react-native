import { View, TextInput, StyleSheet, Image, Button } from "react-native";

export default Start = ({navigation}) => {
    let todo=()=>{
        navigation.navigate("Main")
    }
    return (
        <View style={mystyles.body}>
            <View style={mystyles.images}>
                <Image source={require('../assets/kmit.jpg')} style={mystyles.img1}/>
                <Image source={require('../assets/todo.png')} style={mystyles.img2}/>
            </View>
            <View style={mystyles.main}>
                <TextInput style={mystyles.textInput} placeholder="Enter Your Name" />
                <Button title="continue" color="green" onPress={todo}/>
            </View>
        </View>
    );
}

const mystyles = StyleSheet.create({
    body:{
        flex:1,
        paddingTop:50,
        paddingHorizontal:10,
    },
    images:{
        flex:1,
    },
    img1:{
        width:70,
        height:70
    },
    img2:{
        width:370,
        height:250,
    },
    main:{
        flex:1,
        marginTop:100,
    },
    textInput:{
        borderWidth:1,
        padding:8,
        borderColor:'green',
        backgroundColor:'#BF55EC',
        borderRadius:7,
        marginBottom:8,
    },
})
import { StatusBar } from "expo-status-bar";
import { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator
} from "react-native";

import APIs from "../Services/APIs";
import App_Color from "../Themes/Color";
import Loading from "../Components/Loading";

export default function Test(navigation) {

    const [username,setUsername] =useState("");
    const [password,setPassword] =useState("");
    const [isLoading,setisLoading] =useState("");
    const [result,setResult] =useState("");

const handleClick = () =>{
         console.log(username,password)
         const url = APIs.getLogin + `&username=${username}&password=${password}`;     
         fetch(url)  
         .then(res => res.json())
         .then(resJson => {

            console.log(resJson);
            setResult(resJson);

         })
}

    return(
        <View style={styles.container}>
            <TextInput style={{height:50,width:"100%",backgroundColor:'gray'}}
            value={username}
            onChangeText={text=>setUsername(text)}
            />
            <TextInput style={{height:50,width:"100%",backgroundColor:'gray', marginTop:20}} 
            value={password}
            onChangeText={text=>setPassword(text)}
            />
            <TouchableOpacity style={{width:'100%',height:30,marginTop:30,backgroundColor:"red"}} 
            onPress={handleClick}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
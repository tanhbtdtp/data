import { StatusBar } from "expo-status-bar";
import {
  StyleSheet, View, Text ,ActivityIndicator
} from "react-native";

export default function Loading(props) {
  return (
    <View style={styles.container}>        
        <View style={{flex:1,width:"100%",height:"100%",alignItems:"center",justifyContent:"center",position:"absolute"}}>
            <ActivityIndicator size={50}/>
            <Text style={{color:"#fff"}}>{props.Text}</Text>
        </View>
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",    
    opacity:0.7
  },
});

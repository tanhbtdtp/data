import { useState,useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import App_Color from "../Themes/Color";
import APIs from "../Services/APIs";


export default function Profile() {
const [listData,setlistData] = useState();

useEffect(() => {
  const url = APIs.getUsersAPI;
  const fetchData = async () => {
      try {
          const response = await fetch(url);
          const json = await response.json();
          //console.log(json);
          setlistData(json);
          //console.log(listData);
      } catch (error) {
          console.log("error", error);
      }
  };
  fetchData();

},[]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <Content data={listData}/>
    </View>
  );
}

const Header = () => {
  return (
    <View style={{ flex: 1, backgroundColor: App_Color.MauNen, width: "100%" }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
        }}
      >
        <Image
          style={styles.imgAvatar}
          source={{
            uri: "https://ttkddongthap.net/tainguyen/images/thanhtan.jpg",
          }}
        />
        <Text style={styles.txtAvatar}>Dwayne Johnson</Text>
      </View>
    </View>
  );
};

const Content = (props) => {
  const {data} = props;
  
  return (

    <View
      style={{
        flex: 2,
        backgroundColor: App_Color.MauNen_Dark,
        width: "100%",
        alignItems: "center",
      }}
    >
    <FlatList
        style={{width:"100%",marginTop:10}}
        data={data}
        renderItem={({item})=>{         
        return(          
          <TouchableOpacity style={{width: "100%", alignItems: "center"}}>
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              paddingHorizontal: 10,
              paddingVertical: 10,
              alignItems: "center",
              marginTop: 10,
              backgroundColor: "#fff",
              borderRadius: 10,
            }}
          >
            <Image
              style={styles.imgUser}
              source={{
                uri: item.image,
              }}
            />
            <View>
              <Text style={styles.txtUser}>{item.tennv}</Text>
              <Text style={{ color: "gray", fontSize: 10, marginTop: 2 }}>{item.sdt}</Text>
            </View>
          </View>
        </TouchableOpacity>            
          )
        }}
        keyExtractor={item => item.id}
        />      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  imgAvatar: {
    height: 100,
    width: 100,
    marginRight: 20,
    borderRadius: 50,
  },

  txtAvatar: {
    color: "#ffff",
    fontWeight: "600",
    fontSize: 20,
  },

  imgUser: {
    height: 50,
    width: 50,
    marginRight: 20,
    borderRadius: 25,
  },

  txtUser: {
    fontWeight: "600",
    fontSize: 14,
  },
});

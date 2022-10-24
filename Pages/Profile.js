import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import App_Color from "../Themes/Color";
import APIs from "../Services/APIs";

export default function Profile() {
  const [listData, setlistData] = useState();

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
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <Content data={listData} />
    </View>
  );
}

const Header = () => {
  return (
    <View
      style={{
        height: 150,
        backgroundColor: App_Color.MauNen,
        width: "100%",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          width: "90%",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <TextInput
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#fff",
            paddingHorizontal: 50,
            borderRadius: 10,
            position: "absolute",
          }}
        />
        <Ionicons
          name="search"
          size={32}
          style={{
            position: "absolute",
            color: "gray",
            fontSize: 25,
            top: 38,
            left: 15,
          }}
        />
      </View>
    </View>
  );
};

const Content = (props) => {
  const { data } = props;
  //console.log(data);
  return (
    <View
      style={{
        flex: 4,
        backgroundColor: App_Color.MauNen_Dark,
        width: "100%",
        alignItems: "center",
      }}
    >
      <FlatList
        style={{ width: "100%", marginTop: 10 }}
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }}>
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
                  <Text style={styles.txtChucdanh}>{item.chucdanh}</Text>
                  <Text style={{ color: "gray", fontSize: 10, marginTop: 2 }}>
                    {item.sdt}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
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
  txtChucdanh: {
    fontWeight: "600",
    fontSize: 10,
    color: "green",
  },
});

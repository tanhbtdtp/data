import { StatusBar } from "expo-status-bar";
import { useState } from "react";
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

export default function Login() {
const [username,setUsername] =useState("");
const [password,setPassword] =useState("");
const [isLoading,setisLoading] =useState("");
const [result,setResult] =useState("");


function handleSubmit(){ 

const  fetchLogin = async () =>{
  try {      
    if(username==="" || password==="" || isLoading)  {return;}
    setisLoading(true);
    const url = APIs.getLogin + `&username=${username}&password=${password}`;     
    const response = await fetch(url);
    const json = await response.json();        

    setResult(json);              

    console.log(username,password,result,url);
    
  } catch (error) {
    console.log("error", error);        
  }  
  setisLoading(false); 
}
fetchLogin();   
};

  return (
    <View style={styles.container}>
      <StatusBar style="light" />             
      
      <Header />
      <Sunmit data={[username,setUsername,password,setPassword,handleSubmit,isLoading]} />
      <Footer />
      {isLoading?
             <>
             <View style={{flex:1,width:"100%",height:"100%",position:"absolute", backgroundColor:'#fff',opacity:0.5}}>
                 <Loading Text="Đang tải"/>
            </View>
            </>
            :null}
     </View>
  );
}

const Header = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: App_Color.MauNen,
        width: "100%",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#ffff",
          fontWeight: "600",
          fontSize: 30,
          marginTop: 50,
        }}
      >
        Sale Report
      </Text>
    </View>
  );
};
const Sunmit = (props) => {
const [username,setUsername,password,setPassword,handleSubmit] =props.data;

  return (       
    <View style={{ flex: 2, backgroundColor: "#ffff", width: "100%" }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          marginTop: 10,
          marginLeft: 25,          
        }}        
      >      
        Welcome!
      </Text>     
      <TextInput style={styles.txtTaiKhoan} placeholder="Tài khoản" value={username} 
                  onChangeText={(text) => setUsername(text)}
      ></TextInput>
      <TextInput
        style={styles.txtMatKhau}
        placeholder="Mật khẩu"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      ></TextInput>
      <TouchableOpacity
        style={{
          height: 50,
          width: "90%",
          marginTop: 20,
          alignSelf: "center",
          borderRadius: 20,
          backgroundColor: "#FF5C2C",
          justifyContent: "center",
          alignItems: "center" 
           
        }}
        onPress ={()=>handleSubmit()}        
      >
        <Text style={{ color: "#fff", fontWeight: "600" }}>Đăng nhập</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginTop: 40,
          alignSelf: "center",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#FF5C2C", fontWeight: "600" }}>
          Quên mật khẩu?
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          width: "80%",
          alignSelf: "center",
          justifyContent: "space-between",
          marginTop: 30,
        }}
      >
        <TouchableOpacity style={styles.btnSocial}>
          <Image
            style={styles.imgSocial}
            source={{
              uri: "https://www.clipartmax.com/png/small/105-1055517_google-chrome-icon-google-logo-round-png.png",
            }}
          />
          <Text style={{ color: "#FF5C2C", fontWeight: "600" }}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSocial}>
          <Image
            style={styles.imgSocial}
            source={{
              uri: "https://www.clipartmax.com/png/small/17-171363_facebook-logo-png-%5Bnew-2015%5D-vector-eps-free-download-transparent-background-facebook.png",
            }}
          />
          <Text style={{ color: "#5E7CF4", fontWeight: "600" }}>facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Footer = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#FF5C2C",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#ffff" }}>Chưa có tài khoản?</Text>
      <TouchableOpacity>
        <Text style={{ color: "#ffff", fontWeight: "600", marginLeft: 10 }}>
          Đăng ký
        </Text>
      </TouchableOpacity>
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

  txtTaiKhoan: {
    height: 50,
    width: "90%",
    backgroundColor: App_Color.txtMauNen,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },

  txtMatKhau: {
    height: 50,
    width: "90%",
    backgroundColor: App_Color.txtMauNen,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },

  btnSocial: {
    flexDirection: "row",
    height: 50,
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.2,
    borderRadius: 5,
  },

  imgSocial: {
    height: 30,
    width: 30,
    marginLeft: 10,
    marginRight: 10,
  },
});

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
  ActivityIndicator,
  SectionList
} from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import App_Color from "../Themes/Color";
import APIs from "../Services/APIs";

export default function ProfileDetail(){
    return(
        <View style={styles.container}>
        <StatusBar style="light" />  
           <Header/> 
           <Banner/>
           <BSC/>
           <Footer/>
        </View>
    )};



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

             <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  alignItems: "center",                      
                  borderRadius: 10,
                }}
              >
                <Image
                  style={styles.imgUser}
                  source={{
                    uri: 'https://ttkddongthap.net/tainguyen/images/nguyenthanhnhan.png',
                  }}
                />
                <View>
                    <Text style={styles.txtUser}>Huỳnh Bùi Thanh Tân</Text>
                    <Text style={styles.txtChucdanh}>Nhân viên địa bàn</Text>
                    <Text style={styles.txtManv}>VNP00001</Text>
                </View>               
              </View>              
            </View>
          </View>
        );
    };


const Banner = () =>{
        return(
            <View style={{height:160,backgroundColor:"#fff", width:"95%",marginTop:10,marginBottom:10, borderRadius:15}}>
            <Text style={{marginTop:15,marginLeft:15,color:"gray"}} >Tiền lương</Text>
            <Text style={{marginTop:5,marginLeft:15,fontSize:20,fontWeight:"bold",color:"green"}}>3.240.000đ</Text>            
            <Text style={{marginTop:25,marginLeft:15,color:"gray"}}>Khen thưởng dự kiến</Text>
            <Text style={{marginTop:5,marginLeft:15,fontSize:15,fontWeight:"600",color:"orange"}}>250.000đ</Text>    
            </View>
        )};       

const BSC = () =>{

        const DATA = [
            {
              title: "Tỉ lệ nợ",
              tile: "90%",
              doanhthu: "4.305.541"
            },
            {
              title: "Phát triển Fiber",
              tile: "40%",
              doanhthu: "1.305.541"
            },
            {
              title: "Phát triển MyTV",
              tile: "22%",
              doanhthu: "1.000.000"
            },
            {
              title: "Di động trả trước",
              tile: "50%",
              doanhthu: "500.000"
            },
            {
             title: "Đóng cước trước",
             tile: "50%",
             doanhthu: "200.000"
            },
            {
            title: "Di động trả sau",
            tile: "88%",
            doanhthu: "545.000"
            },
          ];
       
           return(
            <View style={{height:200,backgroundColor:"#fff", width:"95%",marginBottom:10, borderRadius:15}}>
                 <Text style={{marginTop:15,marginLeft:15,fontWeight:"600"}}>Danh mục BSC</Text>
                 <FlatList
                        horizontal={true}
                        style={{marginHorizontal:10}}
                        data={DATA}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => {                              
                            return(                              
                            <TouchableOpacity>
                            <View style={{height:140,backgroundColor:App_Color.MauNen_Dark, width:160,marginTop:10, marginRight:10, marginBottom:10, borderRadius:10}}>
                                <View style={{flexDirection:"row"}} >
                                        <Image
                                            style={{height:30,width:30,marginTop:20,marginLeft:5}}
                                            source={{
                                            uri: 'https://ttkddongthap.net/tainguyen/images/nguyenthanhnhan.png',
                                        }}
                                        />
                                        <View>
                                            <Text style={{marginTop:10,marginLeft:15,color:"gray"}} >{item.title}</Text>
                                            <Text style={{marginTop:5,marginLeft:15,fontSize:20,fontWeight:"bold",color:"green"}}>{item.tile}</Text>            
                                        </View>

                                </View>
                                <View>
                                                <Text style={{marginTop:25,marginLeft:15,color:"gray"}}>Hoàn thành</Text>
                                                <Text style={{marginTop:5,marginLeft:15,fontSize:15,fontWeight:"600"}}>{item.doanhthu}đ</Text>    
                                </View>
                            </View>
                            </TouchableOpacity>
                          )
                        }}                       
                    />                 
            </View>            
      )};   

const Footer = () =>{
        return(
            <View style={{flex:1,backgroundColor:"#fff",width:'95%',borderRadius:10}}>
             <Text style={{marginTop:15,marginLeft:15,fontWeight:"600"}}>Danh mục KPIs</Text>
            </View>
        )};


const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: App_Color.MauNen_Dark,
          alignItems: "center",         
        },            
            imgUser: {
            height: 70,
            width: 70,
            marginRight: 20,
            borderRadius: 35,
          },
        
          txtUser: {
            fontWeight: "600",
            color:'#fff',
            fontSize: 14,
          },
          txtChucdanh: {
            fontWeight: "600",
            fontSize: 10,
            color:'#c9c9c9',
            marginTop:3
          },
          txtManv: {
            fontWeight: "600",
            fontSize: 10,
            color:'#fff',
            marginTop:3
          },

});
      

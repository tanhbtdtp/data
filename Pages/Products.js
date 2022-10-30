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
  ScrollView
} from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import App_Color from "../Themes/Color";
import APIs from "../Services/APIs";
import axios from "axios";



const products_data = [
{
    id: '1',
    name: "VD149",
    img : "https://ttkddongthap.net/tainguyen/images/img/products/vd149.jpg",
    mota :"Gói cước cho gia đình",
    link :""
}
]


export default function Products() {
return(
    <View style={styles.constainer}>
        <Header/>
        <ProductDetails/>
    </View>
)}


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
            placeholder="Tìm sản phẩm"
          />
          <FontAwesome
            name="search"
            size={32}
            style={{
              position: "absolute",
              color: "gray",
              fontSize: 25,
              top: 38,
              left: 15            
            }}
          />
        </View>
      </View>
    );
  };


const ProductDetails = ()=>{
return( 
<View style={styles.productDetails}>
  <ScrollView style={{width:"95%",marginLeft:20,marginTop:20,marginBottom:20}}>
         <View style={styles.itemProducts}>
            <Text style={styles.itemTitle} >VD149</Text>
            <Text style={styles.itemGia} >149.000 đồng</Text>
            <Image
                resizeMode="stretch"
                style={styles.imgProduct}
                source={{
                  uri: 'https://ttkddongthap.net/tainguyen/images/img/products/vd149.jpg',
                }}
              /> 
              <Text style={styles.uudaigoicuoc}>Ưu đãi gói cước</Text>
              <Text style={styles.uudaithamkhao}> Chi tiết tham khảo tại :</Text>
              <Text style={styles.uudailink}> https://shop.vnpt.vn</Text>              

        </View>    

        <View style={styles.itemProducts}>
            <Text style={styles.itemTitle} >FCLUB</Text>
            <Text style={styles.itemGia} >149.000 đồng</Text>
            <Image
                resizeMode="stretch"
                style={styles.imgProduct}
                source={{
                  uri: 'https://shop.vnpt.vn/uploads/package/20220830090832/images/sclub-368x250-1-1661825312.jpg',
                }}
              /> 
              <Text style={styles.uudaigoicuoc}>Ưu đãi gói cước</Text>
              <Text style={styles.uudaithamkhao}> Chi tiết tham khảo tại :</Text>
              <Text style={styles.uudailink}> https://shop.vnpt.vn</Text>              
        </View>               


        <View style={styles.itemProducts}>
            <Text style={styles.itemTitle} >THAGA</Text>
            <Text style={styles.itemGia} >70.000 đồng</Text>
            <Image
                resizeMode="stretch"
                style={styles.imgProduct}
                source={{
                  uri: 'https://shop.vnpt.vn/uploads/package/20220831111052/images/thaga70_368x250-1661962252.jpg',
                }}
              /> 
              <Text style={styles.uudaigoicuoc}>Ưu đãi gói cước</Text>
              <Text style={styles.uudaithamkhao}> Chi tiết tham khảo tại :</Text>
              <Text style={styles.uudailink}> https://shop.vnpt.vn</Text>              
        </View>               

        <View style={{height:100}}></View>

        
        </ScrollView>
</View>
)
};
const styles = StyleSheet.create({
constainer:{
        flex:1,
        width:"100%",
        alignItems:"center",
        
 },  

 productDetails:{
        flex:1,
        width:"100%",
        backgroundColor:App_Color.MauNen_Dark,        
        alignItems:"center"
    },  

itemProducts:{
   height :400,
   width:'95%', 
   backgroundColor:App_Color.MauTrang,
   marginTop:10,
   borderRadius:20,   
}  ,
itemTitle:{
    fontSize:25,
    fontWeight:'600',
    marginTop:10,
    marginLeft:15
},

itemGia:{
    fontSize:15,
    fontWeight:'600',
    marginTop:10,
    marginLeft:15,
    color:'red'
},

imgProduct:{
    height:200,
    width:'95%',
    marginTop:20,
    alignSelf:"center"
} ,
uudaigoicuoc:{
  fontWeight : 'bold',
  marginHorizontal:15,
  marginVertical:10
},
uudaithamkhao:{  
  marginHorizontal:16,      
},
uudailink:{  
  marginHorizontal:16,      
  fontWeight:'500',
  color:'green'
  
}


    
})
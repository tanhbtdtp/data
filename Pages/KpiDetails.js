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
  SectionList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import App_Color from "../Themes/Color";
import APIs from "../Services/APIs";

export default function KpiDetails() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <Mota/>
      <Chitiet/>
    </View>
  );
}

const Header = () => {
    const user = {
        makpi:  "S_121",        
        tenkpi: "Doanh thu bán gói",
        img :   "https://ttkddongthap.net/tainguyen/images/bsc_img/kpis.png",
    }
      return (
        <View style={styles.headerContainer}>
          <View  style={styles.headerContainer1}>
            <View
              style={styles.headerContent}
            >
              <Image
                style={styles.imgMakpi}
                source={{
                  uri: user.img,
                }}
              />
              <View>
                <Text style={styles.txtMakpi}>{user.makpi}</Text>
                <Text style={styles.txtTenkpi}>{user.tenkpi}</Text>                
              </View>
            </View>
          </View>
        </View>
      );
    };    
       

const Mota = ()=> {
    return(
        <View style={styles.motaContainer}>
            <View style={styles.card}>
              <View>
                <Text style={styles.heading}>Mô tả nội dung KPI</Text>
                </View>
                <Text>
                    Là doanh thu mua gói cước của các thuê bao 
                    PTM trong tháng T ghi nhận theo 207 (ghi DT gói cước trong tháng T)
                </Text>                
                <Text style={styles.body}>Điều kiện</Text>
                <Text>Doanh thu phải ghi nhận trên địa bàn tỉnh Đồng Tháp.</Text>
                <Text style={styles.khuyennghi}>Khuyến nghị</Text>
                <Text>Thực hiện PTM và Bán gói chu kỳ dài</Text>
            </View>
        </View>
)};

const Chitiet =()=>{
    return(

        <View style={styles.chitietContainer}>
        <View style={styles.card}>
          <View>
            <Text style={styles.heading}>Thực hiện</Text>
            </View>
            <View style={styles.chitietThuchien}>
                <Text style={styles.tieude}>Phát triển mới</Text>
                <Text style={styles.ketqua}>500</Text>
            </View>
            <View style={styles.chitietThuchien}>
                <Text style={styles.tieude}>Bán gói</Text>
                <Text style={styles.ketqua}>250</Text>
            </View>

            <View style={styles.chitietThuchien}>
                <Text style={styles.tieude}>Hiện hữu</Text>
                <Text style={styles.ketqua}>1000</Text>
            </View>

        </View>
    </View>

 )};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: App_Color.MauNen_Dark,
    alignItems: "center",
  },
  imgMakpi: {
    height: 70,
    width: 70,
    marginRight: 20,
    borderRadius: 35,
  },

  txtMakpi: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 35,
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  txtTenkpi: {
    fontWeight: "600",
    fontSize: 16,
    color: "#fff",
    marginTop: 3,
    textAlign: "center",
  },

  headerContainer: {
    height: 250,
    backgroundColor: App_Color.MauNen,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContent: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },

  motaContainer: {
    width: "95%",    
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 10,
  },
  txtMota :{
    fontSize : 20,
    marginTop:10,
    marginLeft:10,
    fontWeight:"600"    
  },

  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,    
  },

  body: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,    
    marginTop :15,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  }, 
  khuyennghi:{
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,    
    marginTop :15,
    color:"orange"
  },

  chitietContainer: {
    width: "95%",    
    backgroundColor: "#fff",    
    borderRadius: 10    
  },
 
  chitietThuchien:{
    flexDirection:"row",justifyContent:"space-between",marginHorizontal:5,marginVertical:10
  },  

  tieude :{        
    fontSize:16
  },

  ketqua :{
    color:  "red",
    fontWeight:"bold",
    fontSize:16
  }

});
      
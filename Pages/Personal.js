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
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import App_Color from "../Themes/Color";
import APIs from "../Services/APIs";

export default function Personal() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <ScrollView style={{flex:1,width:"100%",marginLeft:20,marginTop:10}}>
      <Mota/>
      <Chitiet/>
      <View style={{height:100}} />
      </ScrollView>
    </View>
  );
}

const Header = () => {
    const user = {
        tennv:  "Huỳnh Bùi Thanh Tân",        
        manv: "VNP003123",
        img :   "https://ttkddongthap.net/tainguyen/images/919501318.jpg",
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
                <Text style={styles.txtMakpi}>{user.tennv}</Text>
                <Text style={styles.txtTenkpi}>{user.manv}</Text>                
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
                <Text style={styles.heading}>Chức danh</Text>
                </View>
                <Text>
                    P.ĐHNV Trung Tâm Kinh Doanh
                </Text>                
                <Text style={styles.body}>Ngày vào ngành</Text>
                <Text>01/09/1998</Text>
                <Text style={styles.khuyennghi}>Thâm niên công tác</Text>
                <Text>Thời gian làm việc: 21 năm </Text>
            </View>
        </View>
)};

const Chitiet =()=>{

const Items= [
    {
        title :'Thông tin cá nhân',
        note : 'Thông tin liên quan cá nhân',
        icon :'user'
    },
]


    return(        
        <View style={styles.chitietContainer}>            
        <View style={styles.card}>
                <View></View>
                    <View style={styles.chitietThuchien}>
                        <FontAwesome name='user' size={30} color='black' style={{marginTop:5,marginRight:10}}/>
                      <View>
                        <Text style={styles.tieude}>Thông tin cá nhân</Text>
                        <Text style={styles.tieudephu}>Thông tin cá nhân</Text>
                        </View>  
                    </View>
                    </View>                    

                    <View style={styles.card}>
                <View></View>
                    <View style={styles.chitietThuchien}>
                        <FontAwesome name='money' size={30} color='black' style={{marginTop:5,marginRight:10}}/>
                      <View>
                        <Text style={styles.tieude}>BSC / Tiền lương</Text>
                        <Text style={styles.tieudephu}>Theo dõi BSC và tiền lương</Text>
                        </View>  
                    </View>
                 </View>       


                 <View style={styles.card}>
                <View></View>
                    <View style={styles.chitietThuchien}>
                        <FontAwesome name='list' size={30} color='black' style={{marginTop:5,marginRight:10}}/>
                      <View>
                        <Text style={styles.tieude}>Báo cáo bán hàng</Text>
                        <Text style={styles.tieudephu}>Theo dõi bán hàng</Text>
                        </View>  
                    </View>
                 </View>       

                 <View style={styles.card}>
                <View></View>
                    <View style={styles.chitietThuchien}>
                        <FontAwesome name="lightbulb-o" size={30} color='black' style={{marginTop:5,marginRight:10}}/>
                      <View>
                        <Text style={styles.tieude}>Đóng góp ý kiến</Text>
                        <Text style={styles.tieudephu}>Kiến nghị và ý kiến đóng góp</Text>
                        </View>  
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
    height: 80,
    width: 80,
    marginRight: 20,
    borderRadius: 40,
  },

  txtMakpi: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
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
    paddingVertical: 10,
    paddingHorizontal: 25,
    width: '100%',    
    marginTop:5    
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
    borderRadius: 10    
  },
 
  chitietThuchien:{
    flexDirection:"row",    
    marginHorizontal:5,
    marginVertical:10
  },  

  tieude :{        
    fontSize:16,
    fontWeight:'700'
  },

  tieudephu :{        
    fontSize:12,
    color:App_Color.MauToi
  },


  ketqua :{
    color:  "red",
    fontWeight:"bold",
    fontSize:16
  }

});
      
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

export default function ProfileDetail() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <Banner />
      <BSC />
      <KPI />
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
              uri: "https://ttkddongthap.net/tainguyen/images/919501318.jpg",
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

const Banner = () => {
  return (
    <View
      style={{
        height: 160,
        backgroundColor: "#fff",
        width: "95%",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 15,
      }}
    >
      <Text style={{ marginTop: 15, marginLeft: 15, color: "gray" }}>
        Tiền lương
      </Text>
      <Text
        style={{
          marginTop: 5,
          marginLeft: 15,
          fontSize: 20,
          fontWeight: "bold",
          color: "green",
        }}
      >
        3.240.000đ
      </Text>
      <Text style={{ marginTop: 25, marginLeft: 15, color: "gray" }}>
        Khen thưởng dự kiến
      </Text>
      <Text
        style={{
          marginTop: 5,
          marginLeft: 15,
          fontSize: 15,
          fontWeight: "600",
          color: "orange",
        }}
      >
        250.000đ
      </Text>
    </View>
  );
};

const BSC = () => {
  const DATA = [
    {
      title: "Tỉ lệ nợ",
      tile: "90%",
      doanhthu: "4.305.541",
      img: "https://ttkddongthap.net/tainguyen/images/bsc_img/money.png",
      icon: "money",
    },
    {
      title: "Fiber",
      tile: "40%",
      doanhthu: "1.305.541",
      icon: "th-list",
    },
    {
      title: "MyTV",
      tile: "22%",
      doanhthu: "1.000.000",
      icon: "tv",
    },
    {
      title: "Di động TT",
      tile: "50%",
      doanhthu: "500.000",
      icon: "mobile-phone",
    },
    {
      title: "Đóng trước",
      tile: "50%",
      doanhthu: "200.000",
      icon: "money",
    },
    {
      title: "DD trả sau",
      tile: "88%",
      doanhthu: "545.000",
      icon: "mobile-phone",
    },
  ];

  return (
    <View
      style={{
        height: 200,
        backgroundColor: "#fff",
        width: "95%",
        marginBottom: 10,
        borderRadius: 15,
      }}
    >
      <Text style={{ marginTop: 15, marginLeft: 15, fontWeight: "600" }}>
        Danh mục BSC
      </Text>
      <FlatList
        horizontal={true}
        style={{ marginHorizontal: 10 }}
        data={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <View
                style={{
                  height: 140,
                  backgroundColor: App_Color.MauNen_Dark,
                  width: 160,
                  marginTop: 10,
                  marginRight: 10,
                  marginBottom: 10,
                  borderRadius: 10,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <FontAwesome
                    name={item.icon}
                    size={40}
                    color="gray"
                    style={{ marginTop: 15, marginLeft: 10 }}
                  />
                  <View>
                    <Text
                      style={{ marginTop: 10, marginLeft: 15, color: "gray" }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        marginTop: 5,
                        marginLeft: 15,
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "green",
                      }}
                    >
                      {item.tile}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{ marginTop: 25, marginLeft: 15, color: "gray" }}
                  >
                    Hoàn thành
                  </Text>
                  <Text
                    style={{
                      marginTop: 5,
                      marginLeft: 15,
                      fontSize: 15,
                      fontWeight: "600",
                    }}
                  >
                    {item.doanhthu}đ
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const KPI = () => {
  const DATA = [
    {
      title: "F11_2",
      tile: "90%",
      tenkpi: "Doanh thu trả trước (TKC-207) tăng mới",
    },
    {
      title: "S11_2",
      tile: "40%",
      tenkpi: "Thuê bao di động data trả trước phát triển mới",
    },
    {
      title: "S12_2",
      tile: "22%",
      tenkpi: "Thuê bao di động trả sau phát triển mới",
    },
    {
      title: "S13_2",
      tile: "50%",
      tenkpi: "Thuê bao FiberVNN phát triển mới",
    },
    {
      title: "S14_2",
      tile: "50%",
      tenkpi: "Thuê bao MyTV phát triển mới",
    },
    {
      title: "S42_1",
      tile: "88%",
      tenkpi: "Số lượng CTV XHH",
    },

    {
      title: "S43_8",
      tile: "88%",
      tenkpi: "Số lượng thuê bao cài đặt App My VNPT mới",
    },

    {
      title: "I171",
      tile: "88%",
      tenkpi: "Nhiệm vụ Lãnh đạo phân công",
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        width: "95%",
        borderRadius: 10,
      }}
    >
      <Text style={{ marginTop: 15, marginLeft: 15, fontWeight: "600" }}>
        Danh mục KPIs
      </Text>
      <FlatList
        style={{ marginHorizontal: 20, marginVertical: 10 }}
        data={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <View
                style={{
                  height: 85,
                  backgroundColor: App_Color.MauNen_Dark,
                  width: "100%",
                  marginTop: 10,
                  marginRight: 10,
                  borderRadius: 10,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{
                      height: 35,
                      width: 30,
                      marginTop: 20,
                      marginLeft: 15,
                    }}
                    source={{
                      uri: "https://ttkddongthap.net/tainguyen/images/nguyenthanhnhan.png",
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        marginTop: 10,
                        marginLeft: 15,
                        fontWeight: "bold",
                        fontSize: 14,
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        marginTop: 5,
                        marginLeft: 15,
                        fontSize: 11,
                        color: "gray",
                      }}
                    >
                      {item.tenkpi}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        width: "100%",
                      }}
                    >
                      <Text
                        style={{
                          marginLeft: 15,
                          marginBottom: 5,
                          alignSelf: "flex-end",
                          fontSize: 11,
                          fontWeight: "400",
                        }}
                      >
                        Thực hiện
                      </Text>
                      <Text
                        style={{
                          marginTop: 5,
                          marginLeft: 15,
                          fontSize: 20,
                          fontWeight: "bold",
                          color: "orange",
                        }}
                      >
                        {item.tile}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

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
    color: "#fff",
    fontSize: 14,
  },
  txtChucdanh: {
    fontWeight: "600",
    fontSize: 10,
    color: "#c9c9c9",
    marginTop: 3,
  },
  txtManv: {
    fontWeight: "600",
    fontSize: 10,
    color: "#fff",
    marginTop: 3,
  },
});

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import App_Color from "../Themes/Color";

export default function Profile() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <Content />
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

const Content = () => {
  return (
    <View
      style={{
        flex: 2,
        backgroundColor: App_Color.MauNen_Dark,
        width: "100%",
        alignItems: "center",
      }}
    >
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
              uri: "https://ttkddongthap.net/tainguyen/images/duongvanqui.png",
            }}
          />
          <View>
            <Text style={styles.txtUser}>Dwayne Johnson</Text>
            <Text style={{ color: "gray", fontSize: 10, marginTop: 2 }}>
              nội dung thực hiện
            </Text>
          </View>
        </View>
      </TouchableOpacity>

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
              uri: "https://ttkddongthap.net/tainguyen/images/nguyenthanhdut.png",
            }}
          />
          <Text style={styles.txtUser}>Dwayne Johnson</Text>
        </View>
      </TouchableOpacity>

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
              uri: "https://ttkddongthap.net/tainguyen/images/tranhuuthuan.png",
            }}
          />
          <Text style={styles.txtUser}>Dwayne Johnson</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ flex: 1, width: "100%", alignItems: "center" }}
      >
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
              uri: "https://ttkddongthap.net/tainguyen/images/vophuongthanh.png",
            }}
          />
          <Text style={styles.txtUser}>Dwayne Johnson</Text>
        </View>
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

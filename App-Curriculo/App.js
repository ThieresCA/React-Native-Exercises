import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import perfil from "./assets/img-curriculo.jpg";
import Card from "./components/Cards";

export default function App() {
  function handleMedia() {
    switch (social_media) {
      case "linkedin":
        Alert.alert("https://www.linkedin.com/in/thieres-caetano/");
        break;
      case "instagram":
        Alert.alert("https://www.instagram.com/th.cansado/");
        break;
      case "github":
        Alert.alert("https://github.com/ThieresCA");
    }
  }
  return (
    <>
      <StatusBar></StatusBar>
      <View style={style.page}>
        <View style={style.header}>
          <Image source={perfil} style={style.perfil} />
          <Text style={style.name}>Thieres Caetano</Text>
          <Text style={style.subscription}>Front-End Developer</Text>
          <View style={style.medias}>
            <TouchableOpacity onPress={() => handleMedia("github")}>
              <AntDesign name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMedia("instagram")}>
              <AntDesign name="instagram" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMedia("linkedin")}>
              <AntDesign name="linkedin-square" size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <Card title="Formação Academica">
        <Text style={style.exp}>Cursando - Análise e desenvolvimento de sistemas - UVV</Text>
        </Card>
        <Card title="Experiências Profissionais">
          <Text style={style.exp}>Americanas s.a - Front-End Jr</Text>
          <Text style={style.exp}>IPAMV - Estágiario de Suporte</Text>
        </Card>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#E7E7E7",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  perfil: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  subscription: {
    color: "#939393",
    marginBottom: 10,
  },
  medias: {
    flexDirection: "row",
    tintColor: "white",
    justifyContent: "space-between",
    width: "60%",
  },
  exp: {
    marginTop: 5,
  },
});

import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MapPin, CaretDown, ArrowsClockwise } from "phosphor-react-native";
import Sun from "../../assets/01d.svg";
import Sun02d from "../../assets/02d.svg";
import { useEffect, useState } from "react";

export function Home() {
  const [temperaturaAtual, setTemperaturaAtual] = useState("23");
  const [local, setLocal] = useState("Taubaté - SP");
  const [temperaturaMaxima, setTemperaturaMaxima] = useState("28");
  const [temperaturaMinima, setTemperaturaMinima] = useState("16");
  const [horaAtual, setHoraAtual] = useState("15:32");
  const [localCoordenadas, setLocalCoordenadas] = useState([]);

  return (
    <LinearGradient colors={["#4597d3", "#6506a4"]} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <MapPin color="#fff" size={25} />
            <Text style={styles.headerLeftText}>{local}</Text>
            <CaretDown color="#fff" size={25} />
          </View>

          <TouchableOpacity>
            <ArrowsClockwise color="#fff" size={25} />
          </TouchableOpacity>
        </View>

        <View style={styles.main}>
          <Text style={styles.welcomeText}>Bom dia, @!</Text>
          <Sun width={200} height={200} />
          <Text style={styles.welcomeTemperatura}>{temperaturaAtual} °C</Text>
          <Text style={styles.welcomeMaxMin}>
            Max.: {temperaturaMaxima} °C | Min.: {temperaturaMinima} °C
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Previsão para os próximos 7 dias</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.footerCard}>
            <Text style={styles.cardTitle}>Seg</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.cardTemperatura}>19°C</Text>
          </View>

          <View style={styles.footerCard}>
            <Text style={styles.cardTitle}>Ter</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.cardTemperatura}>19°C</Text>
          </View>

          <View style={styles.footerCard}>
            <Text style={styles.cardTitle}>Qua</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.cardTemperatura}>19°C</Text>
          </View>

          <View style={styles.footerCard}>
            <Text style={styles.cardTitle}>Qui</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.cardTemperatura}>19°C</Text>
          </View>

          <View style={styles.footerCard}>
            <Text style={styles.cardTitle}>Sex</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.cardTemperatura}>19°C</Text>
          </View>

          <View style={styles.footerCard}>
            <Text style={styles.cardTitle}>Sáb</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.cardTemperatura}>19°C</Text>
          </View>

          <View style={styles.footerCard}>
            <Text style={styles.cardTitle}>Dom</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.cardTemperatura}>19°C</Text>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 40,
    paddingHorizontal: 35,
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerLeftText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  main: {
    paddingVertical: 70,
    alignItems: "center",
    gap: 10,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "300",
    color: "#fff",
  },
  welcomeTemperatura: {
    fontSize: 100,
    fontWeight: "300",
    color: "#fff",
  },
  welcomeMaxMin: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  footer: {
    paddingLeft: 40,
    width: "100%",
    gap: 10,
  },
  footerText: {
    fontSize: 20,
    fontWeight: "300",
    color: "#fff",
  },
  footerCard: {
    width: 100,
    height: 130,
    backgroundColor: "rgba(255, 255, 255, 0.23)",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginRight: 14,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  cardTemperatura: {
    fontSize: 22,
    fontWeight: "300",
    color: "#fff",
  },
});

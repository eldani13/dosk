import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";

export default function OfferScreen() {
  const router = useRouter();
  const [searching, setSearching] = useState(false);
  const [foundDriver, setFoundDriver] = useState(false);
  const [acceptedDriver, setAcceptedDriver] = useState(false);

  useEffect(() => {
    if (searching) {
      const timer = setTimeout(() => {
        setFoundDriver(true);
        setSearching(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [searching]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/map-background.png")}
          style={styles.mapImage}
        />
        <Image source={require("@/assets/images/pin.png")} style={styles.pin} />
      </View>

      {acceptedDriver ? (
        <View style={styles.finalScreen}>
          <View style={styles.mapContainer}>
            <Image
              source={require("@/assets/images/map-background.png")}
              style={styles.mapRoute}
            />
          </View>
          <View style={styles.driverInfo}>
            <Image
              source={require("@/assets/images/driver.png")}
              style={styles.driverImage}
            />
            <Text style={styles.driverName}>Hugo Solano</Text>
            <Text style={styles.driverLocation}>📍 Santa Ana, Santa Ana</Text>
            <Image
              source={require("@/assets/images/carro.png")}
              style={styles.carImage}
            />
            <View style={styles.infocar}>
              <View style={styles.carInfo}>
                <Text style={styles.carDetails}>Nissan Versa</Text>
                <Text style={styles.carYear}>2018</Text>
              </View>
              <View style={styles.mainColor}>
                <Text style={styles.carColor}>Color: Azul</Text>
              </View>
              <View style={styles.mainEstrella}>
                <Text style={styles.rating}>5</Text>
                <Image
                  source={require("@/assets/images/estrella.png")}
                  style={styles.estrellaImage}
                />
              </View>
            </View>
            <Text style={styles.eta}>
              Llegada Aproximada: <Text style={styles.minuteText}>2</Text> min
            </Text>
            <TouchableOpacity style={styles.callButton}>
              <Text style={styles.callText}>Llama a tu Driver</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : foundDriver ? (
        <View style={styles.driverContainer}>
          <Image
            source={require("@/assets/images/driver.png")}
            style={styles.driverImage}
          />
          <Text style={styles.driverName}>Hugo Solano</Text>
          <Text style={styles.driverLocation}>📍 Santa Ana, Santa Ana</Text>
          <Text style={styles.counterOfferText}>Contra ofertó</Text>
          <Text style={styles.offerPrice}>$4.25</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.acceptButton}
              onPress={() => setAcceptedDriver(true)}
            >
              <Text style={styles.acceptText}>Aceptar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.counterOfferButton}>
              <Text style={styles.counterOfferTextButton}>Contra Oferta</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : searching ? (
        <View style={styles.searchingContainer}>
          <Text style={styles.searchingText}>Buscando Conductor...</Text>
          <Text style={styles.loadingDots}>• • • • •</Text>
        </View>
      ) : (
        <View style={styles.serviceContainer}>
          <Text style={styles.title}>¿Hacia a dónde vas?</Text>
          <Text style={styles.label}>¿Dónde te encuentras?</Text>
          <TextInput
            style={styles.input}
            placeholder="+ Añadir ubicación"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>¿A dónde vas?</Text>
          <TextInput
            style={styles.input}
            placeholder="+ Añadir ubicación"
            placeholderTextColor="#999"
          />
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.priceButton}>
              <Text style={styles.priceText}>$3.00 ▼</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.offerButton}
              onPress={() => setSearching(true)}
            >
              <Text style={styles.offerText}>Ofertar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  header: {
    alignItems: "center",
    position: "relative",
  },
  mapImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  pin: {
    position: "absolute",
    top: 150,
    width: 40,
    height: 40,
    objectFit: "contain",
    tintColor: "#DDF000",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  label: {
    color: "#fff",
    alignSelf: "flex-start",
  },
  input: {
    width: "100%",
    backgroundColor: "#444",
    padding: 12,
    borderRadius: 10,
    color: "#fff",
    marginBottom: 15,
  },
  priceButton: {
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
  priceText: {
    color: "#fff",
    fontWeight: "bold",
  },
  offerButton: {
    backgroundColor: "#DDF000",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
  offerText: {
    color: "#000",
    fontWeight: "bold",
  },
  serviceContainer: {
    backgroundColor: "#222",
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "40%",
  },
  searchingContainer: {
    backgroundColor: "#222",
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "40%",
  },
  searchingText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  loadingDots: {
    fontSize: 25,
    color: "#DDF000",
  },
  driverContainer: {
    backgroundColor: "#222",
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "45%",
  },
  driverImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  estrellaImage: {
    width: 15,
    height: 15,
    objectFit: "contain",
  },
  driverName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  driverLocation: {
    color: "#ccc",
    marginBottom: 10,
  },
  counterOfferText: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
  offerPrice: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#DDF000",
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  acceptButton: {
    backgroundColor: "#999",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
  acceptText: {
    color: "#000",
    fontWeight: "bold",
  },
  counterOfferButton: {
    backgroundColor: "#DDF000",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
  counterOfferTextButton: {
    color: "#000",
    fontWeight: "bold",
  },
  finalScreen: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#111",
  },
  mapContainer: {
    flex: 2,
  },
  mapRoute: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  driverInfo: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#222",
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    zIndex: 10,
  },
  carImage: {
    width: "50%",
    height: 80,
    marginVertical: 10,
    objectFit: "contain",
  },
  carDetails: {
    display: "flex",
    flexDirection: "column",
    fontSize: 16,
    color: "#fff",
  },
  carColor: {
    color: "#fff",
  },
  rating: {
    fontSize: 18,
    color: "#fff",
  },
  eta: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
  },
  callButton: {
    backgroundColor: "#DDF000",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  callText: {
    fontWeight: "bold",
    color: "#000",
  },
  infocar: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  carYear: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  carInfo: {
    flexDirection: "column",
    alignItems: "center",
  },
  mainEstrella: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  mainColor: {
    display: "flex",
    justifyContent: "center",
  },
  minuteText: {
    color: "#DAFE2B",
  },
});

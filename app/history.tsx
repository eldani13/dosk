import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function HistoryScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Historial de solicitudes</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
          <View key={index} style={styles.tripItem}>
            <Text style={styles.tripDate}>16 de feb., 6:15 p.m.</Text>
            <Text style={styles.tripDetail}>🔵 Av. 11 con 78</Text>
            <Text style={styles.tripDetail}>🟡 Cra. 10 #23-107</Text>
            <Text style={styles.price}>COP 12.000,00</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 55,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  backButton: {
    position: "absolute",
    left: 0,
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    top: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  scrollContainer: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  tripItem: {
    backgroundColor: "#1C1C1E",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  tripDate: {
    color: "#bbb",
    fontSize: 14,
  },
  tripDetail: {
    color: "#fff",
    fontSize: 16,
    marginTop: 5,
  },
  price: {
    fontWeight: "bold",
    color: "#DAFE2B",
    fontSize: 16,
    marginTop: 5,
    textAlign: "right",
  },
});

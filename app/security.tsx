import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SecurityScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>Seguridad</Text>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Seguridad</Text>
        <View style={styles.grid}>
          <SecurityOption title="Soporte" />
          <SecurityOption title="Contacto de confianza" />
          <SecurityOption title="Compartir ruta" />
          <SecurityOption title="Item" />
        </View>

        <Text style={styles.sectionTitle}>Protección</Text>
        <View style={styles.grid}>
          <SecurityOption title="Verifica la identidad del conductor" />
          <SecurityOption title="Cómo comenzar" />
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Llamar a emergencia</Text>
      </TouchableOpacity>
    </View>
  );
}

const SecurityOption = ({ title }: { title: string }) => (
  <TouchableOpacity style={styles.option}>
    <Ionicons name="home" size={20} color="white" />
    <Text style={styles.optionText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  backButton: {
    position: "absolute",
    top: 55,
    left: 20,
    zIndex: 10,
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 40,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  option: {
    width: "48%",
    backgroundColor: "gray",
    paddingVertical: 20,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  optionText: {
    color: "white",
    marginTop: 5,
    textAlign: "center",
  },
  emergencyButton: {
    flexDirection: "row",
    backgroundColor: "#DAFE2B",
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  emergencyText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#E3FF19",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 0,
    marginBottom: 50,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

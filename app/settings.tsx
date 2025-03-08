import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>Configuración</Text>
      <Text style={styles.sectionTitle}>Ajustes</Text>

      <View style={styles.optionsContainer}>
        <View style={styles.option}>
          <Text style={styles.optionText}>Número de teléfono</Text>
          <Text style={styles.optionValue}>57********50</Text>
        </View>

        <View style={styles.option}>
          <Text style={styles.optionText}>Idioma</Text>
          <Text style={styles.optionValue}>Español</Text>
        </View>

        <View style={styles.option}>
          <Text style={styles.optionText}>Formato fecha</Text>
          <Text style={styles.optionValue}>24 horas</Text>
        </View>

        <View style={styles.option}>
          <Text style={styles.optionText}>Unidades de distancia</Text>
          <Text style={styles.optionValue}>En millas</Text>
        </View>

        <View style={styles.option}>
          <Text style={styles.optionText}>Acerca de la app</Text>
          <Text style={styles.optionValue}>DosKa</Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Eliminar mi cuenta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
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
  optionsContainer: {
    flex: 1,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#2A2A2A",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 10,
  },
  optionText: {
    color: "white",
    fontSize: 16,
  },
  optionValue: {
    color: "gray",
    fontSize: 16,
  },
  buttonsContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 50,
  },
  deleteButton: {
    backgroundColor: "red",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  deleteButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#DFFF00",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});

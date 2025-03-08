import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SupportScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>Soporte</Text>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Temas principales</Text>

        <SupportOption title="Entregas" />
        <SupportOption title="Ciudad" />
        <SupportOption title="Problemas con la app" />
        <SupportOption title="Acerca de" />
      </ScrollView>
    </View>
  );
}

const SupportOption = ({ title }: { title: string }) => (
  <TouchableOpacity style={styles.option}>
    <Text style={styles.optionText}>{title}</Text>
    <Ionicons name="arrow-forward-outline" size={20} color="white" />
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
  option: {
    flexDirection: "row",
    backgroundColor: "gray",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionText: {
    color: "white",
    fontSize: 16,
  },
});

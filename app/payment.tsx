import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const paymentMethods = [
  {
    id: "1",
    name: "Nequi",
    description: "Pago con Nequi",
    image: require("@/assets/images/nequi.png"),
  },
  {
    id: "2",
    name: "Daviplata",
    description: "Pago con Daviplata",
    image: require("@/assets/images/daviplata.png"),
  },
  {
    id: "3",
    name: "Efectivo",
    description: "Pago con efectivo",
    image: require("@/assets/images/efectivo.png"),
  },
];

interface PaymentScreenProps {
  onGoBack: () => void;
}

export default function PaymentScreen({ onGoBack }: PaymentScreenProps) {
  const router = useRouter();
  const [selected, setSelected] = useState("1");

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>Métodos de pago</Text>

      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.paymentItem}
            onPress={() => setSelected(item.id)}
          >
            <Image source={item.image} style={styles.paymentImage} />
            <View>
              <Text style={styles.paymentName}>{item.name}</Text>
              <Text style={styles.paymentDescription}>{item.description}</Text>
            </View>
            {selected === item.id && (
              <Ionicons
                name="checkmark"
                size={24}
                color="gray"
                style={styles.checkIcon}
              />
            )}
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Agregar tarjeta</Text>
      </TouchableOpacity>
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
  paymentItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  paymentImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginRight: 10,
    objectFit: "contain",
  },
  paymentName: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  paymentDescription: {
    fontSize: 12,
    color: "gray",
  },
  checkIcon: {
    marginLeft: "auto",
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

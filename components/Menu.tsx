import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";

interface MenuProps {
  onClose: () => void;
}

export default function Menu({ onClose }: MenuProps) {
  return (
    <View style={styles.overlay}>
      <View style={styles.menuContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={require("@/assets/images/driver.png")}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.profileName}>Carlos Robles</Text>
            <Text style={styles.profileRole}>Pasajero</Text>
          </View>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>5.0</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/payment")}
        >
          <MaterialIcons name="attach-money" size={20} color="white" />
          <View>
            <Text style={styles.menuText}>Métodos de pago</Text>
            <Text style={styles.subText}>Efectivo</Text>
          </View>
          <FontAwesome
            name="money"
            size={30}
            color="#DAFE2B"
            style={styles.rightIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/history")}
        >
          <Ionicons name="time-outline" size={20} color="white" />
          <Text style={styles.menuText}>Historial de solicitudes</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>21</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/security")}
        >
          <Ionicons name="lock-closed-outline" size={20} color="white" />
          <Text style={styles.menuText}>Seguridad</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/support")}
        >
          <Ionicons name="help-circle-outline" size={20} color="white" />
          <Text style={styles.menuText}>Soporte</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/discount")}
        >
          <FontAwesome5 name="ticket-alt" size={20} color="white" />
          <View>
            <Text style={styles.menuText}>Descuentos</Text>
            <Text style={styles.subText}>Ingresa el código promocional</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/information")}
        >
          <Entypo name="info-with-circle" size={20} color="white" />
          <Text style={styles.menuText}>Información</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome5 name="car" size={20} color="white" />
          <Text style={styles.menuText}>Quiero ser conductor</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/settings")}
        >
          <Ionicons name="settings-outline" size={20} color="white" />
          <Text style={styles.menuText}>Configuración</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.exitButton} onPress={onClose}>
          <Ionicons name="arrow-back" size={20} color="white" />
          <Text style={styles.menuText}>Salir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "flex-start",
    zIndex: 10,
  },
  menuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1C1C1E",
    padding: 20,
    paddingTop: 70,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 2,
    borderColor: "#DAFE2B",
  },

  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  profileRole: {
    fontSize: 14,
    color: "#bbb",
  },
  rating: {
    marginLeft: "auto",
    backgroundColor: "#444",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  ratingText: {
    fontSize: 14,
    color: "#fff",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  menuText: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 10,
  },
  subText: {
    fontSize: 12,
    color: "#bbb",
    marginLeft: 10,
  },
  rightIcon: {
    marginLeft: "auto",
  },
  badge: {
    backgroundColor: "#666",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: "auto",
  },
  badgeText: {
    fontSize: 14,
    color: "#fff",
  },
  divider: {
    height: 1,
    backgroundColor: "#333",
    marginVertical: 10,
  },
  exitButton: {
    position: "absolute",
    bottom: 60,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
});

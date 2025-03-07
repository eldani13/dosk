import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from "react-native";
import VerificationScreen from "./VerificationScreen";

// 🔹 Definir las props que acepta LoginScreen
interface LoginScreenProps {
  onLogin: () => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [phone, setPhone] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [showVerification, setShowVerification] = useState(false);

  const handleSendCode = () => {
    if (phone.trim() !== "") {
      setShowOptions(true);
    } else {
      alert("Por favor, ingresa un número válido");
    }
  };

  const handleVerification = () => {
    setShowOptions(false);
    setShowVerification(true);
  };

  // 🔹 Ahora `handleVerifyCode` usa `onLogin`
  const handleVerifyCode = () => {
    onLogin(); // 🔥 Notifica a `RootLayout` que el usuario está autenticado
  };

  if (showVerification) {
    return <VerificationScreen onVerify={handleVerifyCode} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Introduce tu número de Teléfono</Text>
      <Text style={styles.subtitle}>
        Te enviaremos un código para verificar tu número telefónico
      </Text>

      <View style={styles.inputContainer}>
        <Image
          source={require("@/assets/images/colombia.png")}
          style={styles.flag}
        />
        <Text style={styles.prefix}>+57</Text>
        <TextInput
          style={styles.input}
          placeholder="323 456 7890"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSendCode}>
        <Text style={styles.buttonText}>Enviar código</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>
        Al unirte a nuestra aplicación aceptas nuestros
        <Text style={styles.link}> Términos de Uso</Text> y Política de
        privacidad.
      </Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showOptions}
        onRequestClose={() => setShowOptions(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              ¿Cómo quieres recibir el código?
            </Text>

            <TouchableOpacity
              style={styles.optionButton}
              onPress={handleVerification}
            >
              <Image
                source={require("@/assets/images/whatsapp.png")}
                style={styles.icon}
              />
              <Text style={styles.optionText}>WhatsApp</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionButton}
              onPress={handleVerification}
            >
              <Image
                source={require("@/assets/images/message.png")}
                style={styles.icon}
              />
              <Text style={styles.optionText}>Mensaje de texto</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    color: "#bbb",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#444",
    borderRadius: 8,
    padding: 10,
    width: "100%",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#c5ff2e",
  },
  flag: { width: 15, height: 15, marginRight: 10 },
  prefix: { color: "#fff", fontSize: 16, marginRight: 10 },
  input: { flex: 1, color: "#fff", fontSize: 16 },
  button: {
    backgroundColor: "#c5ff2e",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  buttonText: { fontSize: 18, fontWeight: "bold", color: "#000" },
  terms: { color: "#bbb", fontSize: 12, textAlign: "center" },
  link: { color: "#c5ff2e", fontWeight: "bold" },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalContent: {
    backgroundColor: "#333",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#444",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  optionText: { color: "#fff", fontSize: 16, marginLeft: 10 },
  icon: { width: 24, height: 24 },
});

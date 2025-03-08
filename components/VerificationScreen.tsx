import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

export default function VerificationScreen({
  onVerify,
}: {
  onVerify: () => void;
}) {
  const [countdown, setCountdown] = useState(60);
  const [code, setCode] = useState(["", "", "", "", ""]);
  const inputsRef = useRef<Array<TextInput | null>>([]);
  const router = useRouter();

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return;

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 4) {
      inputsRef.current[index + 1]?.focus();
    }

    if (newCode.join("").length === 5) {
      handleVerify();
    }
  };

  const handleVerify = () => {
    onVerify();
    // setTimeout(() => {
    //   router.replace("/personal-data");
    // }, 9000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Te enviaremos un código</Text>
      <Text style={styles.subtitle}>
        Según el método que escogiste, recibirás un código el cual tendrás que
        ingresar a continuación:
      </Text>

      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            style={styles.codeInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>

      <Text style={styles.countdown}>
        Puedes reenviar el código en{" "}
        <Text style={styles.bold}>{countdown}</Text> segundos
      </Text>

      <TouchableOpacity
        style={styles.verifyButton}
        onPress={handleVerify}
        disabled={code.join("").length < 5}
      >
        <Text style={styles.verifyButtonText}>Verificar Código</Text>
      </TouchableOpacity>
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
  codeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  codeInput: {
    width: 50,
    height: 50,
    backgroundColor: "#222",
    color: "#DAFE2B",
    fontSize: 24,
    textAlign: "center",
    borderRadius: 8,
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: "#DAFE2B",
  },
  countdown: { color: "#bbb", fontSize: 14 },
  bold: { fontWeight: "bold", color: "#c5ff2e" },
  verifyButton: {
    backgroundColor: "#c5ff2e",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  verifyButtonText: { fontSize: 18, fontWeight: "bold", color: "#000" },
});

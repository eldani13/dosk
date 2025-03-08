import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRouter, useRootNavigationState } from "expo-router";

export default function PersonalDataScreen() {
  const router = useRouter();
  const navigationState = useRootNavigationState();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  const isFormComplete = name && lastName && month && day && year;

  const handleSubmitData = () => {
    if (!navigationState?.key) {
      return;
    }

    if (isFormComplete) {
      router.replace("/loading");
    } else {
      alert("Por favor completa todos los datos");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su nombre"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese su apellido"
        placeholderTextColor="#999"
        value={lastName}
        onChangeText={setLastName}
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={month}
          onValueChange={setMonth}
          style={styles.picker}
        >
          <Picker.Item label="MM" value="" />
          {[...Array(12)].map((_, i) => (
            <Picker.Item
              key={i}
              label={`${i + 1}`}
              value={(i + 1).toString()}
            />
          ))}
        </Picker>

        <Picker
          selectedValue={day}
          onValueChange={setDay}
          style={styles.picker}
        >
          <Picker.Item label="DD" value="" />
          {[...Array(31)].map((_, i) => (
            <Picker.Item
              key={i}
              label={`${i + 1}`}
              value={(i + 1).toString()}
            />
          ))}
        </Picker>

        <Picker
          selectedValue={year}
          onValueChange={setYear}
          style={styles.picker}
        >
          <Picker.Item label="YYYY" value="" />
          {[...Array(100)].map((_, i) => {
            const yearValue = (new Date().getFullYear() - i).toString();
            return <Picker.Item key={i} label={yearValue} value={yearValue} />;
          })}
        </Picker>
      </View>

      <TouchableOpacity
        style={[styles.button, !isFormComplete && styles.disabledButton]}
        onPress={handleSubmitData}
        disabled={!isFormComplete}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Al unirte a nuestra aplicación aceptas nuestros{" "}
        <Text style={styles.link}>Términos de Uso</Text> y{" "}
        <Text style={styles.link}>Política de privacidad</Text>.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    backgroundColor: "#333",
    color: "#fff",
    width: "80%",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  picker: { flex: 1, color: "#fff", marginHorizontal: 5 },
  button: {
    backgroundColor: "#f7ff0a",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
  },
  disabledButton: { backgroundColor: "#555" },
  buttonText: { fontWeight: "bold" },
  footerText: { color: "#aaa", textAlign: "center" },
  link: { color: "#f7ff0a", textDecorationLine: "underline" },
});

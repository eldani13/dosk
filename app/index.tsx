import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Menu from '@/components/Menu';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  const [services, setServices] = useState([
    { id: 'package', image: require('@/assets/images/package.png'), label: 'Envio' },
    { id: 'car', image: require('@/assets/images/car.png'), label: 'Viaje' },
    { id: 'moto', image: require('@/assets/images/moto.png'), label: 'Viaje' },
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleSelectService = (index:number) => {
    if (index !== 1) {
      const newServices = [...services];
      [newServices[1], newServices[index]] = [newServices[index], newServices[1]];
      setServices(newServices);
    }
    router.push("/offer");
  };
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsMenuOpen(true)} style={styles.menuButton}>
        <Ionicons name="menu" size={32} color="white" />
      </TouchableOpacity>

      {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}

      <View style={styles.header}>
        <Image source={require('@/assets/images/map-background.png')} style={styles.mapBackground} />
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Bienvenido,</Text>
          <Text style={styles.userName}>Carlos</Text>
        </View>
      </View>

      <View style={styles.serviceContainer}>
        <Text style={styles.serviceTitle}>¿Qué servicio deseas utilizar?</Text>
        <Text style={styles.serviceSubtitle}>Selecciona el servicio que necesitas:</Text>

        <View style={styles.serviceOptions}>
          {services.map((service, index) => (
            <TouchableOpacity
              key={service.id}
              style={[styles.serviceOption, index === 1 && styles.selectedService]}
              onPress={() => handleSelectService(index)}
            >
              <Image
                source={service.image}
                style={index === 1 ? styles.selectedServiceImage : styles.serviceImage}
              />
              {service.label ? <Text style={styles.serviceText}>{service.label}</Text> : null}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  menuButton: {
    position: 'absolute',
    top: 70,
    left: 20,
    zIndex: 10,
  },
  header: {
    alignItems: 'center',
    position: 'relative',
  },
  mapBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  welcomeContainer: {
    position: 'absolute',
    top: '20%',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  userName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  serviceContainer: {
    backgroundColor: '#222',
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '40%',
  },
  serviceTitle: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  serviceSubtitle: {
    fontSize: 14,
    color: '#bbb',
    marginBottom: 20,
  },
  serviceOptions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'center',
  },
  serviceOption: {
    width: 90,
    height: 90,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    backgroundColor: '#808080',
    marginHorizontal: 5,
  },
  selectedService: {
    width: 120,
    height: 120,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  serviceImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  selectedServiceImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  serviceText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#fff',
    textAlign: 'center',
  },
});

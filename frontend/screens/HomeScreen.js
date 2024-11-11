import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Replace the following with your logo image if available */}
        <View style={styles.logo}>
          <Image
            style={styles.logoImage}
            source={require('../assets/logo.png')} // Replace with your logo path
          />
        </View>
        <Text style={styles.title}>TRACKR</Text>
      </View>
<TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('Login')}
>
  <Text style={styles.buttonText}>Let's Get Started</Text>
</TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 20,
  },
  logoImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF', // Blue color
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginBottom: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

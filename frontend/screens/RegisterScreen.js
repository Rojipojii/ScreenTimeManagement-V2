import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
  <View style={styles.topNav}>
    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
      <Text style={styles.topNavTextBold}>Sign Up</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text style={styles.topNavText}>Log In</Text>
    </TouchableOpacity>
  </View>

      <Ionicons name="person-circle-outline" size={80} color="#007AFF" style={styles.icon} />

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#B0B0B0"
      />
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#B0B0B0"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#B0B0B0"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#B0B0B0"
        secureTextEntry={true}
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
  },
  topNav: {
    position: 'absolute',
    top: 30,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  topNavText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: 'normal',
    marginLeft: 10, // Small space between Sign Up and Log In
  },
  topNavTextBold: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  icon: {
    marginBottom: 30, // Added space between the icon and the input field
  },
  input: {
    width: '80%',
    height: 40,  // Reduced height
    borderColor: '#B0B0B0',
    borderWidth: 1,
    borderRadius: 6,  // Reduced border radius
    paddingHorizontal: 12,  // Reduced padding
    marginBottom: 12,  // Reduced margin
    backgroundColor: '#F0F0F0',
  },
  button: {
    width: '80%',
    height: 45,  // Reduced height
    backgroundColor: '#007AFF',
    borderRadius: 6,  // Reduced border radius
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,  // Reduced margin
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,  // Reduced font size
    fontWeight: 'bold',
  },
});

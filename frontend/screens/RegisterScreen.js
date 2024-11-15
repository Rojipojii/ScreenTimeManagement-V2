import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterScreen({ navigation }) {
  // State variables to hold form data
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle registration
  const handleRegister = async () => {
    if (!username || !fullName || !email || !password) {
      Alert.alert('All fields are required!');
      return;
    }

    try {
      const response = await fetch('http://YOUR_SERVER_IP:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, fullName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Registration successful!', 'You can now log in.');
        navigation.navigate('Login');  // Redirect to Login screen
      } else {
        Alert.alert('Registration failed', data.message || 'An error occurred');
      }
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert('Error', 'Could not complete registration.');
    }
  };

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
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#B0B0B0"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#B0B0B0"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#B0B0B0"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
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

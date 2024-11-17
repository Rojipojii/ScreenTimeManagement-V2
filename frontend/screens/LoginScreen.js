import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import axios from 'axios'; // Import axios

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Please fill in both fields.');
    } else {
      setError('');
      try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        const data = await response.json();
  
        console.log('Login Response:', data); // Log the full response
  
        if (response.ok && data.token) {
          console.log('Login successful! Token:', data.token); // Confirm token presence
          console.log('Navigating to Dashboard'); // Log before navigating
          navigation.navigate('Dashboard'); // Navigate only if token is present
        } else {
          setError('Invalid credentials. Please try again.');
          console.log('Login failed: Invalid credentials');
        }
      } catch (error) {
        setError('Error logging in. Please try again.');
        console.error('Login Error:', error);
        Alert.alert('Error', 'An error occurred during login.');
      }
    }
  };
  

  return (
    <View style={styles.container}>
      <Ionicons name="person-circle-outline" size={80} color="#007AFF" style={styles.icon} />

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Forgotten Password')}>
        <Text style={styles.forgotPassword}>Forgotten Password?</Text>
      </TouchableOpacity>

      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.separator} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.createAccount}>Create New Account</Text>
      </TouchableOpacity>

      {/* Test Button */}
      <TouchableOpacity style={styles.testButton} onPress={() => navigation.navigate('Test')}>
        <Text style={styles.testButtonText}>Test</Text>
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
    padding: 15,
  },
  input: {
    width: '80%',
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#e0e0e0',
    marginVertical: 6,
    fontSize: 14,
  },
  icon: {
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginTop: 40,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#007AFF',
    marginTop: 12,
    fontSize: 14,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#aaa',
    fontSize: 12,
  },
  createAccount: {
    color: '#007AFF',
    fontSize: 14,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 8,
  },
  testButton: {
    backgroundColor: '#28a745',
    paddingVertical: 8,
    paddingHorizontal: 60,
    borderRadius: 12,
    marginTop: 12,
  },
  testButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

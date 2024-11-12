import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please fill in both fields.');
    } else {
      setError('');
      navigation.navigate('Home');
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
      <TouchableOpacity style={styles.testButton} onPress={() => navigation.navigate('TestScreen')}>
        <Text style={styles.testButtonText}>Test</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', // Centers horizontally
    justifyContent: 'center', // Centers vertically
    padding: 15, // Reduced padding to make the container more compact
  },
  input: {
    width: '80%',
    padding: 8, // Reduced padding for a more compact input
    borderRadius: 12, // Smaller border radius for the input
    backgroundColor: '#e0e0e0',
    marginVertical: 6, // Reduced vertical margin for compact design
    fontSize: 14, // Smaller font size for input
  },

  icon: {
    marginBottom: 15, // Added space between the icon and the input field
  },
  
  loginButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15, // Reduced vertical padding
    paddingHorizontal: 40, // Reduced horizontal padding for a smaller button
    borderRadius: 12, // Smaller border radius for the button
    marginTop: 40, // Reduced top margin for closer alignment
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 15, // Smaller font size for the button text
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#007AFF',
    marginTop: 12, // Reduced margin for spacing
    fontSize: 14, // Smaller font size for the forgotten password link
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20, // Reduced vertical margin for separation
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#aaa',
    fontSize: 12, // Smaller font size for "OR" text
  },
  createAccount: {
    color: '#007AFF',
    fontSize: 14, // Smaller font size for the create account link
  },
  errorText: {
    color: 'red',
    fontSize: 12, // Smaller font size for error text
    marginTop: 8, // Reduced margin for error message
  },
  testButton: {
    backgroundColor: '#28a745',
    paddingVertical: 8, // Reduced padding
    paddingHorizontal: 60, // Reduced width for the button
    borderRadius: 12, // Smaller border radius for the test button
    marginTop: 12, // Reduced margin for closer alignment
  },
  testButtonText: {
    color: '#fff',
    fontSize: 14, // Smaller font size for the test button text
    fontWeight: 'bold',
  },
});
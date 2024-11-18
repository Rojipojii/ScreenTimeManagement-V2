import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import DeviceInfo from 'react-native-device-info';  // Import DeviceInfo for app usage stats

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [screenTime, setScreenTime] = useState(0);
  const [currentApp, setCurrentApp] = useState('');

  useEffect(() => {
    // Start tracking screen time after login
    const startTracking = async () => {
      const appUsage = await DeviceInfo.getAppUsageStats();  // Example method for getting app usage (depends on library)
      setCurrentApp(appUsage.appName);
      setScreenTime(appUsage.timeSpent);  // Example; you need a proper API here for time tracking
    };

    if (username && password) {
      startTracking();
    }

    // Clean up when leaving the screen
    return () => {
      // You might want to stop tracking or save data here
      console.log('Stopped tracking for this session');
    };
  }, [username, password]);

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Please fill in both fields.');
      return;
    }

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

      if (response.ok && data.token) {
        // Ensure all data is stringified
        await AsyncStorage.setItem('user_id', String(data.user?.user_id || '0')); // Default to '0' if missing
        await AsyncStorage.setItem('token', data.token);
        await AsyncStorage.setItem('username', data.user?.username || 'Guest');
        await AsyncStorage.setItem('fullname', data.user?.fullName || 'No Name Provided');

        // Log saved values for debugging
        const storedUserId = await AsyncStorage.getItem('user_id');
        const storedToken = await AsyncStorage.getItem('token');
        const storedUsername = await AsyncStorage.getItem('username');
        const storedFullname = await AsyncStorage.getItem('fullname');

        console.log('Verification of Stored Data:');
        console.log('User ID:', storedUserId);
        console.log('Token:', storedToken);
        console.log('Username:', storedUsername);
        console.log('Fullname:', storedFullname);

        // Navigate to Dashboard
        navigation.navigate('Dashboard');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setError('Error logging in. Please try again.');
      console.error('Login Error:', error);
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

      {/* Display Screen Time */}
      {screenTime > 0 && (
        <View style={styles.screenTimeContainer}>
          <Text style={styles.screenTimeText}>
            Current App: {currentApp} - Time Spent: {screenTime} minutes
          </Text>
        </View>
      )}

      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.separator} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.createAccount}>Create New Account</Text>
      </TouchableOpacity>

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
  screenTimeContainer: {
    marginTop: 20,
  },
  screenTimeText: {
    fontSize: 16,
    color: '#333',
  },
});

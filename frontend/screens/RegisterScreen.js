import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function RegisterScreen({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      {/* Top Navigation Links */}
      <View style={styles.topNav}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.topNavText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.topNavText}>Log In</Text>
        </TouchableOpacity>
      </View>

      {/* Icon */}
      <View style={styles.iconContainer}>
        {/* Replace with an icon image if you have one */}
        <Image
          source={{ uri: 'https://example.com/your-icon.png' }} // replace with your icon URL or local file
          style={styles.icon}
        />
      </View>

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

      {/* Terms and Conditions */}
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isChecked}
          onValueChange={setIsChecked}
        />
        <Text style={styles.checkboxText}>Agree with terms and conditions</Text>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} disabled={!isChecked}>
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
    paddingHorizontal: 20,
  },
  topNav: {
    position: 'absolute',
    top: 40,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  topNavText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007AFF',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#B0B0B0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#F0F0F0',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  checkboxText: {
    marginLeft: 8,
    color: '#333333',
    fontSize: 14,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SettingsScreen = () => {
  // Example data for settings options
  const settingsOptions = [
    { id: '1', title: 'Account' },
    { id: '2', title: 'Notifications' },
    { id: '3', title: 'Privacy and Security' },
    { id: '4', title: 'Help and Support' },
    { id: '5', title: 'About' },
  ];

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for settings"
          style={styles.searchInput}
        />
        <Icon name="search" size={24} color="#888" style={styles.searchIcon} />
      </View>

      {/* Settings Options List */}
      <FlatList
        data={settingsOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.optionContainer}>
            <Text style={styles.optionText}>{item.title}</Text>
            <Icon name="keyboard-arrow-right" size={24} color="#888" />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Icon name="logout" size={24} color="red" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 8,
    height: 40,
  },
  searchInput: { flex: 1, fontSize: 16 },
  searchIcon: { marginLeft: 8 },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  optionText: { fontSize: 16 },
  separator: { height: 1, backgroundColor: '#ccc' },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 8,
  },
  logoutText: { color: 'red', fontSize: 16, marginLeft: 8 },
});

export default SettingsScreen;

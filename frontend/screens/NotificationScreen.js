import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const notifications = [
  {
    id: '1',
    title: 'Limiting Video Games',
    description: 'Limiting video games to 60 mins',
    status: 'Not Finished',
    icon: 'gamepad',
  },
  {
    id: '2',
    title: 'Sleeping',
    description: 'Sleeping 8hrs per day',
    status: 'Not Finished',
    icon: 'bed',
  },
  {
    id: '3',
    title: 'Running',
    description: 'Running 10 mins everyday',
    status: 'In Progress',
    icon: 'run',
  },
];

const NotificationPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Recent Notifications</Text>
        <TouchableOpacity>
          <Text style={styles.markAsRead}>Mark as read</Text>
        </TouchableOpacity>
      </View>

      {/* Notification List */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <View style={styles.iconContainer}>
              <Icon name={item.icon} size={24} color="#4A90E2" />
            </View>
            <View style={styles.notificationContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.status}>Status: {item.status}</Text>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
          <Text style={styles.navIcon}>📅</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navIcon}>➕</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Text style={styles.navIcon}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.navIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
  },
  markAsRead: {
    color: '#4A90E2',
    fontSize: 14,
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8F4FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  notificationContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  description: {
    fontSize: 14,
    color: '#777777',
  },
  status: {
    fontSize: 14,
    color: '#4A90E2',
    marginTop: 4,
  },
  separator: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginHorizontal: 16,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navIcon: {
    fontSize: 20,
  },
});

export default NotificationPage;

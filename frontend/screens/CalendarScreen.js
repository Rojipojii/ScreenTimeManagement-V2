import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarPage = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Calendar Header */}
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: { selected: true, marked: true, selectedColor: '#4A90E2' },
          }}
          theme={{
            selectedDayBackgroundColor: '#4A90E2',
            arrowColor: '#4A90E2',
          }}
          style={styles.calendar}
        />

        {/* Add Task Button */}
        <TouchableOpacity style={styles.addTaskButton}>
          <Text style={styles.addTaskButtonText}>Add Task</Text>
        </TouchableOpacity>

        {/* Current Tasks Section */}
        <View style={styles.currentTasks}>
          <Text style={styles.sectionTitle}>Current Tasks</Text>
          <Text style={styles.taskPlaceholder}>No tasks for this date</Text>
        </View>
      </ScrollView>

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
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Text style={styles.navIcon}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.navIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CalendarPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingBottom: 80, // add padding to avoid overlapping with bottom navigation
  },
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#4A90E2',
  },
  addTaskButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#4A90E2',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 20,
    alignItems: 'center',
  },
  addTaskButtonText: {
    color: '#4A90E2',
    fontWeight: '600',
  },
  currentTasks: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: '#4A90E2',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 10,
  },
  taskPlaceholder: {
    color: '#AAAAAA',
    fontStyle: 'italic',
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

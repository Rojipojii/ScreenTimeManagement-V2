import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <View style={styles.container}>
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
        {/* Display current tasks here */}
        <Text style={styles.taskPlaceholder}>No tasks for this date</Text>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity>
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navIcon}>📅</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navIcon}>➕</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navIcon}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity>
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
  },
  navIcon: {
    fontSize: 20,
  },
});

export default CalendarPage;

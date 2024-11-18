import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { ProgressBar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DashboardScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Fetch user info
    const fetchUserInfo = async () => {
      try {
        const name = await AsyncStorage.getItem('fullname');
        const username = await AsyncStorage.getItem('username');
        setFullName(name || 'No full name available');
        setUserName(username || 'No username available');
      } catch (error) {
        console.error('Error fetching data from AsyncStorage: ', error);
      }
    };

    fetchUserInfo();

    // Set the current date
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
    setCurrentDate(formattedDate);
  }, []);

  const screenUsageData = [
    { name: 'Social Media', population: 45, color: '#f44336', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Entertainment', population: 30, color: '#2196F3', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Games', population: 25, color: '#FFCE56', legendFontColor: '#7F7F7F', legendFontSize: 12 },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* User Info */}
        <View style={styles.userInfo}>
          <Image source={{ uri: 'https://example.com/user-avatar.png' }} style={styles.avatar} />
          <View>
            <Text style={styles.userName}>{userName || 'Loading...'}</Text>
            <Text style={styles.date}>{currentDate}</Text> {/* Display dynamic date */}
          </View>
        </View>

        {/* Screen Usage Summary */}
        <View style={styles.usageSummary}>
          <Text style={styles.sectionTitle}>Screen Usage Summary</Text>
          <PieChart
            data={screenUsageData}
            width={250}
            height={150}
            chartConfig={{
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        </View>

        {/* Current Goals */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Current Goals</Text>
          <ScrollView horizontal>
            {[1, 2, 3].map((goal, index) => (
              <View key={index} style={styles.goalCard}>
                <Text style={styles.goalText}>Limit Games</Text>
                <Text style={styles.progressText}>Progress</Text>
                <ProgressBar progress={0.37} color="#4caf50" style={styles.progressBar} />
                <Text style={styles.percentageText}>37%</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Usage Chart */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Usage Chart</Text>
          <View style={styles.usageChart}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
              <View key={index} style={styles.chartBar}>
                <View style={[styles.bar, { height: `${(index + 1) * 10}%` }]} />
                <Text style={styles.chartLabel}>{day}</Text>
              </View>
            ))}
          </View>
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

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  userInfo: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  userName: { fontSize: 18, fontWeight: 'bold' },
  date: { fontSize: 14, color: '#888' },
  usageSummary: { alignItems: 'center', marginBottom: 20 },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  goalCard: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    width: 120,
    padding: 10,
    marginHorizontal: 5,
    alignItems: 'center'
  },
  goalText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  progressText: { color: '#fff', fontSize: 12, marginTop: 5 },
  progressBar: { width: '100%', height: 8, borderRadius: 5, marginVertical: 5 },
  percentageText: { color: '#fff', fontSize: 12 },
  usageChart: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 },
  chartBar: { alignItems: 'center' },
  bar: { width: 20, backgroundColor: '#FFCE56', borderRadius: 5 },
  chartLabel: { fontSize: 12, marginTop: 5, color: '#555' },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
  },
  navIcon: { fontSize: 20 },
});

export default DashboardScreen;

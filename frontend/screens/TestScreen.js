// TestScreen.js
import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TestScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Test Screen</Text>
      <Button
        title="Go to Calendar Screen"
        onPress={() => navigation.navigate('CalendarScreen')}
      />
      <Button
        title="Go to Dashboard Screen"
        onPress={() => navigation.navigate('DashboardScreen')}
      />
      <Button
        title="Go to Leadership Screen"
        onPress={() => navigation.navigate('LeadershipScreen')}
      />
      <Button
        title="Go to Notification Screen"
        onPress={() => navigation.navigate('NotificationScreen')}
      />
      <Button
        title="Go to Report Screen"
        onPress={() => navigation.navigate('ReportScreen')}
      />
      <Button
        title="Go to Reward Screen"
        onPress={() => navigation.navigate('RewardScreen')}
      />
      <Button
        title="Go to Setting Screen"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default TestScreen;

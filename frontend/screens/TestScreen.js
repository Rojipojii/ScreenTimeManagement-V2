import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import TestScreen from './src/screens/TestScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import LeadershipScreen from './src/screens/LeadershipScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import ReportScreen from './src/screens/ReportScreen';
import RewardScreen from './src/screens/RewardScreen';
import SettingScreen from './src/screens/SettingScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TestScreen">
        <Stack.Screen name="TestScreen" component={TestScreen} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="LeadershipScreen" component={LeadershipScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="ReportScreen" component={ReportScreen} />
        <Stack.Screen name="RewardScreen" component={RewardScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router'; // This will handle your tab navigation
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, DoctorScreen, PatientScreen } from './Home';
import LoginScreen from './login';
import SignupScreen from './signup';
// import ForgetPasswordScreen from './remaining/forgetpassword';
import DoctorVerificationScreen from './doctorVerificationPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Disable headers for tabs
        tabBarStyle: {
          position: 'absolute', // Adjust position if needed
        },
      }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Doctor"
        options={{
          title: 'Doctor',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="stethoscope" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Patient"
        options={{
          title: 'Patient',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person" color={color} />,
        }}
      />
    </Tabs>
  );
};

const App = () => {
  return (
      <Stack.Navigator initialRouteName="MainTabs">
        
        <Stack.Screen 
          name="MainTabs" 
          component={TabNavigator} 
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        {/* <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} /> */}
        <Stack.Screen name="DoctorVerification" component={DoctorVerificationScreen} />
      </Stack.Navigator>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';


 
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
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F0F0',
  },
  searchBarContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  slideShowContainer: {
    height: 200,
    marginVertical: 10,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  textAbove: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  textBelow: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginVertical: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  blueButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  pinkButton: {
    backgroundColor: '#ff69b4',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  navButton: {
    padding: 10,
  },
  navText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: '22%',
    marginVertical: 10,
    alignItems: 'center',
  },
  iconImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  navigationButton: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
=======
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


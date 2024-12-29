import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, DoctorScreen, PatientScreen } from './VDr/app/Home';
import LoginScreen from './VDr/app/login';
import SignupScreen from './VDr/app/signup';
import ForgetPasswordScreen from './VDr/app/forgetpassword';
import DoctorVerificationScreen from './VDr/app/doctorVerificationPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Doctor" component={DoctorScreen} />
      <Tab.Screen name="Patient" component={PatientScreen} />
    </Tab.Navigator>
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
      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
      <Stack.Screen name="DoctorVerification" component={DoctorVerificationScreen} />
    </Stack.Navigator>
  );
};

export default App;

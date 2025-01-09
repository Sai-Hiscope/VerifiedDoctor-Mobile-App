const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Disable headers for tabs
        tabBarStyle: {
          position: 'absolute', // Adjust position if needed
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen} // Ensure HomeScreen is set here
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={28} color={color} />,
        }}
      />
      <Tab.Screen
        name="Doctor"
        component={DoctorScreen} // Ensure DoctorScreen is set here
        options={{
          title: 'Doctor',
          tabBarIcon: ({ color }) => <FontAwesome name="stethoscope" size={28} color={color} />,
        }}
      />
      <Tab.Screen
        name="Patient"
        component={PatientScreen} // Ensure PatientScreen is set here
        options={{
          title: 'Patient',
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={28} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      {/* Set HomeScreen as the default screen */}
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }} // Hide header for HomeScreen
      />
      {/* MainTabs now is part of the stack, so you need to make sure it is not set as the first screen */}
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="DoctorVerification" component={DoctorVerificationScreen} />
    </Stack.Navigator>
  );
};

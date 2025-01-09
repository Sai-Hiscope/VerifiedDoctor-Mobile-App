import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'; // Import Drawer Navigator
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // For gesture support
import { launchImageLibrary } from 'react-native-image-picker';  // For image picker

// Create navigators
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Dummy Pages for Navigation
function HomePage() {
  return (
    <View style={styles.pageContainer}>
      <Text>Home Page</Text>
    </View>
  );
}

function ScanPage() {
  return (
    <View style={styles.pageContainer}>
      <Text>Scan Page</Text>
    </View>
  );
}

function Insurance() {
  return (
    <View style={styles.pageContainer}>
       <Text>Insurance Page</Text>
    </View>
  );
}

function ProfilePage() {
  return (
    <View style={styles.pageContainer}>
      <Text>Profile Page</Text>
    </View>
  );
}

// Bottom Tab Navigation
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: () => <Image source={require('@/assets/images/icon.png')} style={styles.icon} />,
        }}
      />
      <Tab.Screen
        name="Find a doctor"
        component={HomePage}
        options={{
          tabBarIcon: () => <Image source={require('@/assets/images/icon.png')} style={styles.icon} />,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanPage}
        options={{
          tabBarIcon: () => <Image source={require('@/assets/images/icon.png')} style={styles.icon} />,
        }}
      />
      <Tab.Screen
        name="Insurance"
        component={Insurance}
        options={{
          tabBarIcon: () => <Image source={require('@/assets/images/icon.png')} style={styles.icon} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarIcon: () => <Image source={require('@/assets/images/icon.png')} style={styles.icon} />,
        }}
      />
    </Tab.Navigator>
  );
}

// Sidebar Content for Drawer Navigator
function SidebarContent() {
  return (
    <ScrollView contentContainerStyle={styles.sidebarContent}>
      {/* Logo at the top of the sidebar */}
      <View style={styles.logoContainer}>
        <Image source={require('@/assets/images/icon.png')} style={styles.logo} />
      </View>

      {/* 7 options with custom icons */}
      <SidebarOption icon={require('@/assets/images/icon.png')} text="Find a Doctor" />
      <SidebarOption icon={require('@/assets/images/icon.png')} text="Verify aDoctor" />
      <SidebarOption icon={require('@/assets/images/icon.png')} text="SOS" />
      <SidebarOption icon={require('@/assets/images/icon.png')} text="Home Delivery Medicines" />
      <SidebarOption icon={require('@/assets/images/icon.png')} text="Medical Records" />
      <SidebarOption icon={require('@/assets/images/icon.png')} text="Insurance" />
      <SidebarOption icon={require('@/assets/images/icon.png')} text="Diagnostic" />
      <SidebarOption icon={require('@/assets/images/icon.png')} text="Founder's page" />

      {/* 3 options at the bottom */}
      <SidebarOption icon={require('@/assets/images/icon.png')} text="Profile" />
      <SidebarOption icon={require('@/assets/images/icon.png')} text="Help center" />
      <SidebarOption icon={require('@/assets/images/icon.png')} text="Settings" />
    </ScrollView>
  );
}

// Sidebar Option Component
function SidebarOption({ icon, text }) {
  return (
    <TouchableOpacity style={styles.sidebarOption}>
      <Image source={icon} style={styles.sidebarIcon} />
      <Text style={styles.sidebarOptionText}>{text}</Text>
    </TouchableOpacity>
  );
}

// Main Page with Sidebar, and Content
function HomePageWithSidebar({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo that toggles the sidebar */}
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image source={require('@/assets/images/icon.png')} style={styles.logo} />
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <BottomTabs />
    </View>
  );
}

// Main App Component with Drawer Navigation
function App() {
  const [logoUri, setLogoUri] = useState(require('@/assets/images/icon.png'));

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer.Navigator
        drawerPosition="right" // Sidebar will slide from the right
        drawerContent={() => <SidebarContent />}
        screenOptions={{
          drawerStyle: {
            width: 220,
            backgroundColor: '#fff',
          },
        }}>
        <Drawer.Screen name="Home" component={HomePageWithSidebar} />
      </Drawer.Navigator>
    </GestureHandlerRootView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: 60,
    height: 60,
    position: 'relative',
    top: 20,
    alignSelf: 'center', // Center the logo horizontally
  },
  logoContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 30, // Adding some space below the logo
  },
  sidebarContent: {
    paddingTop: 20,
    paddingBottom: 40,
  },
  sidebarOption: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  sidebarIcon: {
    width: 24,
    height: 24,
  },
  sidebarOptionText: {
    marginLeft: 15,
    fontSize: 16,
  },
  tabBar: {
    backgroundColor: '#f8f8f8',
    height: 60,
  },
  icon: {
    width: 30,
    height: 30,
  },
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

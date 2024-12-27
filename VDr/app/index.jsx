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
import { NavigationContainer } from '@react-navigation/native';

// Tab Navigator Setup
const Tab = createBottomTabNavigator();

// Slider Component
const Slider = () => {
  const slidesData = [
    {
      title: "Cardiologist",
      img: "@/assets/images/icon1.png",
      description: "Expert Care for a Healthier Heart",
    },
    {
      title: "Gynaecologist",
      img: "@/assets/images/icon1.png",
      description: "Women's health expert care",
    },
    {
      title: "Dentist",
      img: "@/assets/images/icon1.png",
      description: "Strong Teeth Bright Smiles, Happy Life",
    },
    {
      title: "Gastroenterologist",
      img: "@/assets/images/icon1.png",
      description: "Digestive health better comfort",
    },
    {
      title: "Orthopedist",
      img: "@/assets/images/icon1.png",
      description: "Stronger bones better mobility",
    },
    {
      title: "Diagnostics",
      img: "@/assets/images/icon1.png",
      description: "Precise tests accurate results.",
    },
    {
      title: "Dermatologist",
      img: "@/assets/images/icon1.png",
      description: "Healthy skin glowing confidence",
    },
    {
      title: "General Physician",
      img: "@/assets/images/icon1.png",
      description: "Comprehensive care healthy living",
    },
    {
      title: "Neurologist",
      img: "@/assets/images/icon1.png",
      description: "Your brain our priority",
    },
    {
      title: "Physiotherapist",
      img: "@/assets/images/icon1.png",
      description: "Restoring movement improving life",
    },
    {
      title: "Pediatrician",
      img: "@/assets/images/icon1.png",
      description: "Caring for children's wellness",
    },
    {
      title: "Pulmonologist",
      img: "@/assets/images/icon1.png",
      description: "Breathing easy health restored",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    const adjustSlidesToShow = () => {
      setSlidesToShow(screenWidth > 600 ? 2 : 1);
    };

    adjustSlidesToShow();
    Dimensions.addEventListener("change", adjustSlidesToShow);
    return () => Dimensions.removeEventListener("change", adjustSlidesToShow);
  }, [screenWidth]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < slidesData.length - slidesToShow ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : slidesData.length - slidesToShow
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // 3 seconds interval
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <View style={styles.slider}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / screenWidth
          );
          setCurrentIndex(index);
        }}
        scrollEventThrottle={16}
      >
        {slidesData.map((slide, index) => (
          <View
            style={[
              styles.slide,
              { width: screenWidth / slidesToShow },
            ]}
            key={index}
          >
            <Text style={styles.textAbove}>{slide.title}</Text>
            <Image
              source={{ uri: slide.img }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.textBelow}>{slide.description}</Text>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.blueButton}>
                <Text style={styles.buttonText}>Online</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pinkButton}>
                <Text style={styles.buttonText}>Clinic</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.navButtons}>
        <TouchableOpacity
          onPress={prevSlide}
          disabled={currentIndex === 0}
          style={styles.navButton}
        >
          <Text style={styles.navText}>&#10094;</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={nextSlide}
          disabled={currentIndex === slidesData.length - slidesToShow}
          style={styles.navButton}
        >
          <Text style={styles.navText}>&#10095;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Search Bar Component
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

// Doctor Screen
const DoctorScreen = () => (
  <ScrollView>
    <SearchBar />
    <Text style={styles.sectionTitle}>Doctor Section</Text>
    <Slider />
  </ScrollView>
);

// Patient Screen
const PatientScreen = () => (
  <ScrollView>
    <SearchBar />
    <Text style={styles.sectionTitle}>Patient Section</Text>
    <Slider />
  </ScrollView>
);

// Home Screen
const HomeScreen = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <SearchBar />
    <Text style={styles.title}>Book Appointment</Text>
    <Slider />
    <Text style={styles.title}>Services</Text>
    <View style={styles.iconGrid}>
      {Array.from({ length: 12 }).map((_, index) => (
        <TouchableOpacity key={index} style={styles.iconContainer}>
          <Image source={{ uri: '@/assets/images/icon1.png' }} style={styles.iconImage} />
          <Text>Service {index + 1}</Text>
        </TouchableOpacity>
      ))}
    </View>
    <TouchableOpacity
      style={styles.navigationButton}
      onPress={() => navigation.navigate('Doctor')}
    >
      <Text style={styles.buttonText}>Doctor</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.navigationButton}
      onPress={() => navigation.navigate('Patient')}
    >
      <Text style={styles.buttonText}>Patient</Text>
    </TouchableOpacity>
  </ScrollView>
);

// App Component with NavigationContainer
export default function App() {
  return (
    // <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Doctor" component={DoctorScreen} />
        <Tab.Screen name="Patient" component={PatientScreen} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}

// Styles
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

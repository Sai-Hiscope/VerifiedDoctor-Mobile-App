import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Image, TouchableOpacity, TextInput, Dimensions, Animated } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { PanGestureHandler } from 'react-native-gesture-handler'; // PanGestureHandler for drag

// Slider Component (Updated) 
const Slider = () => {
  const slidesData = [
    { title: "Cardiologist", img: require('@/assets/images/icon.png'), description: "Expert Care for a Healthier Heart" },
    { title: "Gynaecologist", img: require('@/assets/images/icon.png'), description: "Women's Health Expert Care" },
    { title: "Dentist", img: require('@/assets/images/icon.png'), description: "Strong Teeth Bright Smiles" },
    { title: "Gastroenterologist", img: require('@/assets/images/icon.png'), description: "Better Digestion for Comfort" },
    { title: "Orthopedist", img: require('@/assets/images/icon.png'), description: "Stronger Bones, Better Mobility" },
    { title: "Diagnostics", img: require('@/assets/images/icon.png'), description: "Precise Tests, Accurate Results" },
    { title: "Dermatologist", img: require('@/assets/images/icon.png'), description:"Healthy Skin,Glowing Confidence"},
    { title: "General Physician", img: require('@/assets/images/icon.png'), description:"Complete Care, Healthy Life"},
    { title: "Neurologist", img: require('@/assets/images/icon.png'), description:"Your Brain, Our Priority"},
    { title: "Physiotherapist", img: require('@/assets/images/icon.png'), description:"Restoring Motion, Improving Life"},
    { title: "Pediatrician", img: require('@/assets/images/icon.png'), description: "Caring for Children's Wellness" },
    { title: "Pulmonologist", img: require('@/assets/images/icon.png'), description: "Breathing Easy, Health Restored" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(2);
  const screenWidth = Dimensions.get("window").width;
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const adjustSlidesToShow = () => {
      setSlidesToShow(screenWidth > 600 ? 2 : 2); // Adjust slides to show based on screen width
    };
    adjustSlidesToShow();
    Dimensions.addEventListener("change", adjustSlidesToShow);
    return () => Dimensions.removeEventListener("change", adjustSlidesToShow);
  }, [screenWidth]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    if (scrollViewRef.current) {
      const offsetX = currentIndex * screenWidth;
      scrollViewRef.current.scrollTo({ x: offsetX, animated: true });
    }
  }, [currentIndex]);

  return (
    <View style={styles.slider}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentOffset={{ x: currentIndex * screenWidth, y: 0 }}
        ref={scrollViewRef}
        scrollEventThrottle={16}
        scrollEnabled={false}
      >
        {slidesData.map((slide, index) => (
          <View style={[styles.slide, { width: screenWidth / slidesToShow }]} key={index}>
            <Text style={styles.textAbove}>{slide.title}</Text>
            <Image source={slide.img} style={styles.image} resizeMode="cover" />
            <Text style={styles.textBelow}>{slide.description}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={[styles.button, styles.clinicButton]}>
                <Text style={styles.buttonText}>Clinic</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.onlineButton]}>
                <Text style={styles.buttonText}>Online</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={[styles.arrowButton, styles.prevButton]} onPress={previousSlide}>
        <Text style={styles.arrowText}>←</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.arrowButton, styles.nextButton]} onPress={nextSlide}>
        <Text style={styles.arrowText}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

// Draggable Text Section (Updated for React Native)
const DraggableText = ({ title, style }) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX, translationY: translateY } }], 
    { useNativeDriver: false }
  );

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[styles.draggableText, style, { transform: [{ translateX }, { translateY }] }]} >
        <Text style={styles.draggableTextStyle}>{title}</Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

// Doctor's Feedback Component
const DoctorFeedback = () => {
  const doctorSlides = [
    { id: '1', content: "I appreciate how easy this platform is to use. It keeps all patient data secure and accessible, making my consultations more organized and effective.", author: '— Dr. Rekha Patel' },
    { id: '2', content: "The platform's intuitive interface allows me to focus more on patient care and less on administrative tasks.", author: '— Dr. John Smith' },
    { id: '3', content: "I love how all medical records are at my fingertips. It’s a game-changer for telemedicine.", author: '— Dr. Ayesha Khan' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % doctorSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: currentIndex, animated: true });
    }
  }, [currentIndex]);

  return (
    <View style={styles.feedbackContainer}>
      <FlatList
        ref={flatListRef}
        data={doctorSlides}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={[styles.feedbackSlide, { display: index === currentIndex ? 'flex' : 'none' }]} >
            <Text style={styles.heading}>Hear from Our Doctors</Text>
            <Text style={styles.content}>&quot;{item.content}&quot;</Text>
            <Text style={styles.author}>{item.author}</Text>
          </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

// Patient's Feedback Component
const PatientFeedback = () => {
  const patientSlides = [
    { id: '1', content: "This platform has made scheduling appointments and accessing medical records a breeze. It's truly user-friendly and reliable.", author: '— A Satisfied Patient' },
    { id: '2', content: "With this platform, I feel more connected with my doctor, even during virtual consultations.", author: '— Happy Patient' },
    { id: '3', content: "The reminders and seamless experience have greatly improved my healthcare journey.", author: '— Grateful User' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % patientSlides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: currentIndex, animated: true });
    }
  }, [currentIndex]);

  return (
    <View style={styles.feedbackContainer}>
      <FlatList
        ref={flatListRef}
        data={patientSlides}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={[styles.feedbackSlide, { display: index === currentIndex ? 'flex' : 'none' }]} >
            <Text style={styles.heading}>Hear from Our Patients</Text>
            <Text style={styles.content}>&quot;{item.content}&quot;</Text>
            <Text style={styles.author}>{item.author}</Text>
          </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

// Feedback Tabs
const FeedbackTabs = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'doctor', title: "Doctor's Opinion", color: 'red' },
    { key: 'patient', title: "Patient's Opinion" },
  ]);

  const renderScene = SceneMap({
    doctor: DoctorFeedback,
    patient: PatientFeedback,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          style={styles.tabBar}
          labelStyle={styles.tabLabel}
          indicatorStyle={styles.indicator}
        />
      )}
    />
  );
};

// Home Screen (Final Integration)
const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image source={require('@/assets/images/icon.png')} style={styles.logo} />
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search for services"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <Slider />
      <DraggableText title="Book Appointment" style={{ top: 130 }} />
      <FeedbackTabs />
    </ScrollView>
  );
};

// Updated Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 5,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain', position: 'relative',
    top: 30,
    right: 170,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    position: 'relative',
    top: -40,
    width: '80%',
    right: -60,
  },
  slider: {
    marginBottom: 20,
    position: 'relative',
    top: 10,
  },
  textAbove: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: '95%',
    height: 180,
    borderRadius: 10,
    marginVertical: 10,
  },
  textBelow: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    padding: 10,
    borderRadius: 50,
    width: '30%',
  },
  clinicButton: {
    backgroundColor: '#4B6C9A', // Clinic color
    position: 'relative',
    right: -30,
  },
  onlineButton: {
    backgroundColor: '#40C985', // Online color
    position: 'relative',
    right: 30,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  arrowButton: {
    position: 'absolute',
    top: '50%',
    zIndex: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 50,
    padding: 10,
  },
  prevButton: {
    left: 10,
  },
  nextButton: {
    right: 10,
  },
  arrowText: {
    color: 'white',
    fontSize: 20,
  },
  draggableText: {
    position: 'absolute',
  },
  draggableTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tabBar: {
    backgroundColor: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    color: 'white',
    position: 'relative',
    top: 110,
  },
  tabLabel: {
    fontSize: 16, // Increased font size for better visibility
    fontWeight: 'bold',
    color: 'black', // Ensure label text color is black for visibility
  },
  indicator: {
    backgroundColor: '#6200EE',
  },
  feedbackContainer: {
    marginTop: 20,
    position: 'relative',
    top: 0,
  },
  feedbackSlide: {
    width: Dimensions.get('window').width,
    padding: 20,
    color: 'black',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
  author: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
});

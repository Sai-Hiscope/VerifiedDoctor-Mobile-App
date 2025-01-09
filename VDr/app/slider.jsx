import React, { useState, useEffect, useRef } from 'react';
import {View,Text,Image,StyleSheet,FlatList,ScrollView,Dimensions,} from 'react-native';
const { width } = Dimensions.get('window');
const dataSlider1 = [
  {
    id: '1',title: 'Expert Care for a Healthier Heart',image: require('@/assets/images/icon.png'),label: 'Cardiologist',
  },
  {
    id: '2',title: 'Guiding You Through Pregnancy, Fertility, and Beyond',image: require('@/assets/images/icon1.png'),label: 'Gynaecologist',
  },
  {
    id: '3',title: 'Advanced Dental Care for Every Smile',image: require('@/assets/images/icon.png'),label: 'Dentist',
  },
  {
    id: '4',title: 'Comprehensive Gastrointestinal Treatment',image: require('@/assets/images/icon2.png'),label: 'Gastroenterologist',
  },
  {
    id: '5',title: 'Expert Orthopedic Solutions for Mobility',image: require('@/assets/images/icon.png'),label: 'Orthopedist',
  },
  {
    id: '6',title: 'State-of-the-Art Diagnostic Services',image: require('@/assets/images/icon3.png'),label: 'Diagnostics',
  },
  {
    id: '7',title: 'Healthy Skin, Happy Life',image: require('@/assets/images/icon.png'),label: 'Dermatologist',
  },
  {
    id: '8',title: 'Your Trusted Family Physician',image: require('@/assets/images/icon1.png'),label: 'General Physician',
  },
  {
    id: '9',title: 'Neurology Care You Can Count On',
    image: require('@/assets/images/icon.png'),
    label: 'Neurologist',
  },
  {
    id: '10',
    title: 'Professional Physiotherapy for All Ages',
    image: require('@/assets/images/icon2.png'),
    label: 'Physiotherapist',
  },
  {
    id: '11',
    title: 'Pediatric Care with a Gentle Touch',
    image: require('@/assets/images/icon.png'),
    label: 'Pediatrician',
  },
  {
    id: '12',
    title: 'Pulmonary Health for Better Breathing',
    image: require('@/assets/images/icon3.png'),
    label: 'Pulmonologist',
  },
  {
    id: '13',
    title: 'Expert Cardiology for Every Heart',
    image: require('@/assets/images/icon.png'),
    label: 'Cardiologist',
  },
  {
    id: '14',
    title: 'Comprehensive Gynecological Care',
    image: require('@/assets/images/icon.png'),
    label: 'Gynaecologist',
  }
];

const doctorCategories = [
  { id: '1', label: 'Cardiologist', icon: require('@/assets/images/icon.png') },
  { id: '2', label: 'Gynaecologist', icon: require('@/assets/images/icon.png') },
  { id: '3', label: 'Dentist', icon: require('@/assets/images/icon.png') },
  { id: '4', label: 'Gastroenterologist', icon: require('@/assets/images/icon.png') },
  { id: '5', label: 'Orthopedist', icon: require('@/assets/images/icon.png') },
  { id: '6', label: 'Diagnostics', icon: require('@/assets/images/icon.png') },
  { id: '7', label: 'Dermatologist', icon: require('@/assets/images/icon.png') },
  { id: '8', label: 'General Physician', icon: require('@/assets/images/icon.png') },
  { id: '9', label: 'Neurologist', icon: require('@/assets/images/icon.png') },
  { id: '10', label: 'Physiotherapist', icon: require('@/assets/images/icon.png') },
  { id: '11', label: 'Pediatrician', icon: require('@/assets/images/icon.png') },
  { id: '12', label: 'Pulmonologist', icon: require('@/assets/images/icon.png') },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dataSlider1.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Sync the current index with FlatList scroll
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollToIndex({
        animated: true,
        index: currentIndex,
      });
    }
  }, [currentIndex]);

  const renderSliderItems = ({ item }) => (
    <View key={item.id} style={styles.sliderItem}>
      <Image source={item.image} style={styles.sliderImage} />
      <Text style={styles.sliderTitle}>{item.title}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* First Slider with manual scrolling */}
      <FlatList
        ref={sliderRef}
        data={dataSlider1}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={renderSliderItems}
        showsHorizontalScrollIndicator={false}
        style={styles.sliderContainer}
        extraData={currentIndex}
      />

      {/* Doctor Categories */}
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>Find a Doctor</Text>
        <FlatList
          data={doctorCategories}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
              <Image source={item.icon} style={styles.categoryIcon} />
              <Text style={styles.categoryLabel}>{item.label}</Text>
            </View>
          )}
        />
      </View>

      {/* Testimonials */}
      <View style={styles.testimonialContainer}>
        <Text style={styles.testimonialTitle}>Hear from Our Doctors</Text>
        <Text style={styles.testimonialText}>
          "I appreciate how easy this platform is to use. It keeps all patient data secure and accessible, making my consultations more organized and effective."
        </Text>
        <Text style={styles.testimonialAuthor}>— Dr. Rekha Patil</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sliderContainer: {
    width: width,
    marginBottom: 20,
  },
  sliderItem: {
    width: width - 20,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  sliderImage: {
    width: width - 40,
    height: 150,
    resizeMode: 'cover',
  },
  sliderTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  categoryContainer: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryItem: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 15,
    marginHorizontal: 5,
  },
  categoryIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  categoryLabel: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  testimonialContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  testimonialTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  testimonialText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  testimonialAuthor: {
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default App;
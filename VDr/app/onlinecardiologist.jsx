import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const dataSlider = [
  {
    id: "1",
    title: "Expert Care for a Healthier Heart",
    image: require("@/assets/images/icon.png"),
    tags: ["Clinic", "Online"],
  },
  {
    id: "2",
    title: "Guiding You Through Pregnancy, Fertility, and Beyond",
    image: require("@/assets/images/icon1.png"),
    tags: ["Clinic", "Online"],
  },
];

const doctorCategories = [
  { id: "1", label: "Cardiologist", icon: require("@/assets/icons/cardiologist.png") },
  { id: "2", label: "Gynaecologist", icon: require("@/assets/icons/gynaecologist.png") },
  { id: "3", label: "Dentist", icon: require("@/assets/icons/dentist.png") },
  { id: "4", label: "Gastroenterologist", icon: require("@/assets/icons/gastroenterologist.png") },
  { id: "5", label: "Orthopedist", icon: require("@/assets/icons/orthopedist.png") },
  { id: "6", label: "Diagnostics", icon: require("@/assets/icons/diagnostics.png") },
  { id: "7", label: "Dermatologist", icon: require("@/assets/icons/dermatologist.png") },
  { id: "8", label: "General Physician", icon: require("@/assets/icons/general_physician.png") },
  { id: "9", label: "Neurologist", icon: require("@/assets/icons/neurologist.png") },
  { id: "10", label: "Physiotherapist", icon: require("@/assets/icons/physiotherapist.png") },
  { id: "11", label: "Pediatrician", icon: require("@/assets/icons/pediatrician.png") },
  { id: "12", label: "Pulmonologist", icon: require("@/assets/icons/pulmonologist.png") },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Doctors Opinion");
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dataSlider.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollToIndex({
        animated: true,
        index: currentIndex,
      });
    }
  }, [currentIndex]);

  const renderSliderItems = ({ item }) => (
    <View style={styles.sliderItem}>
      <Image source={item.image} style={styles.sliderImage} />
      <Text style={styles.sliderTitle}>{item.title}</Text>
      <View style={styles.tagContainer}>
        {item.tags.map((tag, index) => (
          <Text key={index} style={styles.tag}>
            {tag}
          </Text>
        ))}
      </View>
    </View>
  );

  const renderCategoryItems = ({ item }) => (
    <View style={styles.categoryItem}>
      <Image source={item.icon} style={styles.categoryIcon} />
      <Text style={styles.categoryLabel}>{item.label}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Book Appointment */}
      <Text style={styles.sectionTitle}>Book Appointment</Text>
      <View style={styles.sliderWrapper}>
        <TouchableOpacity style={styles.arrowButton} onPress={() => setCurrentIndex((currentIndex - 1 + dataSlider.length) % dataSlider.length)}>
          <Text style={styles.arrowText}>{"<"}</Text>
        </TouchableOpacity>
        <FlatList
          ref={sliderRef}
          data={dataSlider}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={renderSliderItems}
          showsHorizontalScrollIndicator={false}
        />
        <TouchableOpacity style={styles.arrowButton} onPress={() => setCurrentIndex((currentIndex + 1) % dataSlider.length)}>
          <Text style={styles.arrowText}>{">"}</Text>
        </TouchableOpacity>
      </View>

      {/* Find a Doctor */}
      <Text style={styles.sectionTitle}>Find a Doctor</Text>
      <FlatList
        data={doctorCategories}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={renderCategoryItems}
      />

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tab, activeTab === "Doctors Opinion" && styles.activeTab]} onPress={() => setActiveTab("Doctors Opinion")}>
          <Text style={styles.tabText}>Doctors Opinion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, activeTab === "Patients Opinion" && styles.activeTab]} onPress={() => setActiveTab("Patients Opinion")}>
          <Text style={styles.tabText}>Patients Opinion</Text>
        </TouchableOpacity>
      </View>

      {/* Testimonial */}
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
  container: { flex: 1, backgroundColor: "#fff" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", margin: 20, textAlign: "center" },
  sliderWrapper: { flexDirection: "row", alignItems: "center" },
  sliderItem: { width: width - 40, marginHorizontal: 20 },
  sliderImage: { width: "100%", height: 150, borderRadius: 10 },
  sliderTitle: { textAlign: "center", fontSize: 14, marginVertical: 10 },
  tagContainer: { flexDirection: "row", justifyContent: "center" },
  tag: { backgroundColor: "#e0e0e0", padding: 5, margin: 5, borderRadius: 5, fontSize: 12 },
  arrowButton: { padding: 10 },
  arrowText: { fontSize: 24, fontWeight: "bold" },
  categoryItem: { flex: 1, alignItems: "center", margin: 10 },
  categoryIcon: { width: 50, height: 50, resizeMode: "contain" },
  categoryLabel: { marginTop: 5, textAlign: "center", fontSize: 12 },
  tabContainer: { flexDirection: "row", justifyContent: "center", marginVertical: 20 },
  tab: { padding: 10, borderBottomWidth: 2, borderBottomColor: "transparent" },
  activeTab: { borderBottomColor: "#000" },
  tabText: { fontSize: 14 },
  testimonialContainer: { padding: 20 },
  testimonialTitle: { textAlign: "center", fontSize: 16, fontWeight: "bold" },
  testimonialText: { textAlign: "center", fontSize: 14, marginVertical: 10 },
  testimonialAuthor: { textAlign: "center", fontSize: 12, fontStyle: "italic" },
});

export default App;

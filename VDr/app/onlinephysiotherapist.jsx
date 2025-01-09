import React from "react";
import {View,Text,TextInput,Image,StyleSheet,TouchableOpacity,ScrollView,} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CardiologistConsultation = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header and Search Bar */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Physiotherapist"
          placeholderTextColor="#999"
        />
      </View>
       {/* Title */}
      <View style={styles.titleContainer}>
        <Image
          source={require('@/assets/images/icon.png')} // Replace with a heart icon URL
          style={styles.icon}
        />
        <Text style={styles.title}>Consulting a Physiotherapist</Text>
      </View>
      {/* Language Options */}
      <View style={styles.languageContainer}>
        <Text style={styles.languageTitle}>Choose a language option</Text>
        <View style={styles.languageOptions}>
          {["English", "हिंदी", "తెలుగు", "தமிழ்", "ಕನ್ನ\u0ca1"]
            .map((lang) => (
              <TouchableOpacity key={lang} style={styles.languageButton}>
                <Text style={styles.languageText}>{lang}</Text>
              </TouchableOpacity>
            ))}
        </View>
      </View>

      {/* Doctor List */}
      <View style={styles.doctorContainer}>
        <Text style={styles.doctorTitle}>We Will Assign You A Top Doctor From Below</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[{ name: 'Dr. Haripriya', experience: '5 years Experience', image: require('@/assets/images/icon.png') },
            { name: 'Dr. Shiva Sai', experience: '5 years Experience', image: require('@/assets/images/icon.png') },
            { name: 'Dr. Supriya', experience: '5 years Experience', image: require('@/assets/images/icon.png') },
            { name: 'Dr. Nandini Rao', experience: '6 years Experience', image: require('@/assets/images/icon.png') },
            { name: 'Dr. Appagi Mohan', experience: '7 years Experience', image: require('@/assets/images/icon.png') },
            { name: 'Dr. Srinivas', experience: '8 years Experience', image: require('@/assets/images/icon.png') },
            { name: 'Dr. Gaytri Sharma', experience: '4 years Experience', image: require('@/assets/images/icon.png') }].map((doctor, index) => (
            <View key={index} style={styles.doctorCard}>
              <Image
                source={doctor.image}
                style={styles.doctorImage}
              />
              <View style={styles.doctorInfo}>
                <Text style={styles.doctorName}>{doctor.name}</Text>
                <Text style={styles.doctorExperience}>{doctor.experience}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Online Consultation Info */}
      <View style={styles.infoContainer}>
        <Ionicons name="videocam" size={30} color="#007bff" />
        <Text style={styles.infoText}>Audio/Video/Chat consultation and 7 days free follow up.</Text>
      </View>

      {/* Privacy Info */}
      <View style={styles.infoContainer}>
        <Ionicons name="lock-closed" size={30} color="gray" />
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoText}>
            We prioritize your privacy by securely storing your data and using it only to enhance your
            experience. Your information is never shared without your consent.
            <Text style={{ color: "#007bff" }}> Know more </Text>
          </Text>
          <Text style={styles.infoText}>
            Consultation Terms and Conditions, you agree to
            <Text style={{ color: "#007bff" }}> Terms of Service </Text> and
            <Text style={{ color: "#007bff" }}> Privacy Policy VDR’s Team of use</Text>.
          </Text>
        </View>
      </View>

      {/* Payment Icons */}
      <View style={styles.paymentIcons}>
      <Text style={{ color: "#000",right:30,top:5 }}> pay with </Text>
      <Text style={{ color: "#004",right:-150,top:5 }}> More Payment Option  </Text>
        <Image
          source={require('@/assets/images/icon.png')} // Replace with Paytm icon path
          style={styles.paymentIcon}
        />
        <Image
          source={require('@/assets/images/icon.png')} // Replace with PhonePe icon path
          style={styles.paymentIcon}
        />
        <Image
          source={require('@/assets/images/icon.png')} // Replace with GPay icon path
          style={styles.paymentIcon}
        />
      </View>

      {/* Payment Section */}
      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payText}>Rs:500 | Pay & Consult</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#e6f0ff",
    top: 70,
  },
  backIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    top: 80,
  },
  icon: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  languageContainer: {
    padding: 15,
    backgroundColor: "#fff",
    marginVertical: 10,
    top: 80,
  },
  languageTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  languageOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  languageButton: {
    backgroundColor: "#e6f0ff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  languageText: {
    color: "#007bff",
  },
  doctorContainer: {
    padding: 15,
    backgroundColor: "#fff",
    marginVertical: 10,
    top: 80,
  },
  doctorTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  doctorCard: {
    alignItems: "center",
    flexDirection: "row",
    marginRight: 15,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
  },
  doctorImage: {
    width: 120,
    height: 120,
    borderRadius: 40,
    marginRight: 15,
  },
  doctorInfo: {
    justifyContent: "center",
  },
  doctorName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  doctorExperience: {
    fontSize: 12,
    color: "#888",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 15,
    backgroundColor: "#fff",
    marginVertical: 5,
    top: 80,
  },
  infoTextContainer: {
    flex: 1,
    marginLeft: 20,
  },
  infoText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 21,
  },
  paymentIcons: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
    top: 60,
  },
  paymentIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
    right: 180,
  },
  payButton: {
    backgroundColor: "#4B6C9A",
    padding: 15,
    alignItems: "center",
    margin: 15,
    borderRadius: 5,
    top: 40,
  },
  payText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CardiologistConsultation;

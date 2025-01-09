import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';

const data = [
  {
    id: '1',
    name: 'Dr. G. Durga Rao',
    specialization: 'Gynacologist',
    experience: '36 Years experience',
    hospital: 'KIMS, Hyderabad',
    fee: '₹1000 Consultation Fee',
    availability: 'Available today',
    isAvailable: true,
    image: require('@/assets/images/icon.png'),
  },
  {
    id: '2',
    name: 'Dr. Kavitha Naragoni',
    specialization: 'Gynacologist',
    experience: '36 Years experience',
    hospital: 'KIMS, Hyderabad',
    fee: '₹1000 Consultation Fee',
    availability: 'Available today',
    isAvailable: true,
    image: require('@/assets/images/icon3.png'),
  },
  {
    id: '3',
    name: 'Dr. G. Durga Rao',
    specialization: 'Gynacologist',
    experience: '36 Years experience',
    hospital: 'KIMS, Hyderabad',
    fee: '₹1000 Consultation Fee',
    availability: 'Available today',
    isAvailable: true,
    image: require('@/assets/images/icon2.png'),
  },
  {
    id: '4',
    name: 'Dr. K. Suma',
    specialization: 'Gynacologist',
    experience: '36 Years experience',
    hospital: 'KIMS, Hyderabad',
    fee: '₹1000 Consultation Fee',
    availability: 'Available today',
    isAvailable: true,
    image: require('@/assets/images/icon1.png'),
  },
];

const CalendarIcon = require('@/assets/images/icon.png'); // Add your calendar image path here

export default function App() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.profilePic} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.specialization}>{item.specialization}</Text>
        <Text style={styles.experience}>{item.experience}</Text>
        <Text style={styles.hospital}>{item.hospital}</Text>
        <Text style={styles.fee}>{item.fee}</Text>
        <View style={styles.row}>
          <View style={styles.availabilityContainer}>
            <Image source={CalendarIcon} style={styles.calendarIcon} />
            <Text
              style={[
                styles.availability,
                { color: item.isAvailable ? '#4CAF50' : '#ff0000' },
              ]}
            >
              {item.availability}
            </Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Book Clinic Visit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Gynacologist" />
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.inClinicButton}>
            <Text style={styles.buttonText}>In Clinic Appointment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.videoButton}>
            <Text style={styles.buttonText}>Video Consultation</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 1,
  },
  searchContainer: {
    marginTop: 10,
    marginBottom: 95,
    position: 'relative',
    top: 70,
    width: 380,
    left: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  inClinicButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 10,
  },
  videoButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  specialization: {
    color: '#777',
  },
  experience: {
    color: '#777',
  },
  hospital: {
    color: '#777',
  },
  fee: {
    color: '#777',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  availabilityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position :'relative',
    top:-35,
    left:160
  },
  calendarIcon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  availability: {
    fontWeight: 'bold',
    position: 'relative',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 10,
  },
});

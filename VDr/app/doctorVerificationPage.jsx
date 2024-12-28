import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const DoctorVerificationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    licenseNumber: '',
    specialty: '',
    education: '',
    hospitalName: '',
    experience: '',
    hospitalOrClinic: '',
    complaints: '',
    description: '',
  });

  const [fileData, setFileData] = useState({
    medicalLicense: null,
    boardCertificate: null,
    educationalCertificates: null,
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = async (type) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Permission to access media library is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      setFileData({ ...fileData, [type]: result.assets[0].uri });
    }
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    console.log('File Data:', fileData);
    Alert.alert('Form Submitted', 'Your form has been successfully submitted!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Doctor Verification Form</Text>

      {/* Form Fields */}
      {Object.entries(formData).map(([key, value]) => (
        <View key={key} style={styles.formGroup}>
          <Text style={styles.label}>{key.replace(/([A-Z])/g, ' $1')}:</Text>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={(text) => handleInputChange(key, text)}
            placeholder={`Enter ${key}`}
            multiline={key === 'description'}
          />
        </View>
      ))}

      {/* File Upload Buttons */}
      {Object.keys(fileData).map((key) => (
        <View key={key} style={styles.formGroup}>
          <Text style={styles.label}>Upload {key.replace(/([A-Z])/g, ' $1')}:</Text>
          <TouchableOpacity style={styles.uploadButton} onPress={() => handleFileUpload(key)}>
            <Text style={styles.uploadButtonText}>Upload</Text>
          </TouchableOpacity>
        </View>
      ))}

      <View style={styles.submitButtonContainer}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 14,
    backgroundColor: '#fff',
  },
  uploadButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  uploadButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  submitButtonContainer: {
    marginTop: 20,
    width: 150,
    left: 80,
     
  
  },
});

export default DoctorVerificationForm;

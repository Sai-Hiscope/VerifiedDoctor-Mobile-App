import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, ScrollView, Text, Dimensions } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome } from "@expo/vector-icons";

const DoctorVerificationForm = () => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Doctor Verification Form</Text>

      {/* Full Name */}
      <Text style={styles.label}>
        Full Name: <Text style={styles.required}>*</Text>
      </Text>
      <TextInput style={styles.input} placeholder="Enter full name" />

      {/* Medical License Number */}
      <Text style={styles.label}>
        Medical License Number: <Text style={styles.required}>*</Text>
      </Text>
      <TextInput style={styles.input} placeholder="Enter license number" />

      {/* Upload Medical License */}
      <Text style={styles.label}>
        Upload Medical License: <Text style={styles.required}>*</Text>
      </Text>
      <TouchableOpacity style={styles.fileInput}>
        <Text style={styles.fileInputText}>Choose file</Text>
        <FontAwesome name="upload" size={20} color="#000" />
      </TouchableOpacity>

      {/* Medical Speciality */}
      <Text style={styles.label}>
        Medical Speciality: <Text style={styles.required}>*</Text>
      </Text>
      <TextInput style={styles.input} placeholder="Enter specialty" />

      {/* Upload Board Certificate */}
      <Text style={styles.label}>
        Upload Board Certificate: <Text style={styles.required}>*</Text>
      </Text>
      <TouchableOpacity style={styles.fileInput}>
        <Text style={styles.fileInputText}>Choose file</Text>
        <FontAwesome name="upload" size={20} color="#000" />
      </TouchableOpacity>

      {/* Educational Background */}
      <Text style={styles.label}>
        Educational Background: <Text style={styles.required}>*</Text>
      </Text>
      <View style={styles.dropdown}>
        <Picker style={styles.picker}>
          <Picker.Item label="Highest level of study" value="" />
          <Picker.Item label="MBBS" value="mbbs" />
          <Picker.Item label="MD" value="md" />
          <Picker.Item label="PhD" value="phd" />
          <Picker.Item label="Other" value="clicin" />
        </Picker>
      </View>

      {/* Upload Educational Certificates */}
      <Text style={styles.label}>
        Upload Educational Certificates: <Text style={styles.required}>*</Text>
      </Text>
      <TouchableOpacity style={styles.fileInput}>
        <Text style={styles.fileInputText}>Choose file</Text>
        <FontAwesome name="upload" size={20} color="#000" />
      </TouchableOpacity>

      {/* Hospital Currently Working */}
      <Text style={styles.label}>
        Hospital current working: <Text style={styles.required}>*</Text>
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter current hospital name"
      />

      {/* Experience */}
      <Text style={styles.label}>
        Experience: <Text style={styles.required}>*</Text>
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter years of experience"
      />

      {/* Hospital or Clinic */}
      <Text style={styles.label}>Hospital (or) Clinic:</Text>
      <TextInput style={styles.input} placeholder="Enter hospital/clinic name" />

      {/* Complaints */}
      <Text style={styles.label}>
        Any complaints or disciplinary actions been filed against this Doctor:{" "}
        <Text style={styles.required}>*</Text>
      </Text>
      <View style={styles.dropdown}>
        <Picker style={styles.picker}>
          <Picker.Item label="Select an option" value="" />
          <Picker.Item label="Yes" value="yes" />
          <Picker.Item label="No" value="no" />
        </Picker>
      </View>

      {/* Description */}
      <Text style={styles.label}>Description (If any?):</Text>
      <TextInput
        style={styles.descriptionInput}
        placeholder="Enter description"
        multiline
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333333",
  },
  required: {
    color: "red",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#F9F9F9",
  },
  fileInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 15,
    backgroundColor: "#F9F9F9",
  },
  fileInputText: {
    color: "#555555",fontSize: 16,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 10,
    height: 40,
    width: "100%",
    justifyContent: "center",
    marginBottom: 15,
    backgroundColor: "#F9F9F9",
  },
  picker: {
    width: "100%",
    height: 40,
  },
  descriptionInput: {
    height: 120, // Increased height for description input
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#F9F9F9",
    textAlignVertical: "top", // Ensures the text starts at the top
  },
  submitButton: {
    height: 45,
    backgroundColor: "#466FB5",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "600",
  },
});

export default DoctorVerificationForm;

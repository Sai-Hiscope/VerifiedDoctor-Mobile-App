import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";

const DataPrivacyScreen = () => {
  const data = [
    "All conversations between users and healthcare providers are private and confidential.",
    "Anonymized audits may be conducted by our trained medical team to address feedback or escalations from the Customer Satisfaction Survey.",
    "Chats are securely recorded and stored using ISO-compliant practices in accordance with Telemedicine Guidelines.",
    "Sensitive personal information is never accessed during audits, ensuring user privacy.",
    "Audits are conducted to maintain and enhance the quality of teleconsultation services.",
  ];

  const renderBulletItem = ({ item }) => (
    <View style={styles.bulletItem}>
      <Text style={styles.bulletPoint}>•</Text>
      <Text style={styles.bulletText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeButtonText}>×</Text>
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.header}>Data and Privacy</Text>

      {/* Bullet Points */}
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderBulletItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: "600",
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 20,
    top : 30,
  },
  listContainer: {
    paddingTop: 10,
  },
  bulletItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  bulletPoint: {
    fontSize: 18,
    marginRight: 8,
    top : 40,
  },
  bulletText: {
    fontSize: 18,
    lineHeight: 22,
    flex: 1,
    top : 40,
  },
});

export default DataPrivacyScreen;

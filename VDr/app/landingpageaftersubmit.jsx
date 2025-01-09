import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";

const ThankYouScreen = () => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require("@/assets/images/background.png")} // Correctly importing background image
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Curved Shape */}
        <View style={styles.curvedShape} />

        {/* Logo */}
        <Image
          source={require("@/assets/images/icon.png")} // Correctly importing logo image
          style={styles.logo}
          resizeMode="contain"
        />
      </ImageBackground>

      {/* Thank You Text */}
      <Text style={styles.thankYouText}>Thank You for Registration!</Text>

      {/* Description Text */}
      <Text style={styles.descriptionText}>
        Your information has been successfully submitted and is under review.{"\n"}
        We will send you an Email once verification is done.
      </Text>

      {/* Success Icon with Text (Watermark) */}
      <View style={styles.watermarkContainer}>
        <Image
          source={require("@/assets/images/icon.png")} // Replace with your success icon
          style={styles.watermarkImage}
          resizeMode="contain"
        />
        {/* <Text style={styles.successText}>Registration Complete</Text> */}
      </View>

      {/* Done Button */}
      <TouchableOpacity
        style={[styles.doneButton, { width: screenWidth * 0.4 }]} // Dynamically calculate button width
      >
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "55%",
    position: "absolute",
    top: 0,
  },
  curvedShape: {
    width: "100%",
    height: 120,
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    position: "absolute",
    bottom: 0,
  },
  logo: {
    position: "absolute",
    top: 80,
    width:100,
    height: 100,
    alignSelf: "center",
  },
  thankYouText: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginTop: "45%",
    color: "#000000",
    top: 110,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: "center",
    color: "#555555",
    marginVertical: 20,
    paddingHorizontal: 20,
    top: 130,
  },
  watermarkContainer: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
    position: "relative",
    top: -30,
  },
  watermarkImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.1, // Set opacity for watermark effect
  },
  successText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#32CD32", // Darker green for the text
    textAlign: "center",
  },
  doneButton: {
    height: 45,
    backgroundColor: "#466FB5",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  doneButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "600",
  },
});

export default ThankYouScreen;

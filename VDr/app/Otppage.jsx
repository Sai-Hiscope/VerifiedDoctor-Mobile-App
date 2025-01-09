import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const OTPScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isResending, setIsResending] = useState(false);
  const inputRefs = useRef([]); // Using useRef to manage input refs

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically move to the next input
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus(); // Move to the previous input
    }
  };

  const handleConfirm = () => {
    console.log('Entered OTP:', otp.join(''));
  };

  const handleResend = () => {
    setIsResending(true);

    // Simulate an API call to resend OTP
    setTimeout(() => {
      console.log('OTP resent');
      setIsResending(false);
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <View style={styles.container}>
      {/* Background Image Header */}
      <ImageBackground
        source={require('@/assets/images/background.png')} // Replace with your background image path
        style={styles.header}
        resizeMode="cover"
      >
        <Text style={styles.headerText}>VERIFIED DOCTOR</Text>
      </ImageBackground>

      {/* Content Section */}
      <View style={styles.content}>
        <Image
          source={require('@/assets/images/icon.png')} // Replace with your logo path
          style={styles.logo}
        />
        <Text style={styles.title}>OTP</Text>
        <Text style={styles.subtitle}>
          We Send You OTP in Mobile & Email. Please Check Your Mail And Complete
          OTP Code
        </Text>

        {/* OTP Inputs */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)} // Store refs in the array
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleOtpChange(value, index)}
              onKeyPress={(event) => handleOtpKeyPress(event, index)} // Handle backspace
            />
          ))}
        </View>

        {/* Resend OTP Button */}
        <TouchableOpacity
          style={styles.resendButton}
          onPress={handleResend}
          disabled={isResending}
        >
          <Text style={styles.resendButtonText}>
            {isResending ? 'Resending...' : 'Resend OTP'}
          </Text>
        </TouchableOpacity>

        {/* Confirm Button */}
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>

        {/* Footer Section */}
        <Text style={styles.footerText}>
          Already have Account?{' '}
          <Text style={styles.loginText}>Login</Text>.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    width: '100%',
    height: height * 0.3, // Adjust height as needed
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
    top: -80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    top: -80,

  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
    top: -80,

  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
    top: -80,

  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#f9f9f9',
  },
  resendButton: {
    marginBottom: 20,
    top: -90,

  },
  resendButtonText: {
    fontSize: 14,
    color: '#007bff',
    fontWeight: 'bold',
  },
  confirmButton: {
    width: '60%',
    height: 45,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 20,
    top: -100,

  },
  confirmButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: '#555',
    top: -110,
  },
  loginText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default OTPScreen;

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSignIn = () => {
  //   if (!email || !password) {
  //     alert("Please fill out both fields.");
  //     return;
  //   }
  //   console.log('Email:', email);
  //   console.log('Password:', password);
  // };
   const handleSignUp = () => {
    const { password, confirmPassword, email, phoneNumber } = formData;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address!');
      return;
    }
  
    if (phoneNumber.length !== 10) {
      alert('Please enter a valid phone number!');
      return;
    }
  
    console.log('Signup Data:', formData);
    alert('Signup Successful!');
    navigation.navigate('Login'); // Automatically navigate to the login screen after successful signup

  };
  

  return (
    <View style={styles.container}>
      {/* Top Background */}
      <View style={styles.topBackground}>
        <Text style={styles.headerTitle}>VERIFIED DOCTOR</Text>
        <Image
          source={require('@/assets/images/icon.png')} // Replace with your logo path
          style={styles.logo}
        />
      </View>

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require('@/assets/images/profile.png')} // Replace with an avatar placeholder path
        />
      </View>

      {/* Sign In Text */}
      <Text style={styles.title}>Sign In</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address" // Appropriate keyboard for email
        autoCapitalize="none" // Prevent capitalization of email input
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
    
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forget Password?</Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signInButton} onPress={handleSignUp}>
        <Text style={styles.signInButtonText}>Sign up</Text>
      </TouchableOpacity>

      {/* Or Section */}
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      {/* Social Icons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image
            source={require('@/assets/images/icon1.png')} // Replace with Google icon path
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('@/assets/images/icon2.png')} // Replace with Facebook icon path
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('@/assets/images/icon3.png')} // Replace with LinkedIn icon path
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text>
<Text style={styles.footerText}>Don’t Have an Account?</Text>
<Text style={styles.signUpText}> Sign Up </Text>
</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  topBackground: {
    width: '100%',
    height: height * 0.26,
    backgroundColor: '#3B82F6',
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 0,
    position: 'absolute',
    top: 0,
    alignItems: 'center',
  },
  headerTitle: {
    marginTop: 40,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 10,
    position:"absolute",
    right:10,top:200
  },
  avatarContainer: {
    marginTop: height * 0.15,
    width: 90,
    height: 90,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    elevation: 5,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '85%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 20,
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 10,
    color: '#888',
    textDecorationLine: 'underline',
  },
  signInButton: {
    width: '85%',
    height: 50,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '85%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    marginHorizontal: 10,
    color: '#888',
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  footerText: {
    marginTop: 20,
    color: '#888',
  },
  signUpText: {
    color: '#3B82F6',
    fontWeight: 'bold',
  },
});

export default SignInScreen;

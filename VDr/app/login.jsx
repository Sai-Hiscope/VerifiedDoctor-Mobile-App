import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const LoginInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
  };
  

  return (
    <ImageBackground
      source={require('@/assets/images/background.png')} // Replace with your primary background image path
      style={styles.primaryBackground}
    >
      {/* Semi-transparent dark overlay */}
      <View style={styles.overlay} />

      <View style={styles.container}>
        {/* Top Background */}
        <View style={styles.topBackground}>
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

        {/* Sign In Button */}
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Sign In</Text>
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
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Don’t Have an Account?</Text>
          <TouchableOpacity>
            <Text style={styles.signUpText}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  primaryBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.)', // Dark overlay with 10% opacity
  },
  container: {
    flex: 0.5,
    alignItems: 'center',
  },
  topBackground: {
    width: '100%',
    height: height * 0.3,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: 'absolute',
    top:0,
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
    marginTop: 10,
    position: 'absolute',
    top: 320,
    right: 20,
  },
  avatarContainer: {
    marginTop: height * 0.35,
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    elevation: 1,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    width: '85%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 20,
    fontSize: 22,
    backgroundColor: '#fff',
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
    borderRadius: 40,
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
  footerContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    color: '#888',
  },
  signUpText: {
    color: '#3B82F6',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default LoginInScreen;

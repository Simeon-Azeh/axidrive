import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../assets/Utils/Colors';

const { width: screenWidth } = Dimensions.get('window');

export default function Onboarding() {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    // Navigate to the next screen, or wherever the "Get Started" button should take the user
    console.log('Navigating to the next screen');
     navigation.navigate('MoreInfo');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {/* Placeholder Image */}
      <Image
        source={require('../../../assets/Images/onboard2.png')} // Replace with your actual image path
        style={styles.image}
        resizeMode="contain"
      />

      {/* Title and Description */}
      <Text style={styles.title}>Experience Green Mobility</Text>
      <Text style={styles.description}>
      Electric cars, motorbikes, or buses. Your journey is cleaner, smarter, and faster.
      </Text>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
        <Text style={styles.getStartedButtonText}>Get Started</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: screenWidth * 1,
    height: screenWidth * 1.2,
   
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: screenWidth * 0.06,
    textAlign: 'center',
    marginBottom: 2,
    color: Colors.PRIMARY,
  },
  description: {
    fontFamily: 'Poppins',
    fontSize: screenWidth * 0.035,
    textAlign: 'center',
    color: '#666',
    marginBottom: 5,
    paddingHorizontal: 20,
  },
  getStartedButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Position button at the bottom
    bottom: 40,
    alignSelf: 'center',  // Center button horizontally
  },
  getStartedButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});

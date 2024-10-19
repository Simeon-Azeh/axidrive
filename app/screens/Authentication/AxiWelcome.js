import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Linking,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Colors from '../../../assets/Utils/Colors';


const { width: screenWidth } = Dimensions.get('window');

const AxiWelcome = () => {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();

  const handleContinue = () => {
   
      navigation.navigate('Drawer'); // Change 'NextPage' to your next screen
    
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {/* Header */}
    

      <Image
        source={require('../../../assets/Images/welcomeaxi.png')} // Add your T&C image here
        style={styles.image}
        resizeMode="contain"
      />

      {/* Agreement Text with Links */}
      <Text style={styles.title}>
      Welcome to Axidrive
      </Text>
      <Text style={styles.description}>
      Customizing your experience...
      </Text>

     
      

      {/* Continue Button */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={handleContinue}
      
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'flex-start',
  },

  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: screenWidth * 0.08,
    marginBottom: 20,
    textAlign: 'center',
    color: Colors.PRIMARY,
  },
  image: {
    width: screenWidth * 0.9,
    height: screenWidth * 1,
   
  },
  description: {
    fontFamily: 'Poppins',
    fontSize: screenWidth * 0.04,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  link: {
    color: '#00A971',
    fontFamily: 'Poppins-Medium',
  },
 
  continueButton: {
    padding: 15,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: Colors.PRIMARY
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});

export default AxiWelcome;

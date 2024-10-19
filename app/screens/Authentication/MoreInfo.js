import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Entypo from '@expo/vector-icons/Entypo';
import Colors from '../../../assets/Utils/Colors';

const { width: screenWidth } = Dimensions.get('window');

const MoreInfo = () => {
  const navigation = useNavigation();

  // State for input fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Handle Continue Button Press
  const handleContinue = () => {
    // Navigate to acceptTC screen
    navigation.navigate('acceptTC');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Entypo name="chevron-small-left" size={42} color="black" />
        </TouchableOpacity>
      </View>

      {/* Title and Description */}
      <Text style={styles.title}>Perfect! Now let's set up your profile</Text>
      <Text style={styles.description}>What should we call you?</Text>

      {/* First Name Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="John"
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>

      {/* Last Name Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Asake"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
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
  header: {
    width: '100%',
    alignItems: 'flex-start',
    paddingVertical: 20,
  },
  backButton: {
    backgroundColor: '#F6F7F7',
    borderRadius: 100,
    width: screenWidth * 0.16,
    height: screenWidth * 0.16,
    padding: 12,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: screenWidth * 0.06,
    marginBottom: 10,
    textAlign: 'left',
    width: '100%',
    color: Colors.PRIMARY,
  },
  description: {
    fontFamily: 'Poppins',
    fontSize: screenWidth * 0.04,
    marginBottom: 20,
    color: '#333',
    width: '100%',
    textAlign: 'left',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: screenWidth * 0.04,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    fontSize: screenWidth * 0.04,
    fontFamily: 'Poppins',
    color: '#333',
    backgroundColor: '#F6F7F7',
  },
  continueButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});

export default MoreInfo;

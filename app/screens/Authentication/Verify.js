import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Entypo from '@expo/vector-icons/Entypo';
import Colors from '../../../assets/Utils/Colors';

const { width: screenWidth } = Dimensions.get('window');

const VerifyScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  const { selectedTab, email, phoneNumber } = route.params;
  
  // Dynamic message based on selectedTab
  const message = selectedTab === 'email'
    ? `We’ve sent an Email with an activation code to ${email}`
    : `We’ve sent an SMS with an activation code to ${phoneNumber}`;
  
  const [code, setCode] = useState(['', '', '', '', '']);
  const inputs = useRef([]);

  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Automatically move to next input
    if (text && index < 4) {
      inputs.current[index + 1].focus();
    }
  };

  const handleVerify = () => {
    // Assuming verification logic passed successfully
    console.log(`Verification code: ${code.join('')}`);
  
    // Navigate to Onboarding screen
    navigation.navigate('Onboarding');
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
      <Text style={styles.title}>Verify your account</Text>
      <Text style={styles.description}>{message}</Text>

      {/* Code Input Section */}
      <View style={styles.codeInputContainer}>
        {code.map((value, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputs.current[index] = el)}
            value={value}
            onChangeText={(text) => handleCodeChange(text, index)}
            style={styles.codeInput}
            maxLength={1}
            keyboardType="numeric"
          />
        ))}
      </View>

      {/* Resend Code Section */}
      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Didn’t receive a code? </Text>
        <TouchableOpacity onPress={() => console.log('Resend code')}>
          <Text style={styles.resendLink}>Resend</Text>
        </TouchableOpacity>
        
      </View>

      {/* Verify Button */}
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify</Text>
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
    color: Colors.BLACK
  },
  description: {
    fontFamily: 'Poppins',
    fontSize: screenWidth * 0.04,
    marginBottom: 20,
    color: '#333',
    width: '100%',
    textAlign: 'left',
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    width: '100%',
  },
  codeInput: {
    width: screenWidth * 0.12,
    height: screenWidth * 0.12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D8DADC',
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#333',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  resendText: {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: '#333',
  },
  resendLink: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: Colors.PRIMARY,
  },
  verifyButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 10,
    width: '100%',           // Reduce width slightly to leave some padding on the sides
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',   // Position at the bottom
    bottom: 40,
    alignSelf: 'center',    // Center the button horizontally
   
  },
  verifyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});

export default VerifyScreen;

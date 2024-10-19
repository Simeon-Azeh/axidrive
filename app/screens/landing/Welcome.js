import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet, Dimensions } from 'react-native';
import { RadioButton } from 'react-native-paper'; // Using RadioButton from react-native-paper
import Colors from '../../../assets/Utils/Colors';
import UI2 from '../../../assets/Images/Ui2.png';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation
import AntDesign from '@expo/vector-icons/AntDesign';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const WelcomeScreen = () => {
  const [checked, setChecked] = useState({
    offers: false,
    agreement: false,
  });

  const navigation = useNavigation(); // Initialize navigation

  const openLink = (url) => {
    Linking.openURL(url); // This will open the URL in the default browser
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.slideContainer}>
        <Image source={UI2} style={styles.UiImage} />

        {/* Radio buttons */}
        <View style={styles.radioContainer}>
          <View style={styles.radioItem}>
            <RadioButton
              value="offers"
              status={checked.offers ? 'checked' : 'unchecked'}
              onPress={() => setChecked({ ...checked, offers: !checked.offers })}
              color={Colors.PRIMARY}
            />
            <Text style={styles.radioText}>
              Send me offers and news via email and other electronic messages.
            </Text>
          </View>

          <View style={styles.radioItem}>
            <RadioButton
              value="agreement"
              status={checked.agreement ? 'checked' : 'unchecked'}
              onPress={() => setChecked({ ...checked, agreement: !checked.agreement })}
              color={Colors.PRIMARY}
            />
            <Text style={styles.radioText}>
              I agree to
              <Text>{' '}</Text>
              <Text style={styles.linkText} onPress={() => openLink('https://example.com/user-agreement')}>
                User Agreement
              </Text>
              <Text>{' and '}</Text>
              <Text style={styles.linkText} onPress={() => openLink('https://example.com/privacy-policy')}>
                Privacy Policy
              </Text>.
            </Text>
          </View>
        </View>

        {/* Sign up buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.signUpButton, !checked.agreement && styles.disabledButton]}
            onPress={() => {}}
            disabled={!checked.agreement}
          >
            <View style={styles.buttonContent}>
              <AntDesign name="apple1" size={24} color={checked.agreement ? "black" : "gray"} />
              <Text style={[styles.signUpButtonText, !checked.agreement && styles.disabledText]}>
                Sign up with Apple
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.signUpButton, !checked.agreement && styles.disabledButton]}
            onPress={() => {}}
            disabled={!checked.agreement}
          >
            <View style={styles.buttonContent}>
              <AntDesign name="google" size={24} color={checked.agreement ? "black" : "gray"} />
              <Text style={[styles.signUpButtonText, !checked.agreement && styles.disabledText]}>
                Sign up with Google
              </Text>
            </View>
          </TouchableOpacity>

          {/* Other options button that navigates to Signup screen */}
          <TouchableOpacity
            style={[styles.otherOptionsButton, !checked.agreement && styles.disabledButton]}
            onPress={() => navigation.navigate('Signup')} // Navigate to Signup screen
            disabled={!checked.agreement}
          >
            <Text style={[styles.otherOptionsText, !checked.agreement && styles.disabledText]}>
              Other options
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    position: 'relative',
  },
  UiImage: {
    width: screenWidth,
    height: screenHeight * 0.65,
    resizeMode: 'cover',
  },
  radioContainer: {
    marginTop: 20,
    width: '90%',
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  radioText: {
    fontSize: 14,
    color: Colors.BLACK,
    fontFamily: 'Poppins-Medium',
    flexWrap: 'wrap',
  },
  linkText: {
    color: Colors.PRIMARY,
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Medium',
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%', // Ensure the button container takes up most of the width
  },
  signUpButton: {
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
    borderColor: '#D8DADC',
    width: '100%', // Full width for sign-up buttons
    borderWidth: 1, // Add border width for better visibility
  },
  otherOptionsButton: {
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
    borderColor: '#D8DADC',
    width: '100%', // Full width for other options button
    borderWidth: 0, // Add border width for better visibility
  },
  buttonContent: {
    flexDirection: 'row', // Aligns icon and text in a row
    alignItems: 'center', // Centers vertically
    justifyContent: 'center', // Centers horizontally
  },
  signUpButtonText: {
    color: Colors.BLACK,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    fontSize: 15,
    marginLeft: 10, // Adds space between icon and text
  },
  otherOptionsText: {
    color: Colors.BLACK,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    fontSize: 15,
  },
  disabledButton: {
    opacity: 0.5, // Reduced opacity when disabled
  },
  disabledText: {
    color: Colors.BLACK,
    opacity: 0.5, // Reduced opacity for disabled text
  },
});

export default WelcomeScreen;

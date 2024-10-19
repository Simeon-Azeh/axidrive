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
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../assets/Utils/Colors';
import Entypo from '@expo/vector-icons/Entypo';

const { width: screenWidth } = Dimensions.get('window');

const PushNotification = () => {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();

  const handleContinue = () => {
    if (checked) {
      navigation.navigate('axiwelcome'); // Change 'NextPage' to your next screen
    }
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Entypo name="chevron-small-left" size={42} color="black" />
        </TouchableOpacity>
      </View>

      {/* Title and Image */}
      <Text style={styles.title}>
      Stay Updated with Push Notifications
      </Text>
      <Image
        source={require('../../../assets/Images/push-not.png')} // Add your T&C image here
        style={styles.image}
        resizeMode="contain"
      />

      {/* Agreement Text with Links */}
      <Text style={styles.description}>
      Enable push notifications to stay in the loop with real-time updates on your rides, eco-point rewards, exclusive offers, and more.
      </Text>

      {/* I Agree Checkbox and Label */}
      <View style={styles.radioContainer}>
        <Text style={styles.radioLabel}>Enable?</Text>
        <RadioButton
          value="Enable"
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!checked)}
          color={Colors.PRIMARY}
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, { backgroundColor: checked ? Colors.PRIMARY : '#ccc' }]}
        onPress={handleContinue}
        disabled={!checked}
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
    fontSize: screenWidth * 0.05,
    marginBottom: 20,
    textAlign: 'left',
    color: Colors.PRIMARY,
  },
  image: {
    width: '100%',
    height: screenWidth * 0.6,
    marginBottom: 20,
  },
  description: {
    fontFamily: 'Poppins',
    fontSize: screenWidth * 0.04,
    marginBottom: 20,
    color: '#333',
    textAlign: 'justify',
  },
  link: {
    color: '#00A971',
    fontFamily: 'Poppins-Medium',
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  radioLabel: {
    fontFamily: 'Poppins-SemiBold', // Bold font for "I Agree"
    fontSize: 16,
    color: Colors.BLACK,
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
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});

export default PushNotification;

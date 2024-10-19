import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';  // Import useNavigation hook
import Colors from '../../../assets/Utils/Colors';

const { width } = Dimensions.get('window');

export default function Alert() {
  const [visible, setVisible] = useState(true); // State to show/hide the alert
  const navigation = useNavigation();  // Get navigation object

  if (!visible) return null; // If not visible, return null (don't show the alert)

  const handleAlertPress = () => {
    // Handle the alert press (e.g., navigate to verification page)
    console.log('Alert clicked! Navigate to verification page.');
  };

  const handleVerifyPress = () => {
    // Navigate to the verification page when "Verify Now" is pressed
    navigation.navigate('verify'); // Replace 'Verification' with the exact route name of your verification page
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleAlertPress} activeOpacity={0.9}>
      <View style={styles.alertBox}>
        <View style={styles.textContainer}>
          <Text style={styles.alertTitle}>Verification Required</Text>
          <Text style={styles.alertMessage}>
            Please verify your account in accordance with government policies, so we can better serve you.
          </Text>
          {/* Verification Button */}
          <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyPress}>
            <Text style={styles.verifyButtonText}>Verify Now</Text>
            <AntDesign name="pluscircleo" size={18} color="white" />
          </TouchableOpacity>
        </View>
        {/* Close Button */}
        <TouchableOpacity onPress={() => setVisible(false)} style={styles.closeButton}>
          <AntDesign name="closecircleo" size={24} color={Colors.PRIMARY} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.9, // Dynamic width based on screen size
    alignSelf: 'center',
    marginTop: 20,
  },
  alertBox: {
    flexDirection: 'row',
    backgroundColor: '#fff', // Alert background color
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  alertTitle: {
    color: Colors.SECONDARY,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  alertMessage: {
    color: Colors.SECONDARY,
    fontSize: 14,
    marginTop: 5,
    fontFamily: 'Poppins',
  },
  closeButton: {
    marginLeft: 10,
  },
  verifyButton: {
    backgroundColor: Colors.PRIMARY, // Primary color for the button
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginTop: 10,
    alignSelf: 'flex-start', // Align button to the left
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
});

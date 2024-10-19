import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Entypo from '@expo/vector-icons/Entypo';
import { Ionicons } from '@expo/vector-icons'; // For the camera icon
import Colors from '../../../assets/Utils/Colors';

const { width: screenWidth } = Dimensions.get('window');

const CardPayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigation = useNavigation();

  const handleSave = () => {
    // Handle save logic here
    navigation.navigate('NextPage'); // Navigate to the next page after saving
  };

  // Function to format card number by adding a space after every 4 digits
  const handleCardNumberChange = (value) => {
    const formattedValue = value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
    setCardNumber(formattedValue);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Entypo name="chevron-small-left" size={42} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Add Card</Text>

        {/* Card Number Input with Camera Icon */}
        <Text style={styles.label}>Card Number</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputWithIcon}
            placeholder="---- ---- ---- ----"
            value={cardNumber}
            onChangeText={handleCardNumberChange}
            maxLength={19} // to ensure 16 digits + 3 spaces
            keyboardType="numeric"
          />
          {/* Camera Icon */}
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="camera" size={24} color={Colors.PRIMARY} />
          </TouchableOpacity>
        </View>

        {/* Card Holder Name Input */}
        <Text style={styles.label}>Card Holder Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={cardHolder}
          onChangeText={setCardHolder}
        />

        {/* Expiry Date and CVV in Row */}
        <View style={styles.row}>
          <View style={styles.rowItem}>
            <Text style={styles.label}>Expiry Date </Text>
            <TextInput
              style={styles.input}
              placeholder="MM/YY"
              value={expiryDate}
              onChangeText={setExpiryDate}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.rowItem}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              style={styles.input}
            
              value={cvv}
              onChangeText={setCvv}
              secureTextEntry
              maxLength={3}
              keyboardType="numeric"
            />
          </View>
        </View>

      
      </ScrollView>
        {/* Save Button (Placed at Bottom) */}
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
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
    color: Colors.PRIMARY,
    textAlign: 'center',
    marginBottom: 40,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: Colors.BLACK,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
     fontFamily: 'Poppins-Medium'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontFamily: 'Poppins'
  },
  inputWithIcon: {
    flex: 1,
    padding: 15,
    fontFamily: 'Poppins-Medium',
    fontSize: 16
  },
  iconContainer: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowItem: {
    width: '48%',
  },
  saveButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 10,
    width: '100%',           // Reduce width slightly to leave some padding on the sides
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',   // Position at the bottom
    bottom: 10,
    alignSelf: 'center',    // Center the button horizontally
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default CardPayment;

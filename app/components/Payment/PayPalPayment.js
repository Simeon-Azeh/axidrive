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
import Colors from '../../../assets/Utils/Colors';

const { width: screenWidth } = Dimensions.get('window');

const PayPalPayment = () => {
  const [paypalEmail, setPaypalEmail] = useState('');
  const navigation = useNavigation();

  const handleSave = () => {
    // Handle save logic here
    navigation.navigate('NextPage'); // Navigate to the next page after saving
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
        <Text style={styles.title}>Add PayPal Email</Text>

        {/* PayPal Email Input */}
        <Text style={styles.label}>PayPal Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your PayPal email address"
          value={paypalEmail}
          onChangeText={setPaypalEmail}
          keyboardType="email-address"
        />

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
  // Same styles as CardPayment with slight adjustments if needed
  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 20, justifyContent: 'flex-start' },
  header: { width: '100%', alignItems: 'flex-start', paddingVertical: 20 },
  backButton: { backgroundColor: '#F6F7F7', borderRadius: 100, width: screenWidth * 0.16, height: screenWidth * 0.16, padding: 12 },
  title: { fontFamily: 'Poppins-Medium', fontSize: screenWidth * 0.05, color: Colors.PRIMARY, textAlign: 'center', marginBottom: 40 },
  label: { fontFamily: 'Poppins-Medium', fontSize: 16, color: Colors.BLACK, marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 15, marginBottom: 20, fontFamily: 'Poppins-Medium' },
  saveButton: { backgroundColor: Colors.PRIMARY, padding: 15, borderRadius: 10, width: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 10, alignSelf: 'center' },
  saveButtonText: { color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-Medium' },
  bottom: { flex: 1, justifyContent: 'flex-end' },
});

export default PayPalPayment;

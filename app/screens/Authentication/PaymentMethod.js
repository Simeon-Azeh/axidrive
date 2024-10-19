import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Entypo from '@expo/vector-icons/Entypo';
import Colors from '../../../assets/Utils/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // For icons like PayPal and Bitcoin

const { width: screenWidth } = Dimensions.get('window');

const PaymentMethod = () => {
  const navigation = useNavigation();

  const paymentMethods = [
    { name: 'Credit or Debit Card', icon: 'credit-card', navigateTo: 'CardPayment' },
    { name: 'Bitcoin', icon: 'bitcoin', navigateTo: 'BitcoinPayment' },
    { name: 'Mpesa', icon: 'money', navigateTo: 'MpesaPayment' },
    { name: 'PayPal', icon: 'paypal', navigateTo: 'PaypalPayment' },
  ];

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Entypo name="chevron-small-left" size={42} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PushNotification')} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Payment Methods List */}
      <Text style={styles.title}>Select Payment Method</Text>
      {paymentMethods.map((method, index) => (
        <TouchableOpacity
          key={index}
          style={styles.methodContainer}
          onPress={() => navigation.navigate(method.navigateTo)} // Navigate to the respective payment method page
        >
          <View style={styles.methodInfo}>
            <FontAwesome name={method.icon} size={24} color={Colors.PRIMARY} style={styles.methodIcon} />
            <Text style={styles.methodName}>{method.name}</Text>
          </View>
          <Entypo name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
      ))}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  backButton: {
    backgroundColor: '#F6F7F7',
    borderRadius: 100,
    width: screenWidth * 0.16,
    height: screenWidth * 0.16,
    padding: 12,
  },
  skipButton: {
    paddingVertical: 10,
  },
  skipText: {
    color: Colors.PRIMARY,
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: screenWidth * 0.05,
    marginBottom: 20,
    color: Colors.BLACK,
  },
  methodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 35,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  methodInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  methodIcon: {
    marginRight: 10,
  },
  methodName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: Colors.BLACK,
  },
});

export default PaymentMethod;

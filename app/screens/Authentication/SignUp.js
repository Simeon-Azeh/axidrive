import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
  Modal,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import countries from '../../../assets/Utils/countries.json';
import Colors from '../../../assets/Utils/Colors';

const { width: screenWidth } = Dimensions.get('window');

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('phone');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [showCountryModal, setShowCountryModal] = useState(false);

  const handleNext = () => {
    if (selectedTab === 'phone' && phoneNumber) {
      navigation.navigate('VerifyScreen', { selectedTab: 'phone', phoneNumber });
    } else if (selectedTab === 'email' && email) {
      navigation.navigate('VerifyScreen', { selectedTab: 'email', email });
    }
  };
  

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Top Half - White Background */}
        <View style={styles.topContainer}>
          {/* Header with Back Button */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Entypo name="chevron-small-left" size={42} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Sign in or Sign up</Text>
          </View>

          {/* Tabs for Phone Number and Email */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              onPress={() => setSelectedTab('phone')}
              style={[styles.tab, selectedTab === 'phone' && styles.activeTab]}
            >
              <Text style={styles.tabText}>Phone Number</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedTab('email')}
              style={[styles.tab, selectedTab === 'email' && styles.activeTab]}
            >
              <Text style={styles.tabText}>Email</Text>
            </TouchableOpacity>
          </View>

          {/* Phone Number Inputs */}
          {selectedTab === 'phone' && (
            <View style={styles.inputContainer}>
              {/* Country Input */}
              <TouchableOpacity onPress={() => setShowCountryModal(true)} style={styles.countryInput}>
                <Text style={styles.countryText}>{selectedCountry ? `${selectedCountry.flag} ${selectedCountry.name}` : 'Select Country'}</Text>
              </TouchableOpacity>

              {/* Country Code and Phone Number Input */}
              <View style={styles.phoneInputContainer}>
                <Text style={styles.countryCode}>{selectedCountry ? `+${selectedCountry.code}` : ''}</Text>
                <TextInput
                  placeholder="Mobile Number"
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  style={styles.phoneInput}
                />
              </View>
            </View>
          )}

          {/* Email Input */}
          {selectedTab === 'email' && (
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              style={styles.emailInput}
            />
          )}
        </View>
      </ScrollView>

      {/* Next Button at the bottom */}
      <View style={styles.nextButtonContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Country Selection Modal */}
      <Modal visible={showCountryModal} animationType="slide">
        <View style={styles.modalContainer}>
          <FlatList
            data={countries}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedCountry(item);
                  setShowCountryModal(false);
                }}
                style={styles.countryItem}
              >
                <Text style={styles.countryItemText}>{item.flag} {item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: screenWidth * 0.05,
    textAlign: 'left',
    marginTop: 2,
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    width: '100%',
    paddingVertical: 20,
    alignItems: 'flex-start',
  },
  backButton: {
    backgroundColor: '#F6F7F7',
    borderRadius: 100,
    width: screenWidth * 0.16,
    height: screenWidth * 0.16,
    padding: 12,
  },
  tabContainer: {
    flexDirection: 'row',
    marginVertical: 25,
    backgroundColor: '#fff',
  },
  tab: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.PRIMARY,
  },
  tabText: {
    fontSize: 16,
    fontFamily: 'Poppins',
  },
  inputContainer: {
    width: '100%',
  },
  countryInput: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#D8DADC',
    borderRadius: 10,
    marginBottom: 10,
  },
  countryText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Poppins-Medium',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  countryCode: {
    fontSize: 16,
    padding: 15,
    borderWidth: 1,
    borderColor: '#D8DADC',
    borderRadius: 10,
    marginRight: 10,
    color: '#333',
    fontFamily: 'Poppins-Medium',
  },
  phoneInput: {
    flex: 1,
    padding: 15,
    borderWidth: 1,
    borderColor: '#D8DADC',
    borderRadius: 10,
    fontFamily: 'Poppins-Medium',
    color: Colors.BLACK,
  },
  emailInput: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#D8DADC',
    borderRadius: 10,
    fontFamily: 'Poppins-Medium',
    marginBottom: 10,
    width: '100%',
  },
  nextButtonContainer: {
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 30,
    backgroundColor: '#FFFFFF',
  },
  nextButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  countryItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D8DADC',
  },
  countryItemText: {
    fontSize: 16,
  },
});

export default SignUpScreen;

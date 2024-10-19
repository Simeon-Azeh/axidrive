import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import PolicyDetails from '../../components/Insurance/PolicyDetails';
import CoverageCard from '../../components/Insurance/CoverageCard';
import { Dropdown } from 'react-native-element-dropdown'; // You'll need to install this package
import Slider from '@react-native-community/slider'; // You'll need to install this package

const coverageData = [
  { type: 'Inpatient', limit: 5000, balance: 2500 },
  { type: 'Outpatient', limit: 3000, balance: 1500 },
  { type: 'Optical', limit: 1000, balance: 500 },
  { type: 'Dental', limit: 2000, balance: 1200 },
];

const currencyOptions = [
  { label: 'USD', value: 'usd' },
  { label: 'NGN', value: 'ngn' },
  { label: 'KES', value: 'kes' },
  { label: 'GHS', value: 'ghs' },
  { label: 'ZAR', value: 'zar' },
];

export default function Benefits() {
  const [selectedCurrency, setSelectedCurrency] = useState(currencyOptions[0].value); // Default currency

  return (
    <View style={styles.container}>
      <View>
        <PolicyDetails />
      </View>
      
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>Select Currency:</Text>
        <Dropdown
          data={currencyOptions}
          labelField="label"
          valueField="value"
          value={selectedCurrency}
          onChange={(item) => {
            setSelectedCurrency(item.value);
          }}
          style={styles.dropdown}
          placeholder="Select Currency"
        />
      </View>

      <ScrollView style={styles.coverageSection}>
        <Text style={styles.sectionTitle}>Coverage Benefits</Text>
        {coverageData.map((item, index) => (
          <CoverageCard key={index} type={item.type} limit={item.limit} balance={item.balance} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  coverageSection: {
    marginTop: 20,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    marginBottom: 15,
    
  },
  dropdownContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  dropdownLabel: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginBottom: 5,
  },
  dropdown: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});

import React, { useState } from 'react';
import { View, Text, Dimensions, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Header from '../../components/General/Header';
import Colors from '../../../assets/Utils/Colors';

const { width: screenWidth } = Dimensions.get('window');

// Mock Data for prescription and diagnostic records with dates and times
const prescriptionRecords = [
  { id: 1, title: 'Prescription 1', category: 'Antibiotics', details: 'Take twice a day after meals.', date: '2023-08-14', time: '14:30' },
  { id: 2, title: 'Prescription 2', category: 'Pain Relief', details: 'Use for 3 days only.', date: '2023-08-12', time: '09:00' },
  { id: 3, title: 'Prescription 3', category: 'Vitamins', details: 'Take one daily in the morning.', date: '2023-09-05', time: '07:45' },
  { id: 4, title: 'Prescription 4', category: 'Allergy Medication', details: 'Take only when symptoms appear.', date: '2023-09-10', time: '18:00' },
];

const diagnosticRecords = [
  { id: 1, title: 'Diagnosis 1', category: 'X-ray', details: 'Fracture detected in the left arm.', date: '2023-08-15', time: '10:00' },
  { id: 2, title: 'Diagnosis 2', category: 'Blood Test', details: 'Normal blood sugar levels.', date: '2023-08-13', time: '08:15' },
  { id: 3, title: 'Diagnosis 3', category: 'MRI Scan', details: 'No significant findings.', date: '2023-09-03', time: '13:45' },
  { id: 4, title: 'Diagnosis 4', category: 'Ultrasound', details: 'Mild liver enlargement detected.', date: '2023-09-11', time: '11:30' },
];

// Prescription Record Component
const PrescriptionRecords = () => {
  return (
    <ScrollView>
      {prescriptionRecords.map((item) => (
        <RecordCard key={item.id} item={item} />
      ))}
    </ScrollView>
  );
};

// Diagnostic Record Component
const DiagnosticRecords = () => {
  return (
    <ScrollView>
      {diagnosticRecords.map((item) => (
        <RecordCard key={item.id} item={item} />
      ))}
    </ScrollView>
  );
};

// Expandable Card Component
const RecordCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URLs if needed
          style={styles.recordImage}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <View style={styles.cardCategory}>
            <MaterialIcons name="category" size={14} color={Colors.LIGHT_GRAY} style={{ marginRight: 5 }} />
            <Text style={styles.cardCategoryText}>{item.category}</Text>
          </View>
          <Text style={styles.cardDateTime}>{`Date: ${item.date} - Time: ${item.time}`}</Text>
          {expanded && (
            <Text style={styles.cardDetails}>
              {item.details}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

// TabView Configuration
export default function Records() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'prescriptions', title: 'Prescriptions' },
    { key: 'diagnostics', title: 'Diagnostics' },
  ]);

  const renderScene = SceneMap({
    prescriptions: PrescriptionRecords,
    diagnostics: DiagnosticRecords,
  });

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: screenWidth }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: Colors.PRIMARY }}
            style={{ backgroundColor: Colors.WHITE }}
            labelStyle={{ color: Colors.PRIMARY, fontFamily: 'Poppins-Medium', marginBottom: 20, }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 5,
    overflow: 'hidden',
    padding: 5,
    width: screenWidth * 0.9,
    marginVertical: 8,
    alignSelf: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  recordImage: {
    width: screenWidth * 0.12,
    height: screenWidth * 0.12,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.WHITE,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: Colors.WHITE,
    marginBottom: 5,
  },
  cardCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  cardCategoryText: {
    fontSize: 14,
    color: Colors.LIGHT_GRAY,
    fontFamily: 'Poppins',
  },
  cardDateTime: {
    fontSize: 12,
    color: Colors.LIGHT_GRAY,
    marginBottom: 5,
    fontFamily: 'Poppins-Medium',
  },
  cardDetails: {
    fontSize: 14,
    color: Colors.WHITE,
    marginTop: 10,
  },
});

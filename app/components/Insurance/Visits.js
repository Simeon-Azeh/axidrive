import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Colors from '../../../assets/Utils/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Visits() {
  const [expandedVisit, setExpandedVisit] = useState(null); // Keep track of expanded visit

  const visits = [
    {
      id: 1,
      clinic: 'City Medical Center',
      status: 'Closed',
      type: 'Outpatient',
      date: '20/09/2023',
      doctor: 'Dr. John Doe',
      treatment: 'General Checkup',
    },
    {
      id: 2,
      clinic: 'Happy Smiles Dental Clinic',
      status: 'Open',
      type: 'Dental',
      date: '25/09/2023',
      doctor: 'Dr. Jane Smith',
      treatment: 'Teeth Cleaning',
    },
    {
      id: 3,
      clinic: 'Green Valley Hospital',
      status: 'Closed',
      type: 'Inpatient',
      date: '15/08/2023',
      doctor: 'Dr. Ahmed Khan',
      treatment: 'Appendectomy',
    },
  ];

  // Function to toggle expanded visit
  const toggleVisitDetails = (id) => {
    setExpandedVisit(expandedVisit === id ? null : id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>My Visits</Text>
      
      {visits.map((visit) => (
        <View key={visit.id} style={styles.PolicyCard}>
          <View style={styles.PolicyHeader}>
            <View>
              <Text style={styles.CardTitle}>{visit.clinic}</Text>
              <Text style={styles.CardSub}> {visit.status}</Text>
              <Text style={styles.CardSub}>Type: {visit.type}</Text>
            </View>
            <TouchableOpacity onPress={() => toggleVisitDetails(visit.id)}>
              <Ionicons name={expandedVisit === visit.id ? "chevron-up" : "chevron-forward"} size={24} color={Colors.SECONDARY} />
            </TouchableOpacity>
          </View>

          {/* Conditionally render details when the card is expanded */}
          {expandedVisit === visit.id && (
            <View style={styles.visitDetails}>
              <Text style={styles.detailText}>Date: {visit.date}</Text>
              <Text style={styles.detailText}>Doctor: {visit.doctor}</Text>
              <Text style={styles.detailText}>Treatment: {visit.treatment}</Text>
            </View>
          )}
        </View>
      ))}
       <TouchableOpacity style={styles.viewAllButton}>
        <Text style={styles.viewAllButtonText}>View All Visits</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    marginBottom: 10,
    color: Colors.SECONDARY,
    paddingHorizontal: 10,
  },
  PolicyCard: {
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
    padding: 20,
    marginBottom: 15, // Spacing between each card
   
  },
  PolicyHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CardTitle: {
    fontFamily: 'Poppins',
    color: '#333',
    fontSize: 16,
    marginBottom: 5,
  },
  CardSub: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#555',
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
  visitDetails: {
    marginTop: 10,
  },
  detailText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  viewAllButton: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    
    alignSelf: 'center',
  },
  viewAllButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});

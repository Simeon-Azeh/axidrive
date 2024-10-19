import { View, Text , StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Utils/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';



export default function PolicyDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>My Policy</Text>
      <View style={styles.PolicyCard}>
        <View style={styles.PolicyHeader}>
            <View>
                <Text style={styles.CardTitle}>Employer</Text>
                <Text style={styles. CardSub}>AFRIKABAL</Text>
            </View>
            <View>
            <Text style={styles.CardTitle}>Member ID</Text>
            <Text style={styles. CardSub}>02D54H23</Text>
            </View>
        </View>
        <View style={styles.PolicyHeader}>
            <View>
                <Text style={styles.CardTitle}>Policy Start date</Text>
                <Text style={styles. CardSub}>29-07-2004</Text>
            </View>
            <View>
            <Text style={styles.CardTitle}>Policy End date</Text>
            <Text style={styles. CardSub}>29-12-2004</Text>
            </View>
        </View>
       
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginVertical: 20,
      marginHorizontal: 20,
      
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
    },
    PolicyHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    CardTitle: {
        fontFamily: 'Poppins',
        color: '#777',
        fontSize: 16,
        marginTop: 10,

    },
    CardSub: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
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
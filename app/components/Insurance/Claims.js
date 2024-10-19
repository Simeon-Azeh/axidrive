import { View, Text , StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Utils/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook



export default function Claims() {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.sectionTitle}>My Claims</Text>
      <View style={styles.PolicyCard}>
     <Text style={styles.CardSub}>If you received treatment outside our cover area, you can submit a claim to get a 50% to full refund!</Text>
     <Text style={{fontFamily: 'Poppins', color: '#333'}}>This process may take upto 14 days.</Text>
        <TouchableOpacity style={styles.verifyButton}>
            <Text style={styles.verifyButtonText}  onPress={() => navigation.navigate('ClaimForm')} >Submit Claim</Text>
        
          </TouchableOpacity>
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
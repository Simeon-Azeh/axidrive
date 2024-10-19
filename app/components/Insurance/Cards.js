import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import React from 'react';
import Colors from '../../../assets/Utils/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import Logo from '../../../assets/Images/axklogo.png'
import UIImg from '../../../assets/Images/UI1.png'
import { useNavigation } from '@react-navigation/native';  // Import useNavigation hook


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function Cards() {
  const navigation = useNavigation();  // Get navigation object
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>My Cards</Text>

      {/* First Card (front) */}
      <View style={styles.frontCard}>
      <Image source={UIImg} style={{width: screenWidth * 1.2, height: screenHeight * 0.4, position: 'absolute', top: 100, right: 0,  opacity: 0.1  }} />
        <View style={styles.PolicyHeader}>
          <View>
            <Text style={styles.CardTitle}>Member Name</Text>
            <Text style={styles.CardSub}>John Doe</Text>
          </View>
          <View>
            <Text style={styles.CardTitle}>Member ID</Text>
            <Text style={styles.CardSub}>02D54H23</Text>
          </View>
       
        </View>

        <View style={styles.PolicyDetails}>
          <Text style={styles.CardSub}>Employer: AFRIKABAL</Text>
          <Text style={styles.CardSub}>Exp: 12/2024</Text>
        </View>

        <View style={styles.logoSection}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.activeBox}>
        <Text style={styles.CardSub2}> Insurance</Text>
        
        </View>
       
        </View>

      
      </View>

      {/* Second Card (behind, partially visible) */}
      <View style={styles.backCard}>
        <View style={styles.PolicyHeader}>
          <View>
            <Text style={styles.CardTitle}>Member Name</Text>
            <Text style={styles.CardSub}>AFRIKABAL</Text>
          </View>
        </View>
      </View>

      {/* Button to view all cards */}
      <TouchableOpacity style={styles.viewAllButton} onPress={() => navigation.navigate('allcards')}>
        <Text style={styles.viewAllButtonText}>View All Cards</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    
    
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    marginBottom: 40,
    color: Colors.SECONDARY,
    paddingHorizontal: 10,
  },
  frontCard: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
    padding: 20,
    zIndex: 2, // Make this card appear on top
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  backCard: {
    backgroundColor: '#FD8A8A',
    borderRadius: 10,
    position: 'absolute',
    top: 40, // Position behind the front card
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    width: '97%',
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  PolicyHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CardTitle: {
    fontFamily: 'Poppins',
    color: '#FFF',
    fontSize: 14,
    marginTop: 10,
  },
  CardSub: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.WHITE,
  },
  CardSub2: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.PRIMARY,
  },
  PolicyDetails: {
    marginTop: 10,
  },
  activeBox: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
   
   
  },
  activeText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  logo: {
    width: screenWidth * 0.3,
    height: screenHeight * 0.1,
    resizeMode: 'contain',
  },
  verifyButton: {
    backgroundColor: Colors.PRIMARY, // Primary color for the button
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginTop: 20,
    alignSelf: 'flex-start', // Align button to the left
    flexDirection: 'row',
    gap: 10,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  viewAllButton: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 50,
    alignSelf: 'center',
    zIndex: 3,  // Add zIndex here to bring the button above other elements
  },
  viewAllButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  logoSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

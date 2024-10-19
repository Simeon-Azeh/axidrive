import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import Colors from '../../../assets/Utils/Colors';
import Logo from '../../../assets/Images/axklogo.png';
import UIImg from '../../../assets/Images/UI1.png';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function CardsDisplay() {
  return (
    <View style={styles.container}>
      {/* Active Cards Section */}
      <Text style={styles.sectionTitle}>Active Cards</Text>
         {/* Second Active Card */}
         <View style={styles.frontCard2}>
        <Image source={UIImg} style={styles.backgroundImage} />
        <View style={styles.PolicyHeader}>
          <View>
            <Text style={styles.CardTitle}>Member Name</Text>
            <Text style={styles.CardSub}>John Doe</Text>
          </View>
          <View>
            <Text style={styles.CardTitle}>Member ID</Text>
            <Text style={styles.CardSub}>04D54H24</Text>
          </View>
        </View>

        <View style={styles.PolicyDetails}>
          <Text style={styles.CardSub}>Employer: AFRIKABAL</Text>
          <Text style={styles.CardSub}>Exp: 12/2026</Text>
        </View>

        <View style={styles.logoSection}>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.activeBox}>
            <Text style={styles.CardSub2}> Insurance</Text>
          </View>
        </View>
      </View>

      {/* First Active Card */}
      <View style={styles.frontCard1}>
        <Image source={UIImg} style={styles.backgroundImage} />
        <View style={styles.PolicyHeader}>
          <View>
            <Text style={styles.CardTitle}>Member Name</Text>
            <Text style={styles.CardSub}>Jane Smith</Text>
          </View>
          <View>
            <Text style={styles.CardTitle}>Member ID</Text>
            <Text style={styles.CardSub}>03D54H23</Text>
          </View>
        </View>

        <View style={styles.PolicyDetails}>
          <Text style={styles.CardSub}>Employer: AFRIKABAL</Text>
          <Text style={styles.CardSub}>Exp: 11/2025</Text>
        </View>

        <View style={styles.logoSection}>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.activeBox}>
            <Text style={styles.CardSub2}> ProActiv</Text>
          </View>
        </View>
      </View>

   

      {/* Inactive Cards Section */}
      <Text style={styles.sectionTitle}>Inactive Cards</Text>
      <View style={styles.inactiveCard}>
        <Ionicons name="alert-circle-outline" size={24} color={Colors.SECONDARY} />
        <Text style={styles.inactiveText}>No inactive cards on this account</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    marginVertical: 20,
    color: Colors.SECONDARY,
    paddingHorizontal: 10,
  },
  frontCard1: {
    backgroundColor: '#FD8A8A', // Blue color for the first active card
    borderRadius: 10,
    padding: 20,
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    position: 'relative',
    marginBottom: 20,
  },
  frontCard2: {
    backgroundColor: Colors.PRIMARY, // Light blue color for the second active card
    borderRadius: 10,
    padding: 20,
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    position: 'relative',
    marginBottom: 20,
  },
  inactiveCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFD3B6', // Soft orange color for inactive section
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
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
  logo: {
    width: screenWidth * 0.3,
    height: screenHeight * 0.1,
    resizeMode: 'contain',
  },
  logoSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backgroundImage: {
    width: screenWidth * 1.2,
    height: screenHeight * 0.4,
    position: 'absolute',
    top: 100,
    right: 0,
    opacity: 0.1,
  },
  inactiveText: {
    fontSize: 16,
    color: Colors.SECONDARY,
    marginLeft: 10,
    fontFamily: 'Poppins'
  },
});

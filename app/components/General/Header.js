import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../../assets/Utils/Colors';
import CoinIcon from '../../../assets/Images/coin.png'; // Add your coin icon here

const { width: screenWidth } = Dimensions.get('window');

export default function Header() {
  const navigation = useNavigation();
  const totalCoins = 26869; // Example coin count

  return (
    <View style={styles.headerContainer}>
      {/* Menu Button */}
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={30} color={Colors.SECONDARY} />
      </TouchableOpacity>

      {/* Spacer to push the coin section to the right */}
      <View style={{ flex: 1 }} />

      {/* Coin Container */}
      <View style={styles.coinContainer}>
        <Image source={CoinIcon} style={styles.coinIcon} />
        <Text style={styles.coinText}>{totalCoins}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1, 
    padding: 5,
    borderRadius: 20, 
    borderColor: Colors.GRAY

  },
  coinIcon: {
    width: 24, // Set your icon size here
    height: 24,
    marginRight: 5,
  },
  coinText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.PRIMARY,
  },
});

import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

export default function TwoCards() {
  const handleCardPress = (cardType) => {
    console.log(`${cardType} card clicked!`);
    // You can navigate to different screens or perform actions based on the cardType
  };

  return (
    <View style={styles.container}>
      {/* Health and Wellness Card */}
      <TouchableOpacity style={styles.cardWrapper} onPress={() => handleCardPress('Health and Wellness')}>
        <ImageBackground
          source={require('../../../assets/Images/health_wellness.png')} // Replace with your image path
          style={styles.card}
          imageStyle={styles.cardImage}
        >
          <View style={styles.labelContainer}>
            <Text style={styles.cardLabel}>Health and Wellness</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      {/* Health Insurance Card */}
      <TouchableOpacity style={styles.cardWrapper} onPress={() => handleCardPress('Health Insurance')}>
        <ImageBackground
          source={require('../../../assets/Images/health_insurance.png')} // Replace with your image path
          style={styles.card}
          imageStyle={styles.cardImage}
        >
          <View style={styles.labelContainer}>
            <Text style={styles.cardLabel}>Health Insurance</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  cardWrapper: {
    width: width * 0.45, // Responsive width for each card
  },
  card: {
    height: 200, // Height for the cards
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-start', // Align label at the top
    alignItems: 'center',
  },
  cardImage: {
    borderRadius: 10,
  },
  labelContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background for the label
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  cardLabel: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Poppins-Medium'
  },
});

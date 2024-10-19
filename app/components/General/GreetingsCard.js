import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import Colors from '../../../assets/Utils/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';

const { width: screenWidth } = Dimensions.get('window');

export default function GreetingCard() {
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Good morning,';
    } else if (currentHour < 18) {
      return 'Good afternoon,';
    } else {
      return 'Good evening,';
    }
  };

  const handleIconPress = () => {
    // Handle the click event for the icon here
    alert('Info icon clicked!');
  };

  return (
    <View style={styles.container}>
      {/* Greeting Text */}
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>{getGreeting()}</Text>
        <Text style={styles.nameText}> Brian!</Text>
      </View>

      {/* Clickable Info Icon */}
      <TouchableOpacity onPress={handleIconPress} style={styles.iconContainer}>
        <AntDesign name="infocirlceo" size={18} color={Colors.BLACK} />
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensures space between text and icon
    width: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Allows text container to take up the available space
  },
  greetingText: {
    fontFamily: 'Poppins-Medium',
    fontSize: screenWidth * 0.05,
    color: Colors.SECONDARY,
  },
  nameText: {
    fontFamily: 'Poppins-Medium',
    fontSize: screenWidth * 0.05,
    color: Colors.PRIMARY,
  },
  iconContainer: {
    padding: 5, // Adds padding around the icon for better touch experience
  },
};

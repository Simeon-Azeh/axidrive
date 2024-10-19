import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome'; // Importing icons from react-native-vector-icons
import Colors from '../../../assets/Utils/Colors';

const { width } = Dimensions.get('window'); // Get screen width for responsiveness

export default function QuickActions() {
  const navigation = useNavigation(); // Hook to get navigation prop
  return (
    <View style={styles.container}>
      {/* Find a Facility */}
      <TouchableOpacity style={styles.actionItem}   onPress={() => navigation.navigate('Facilities')}>
        <View style={[styles.iconContainer, { backgroundColor: Colors.PRIMARY }]}>
        <FontAwesome name="hospital-o" size={28} color="white" />
        </View>
        <Text style={styles.actionText}>Find a Facility</Text>
      </TouchableOpacity>

      {/* Book Therapy */}
      <TouchableOpacity style={styles.actionItem}  onPress={() => navigation.navigate('Records')}>
        <View style={[styles.iconContainer, { backgroundColor: Colors.PRIMARY  }]}>
        <Ionicons name="book-outline" size={32} color="#fff" />
        </View>
        <Text style={styles.actionText}>View Records</Text>
      </TouchableOpacity>

      {/* Check Benefits */}
      <TouchableOpacity style={styles.actionItem}  onPress={() => navigation.navigate('Benefits')}>
        <View style={[styles.iconContainer, { backgroundColor: Colors.PRIMARY  }]}>
          <FontAwesome5 name="file-alt" size={28} color="#fff" />
        </View>
        <Text style={styles.actionText}>Check Benefits</Text>
      </TouchableOpacity>

      {/* Get Support */}
      <TouchableOpacity style={styles.actionItem} onPress={() => navigation.navigate('Support')}>
        <View style={[styles.iconContainer, { backgroundColor: Colors.PRIMARY }]}>
        <MaterialIcons name="support-agent" size={32} color="white" />
        </View>
        <Text style={styles.actionText}>Get Support</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width * 0.9, // Adjust width based on screen size for responsiveness
    alignSelf: 'center',
    marginTop: 5,
  },
  actionItem: {
    alignItems: 'center',
  },
  iconContainer: {
    width: width * 0.15, // Dynamic width for the circle based on screen size
    height: width * 0.15, // Dynamic height for the circle
    borderRadius: (width * 0.18) / 2, // Make the container circular
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    marginTop: 10,
    fontSize: 14,
    color: Colors.SECONDARY,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium'
  },
});

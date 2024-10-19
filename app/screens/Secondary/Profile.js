import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Colors from '../../../assets/Utils/Colors';
import Cards from '../../components/Insurance/Cards';

export default function Profile() {
  const [editing, setEditing] = useState(false);
  
  // Sample user profile data
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+123 456 7890',
    address: '123 Main St, City, Country',
    dateOfBirth: '01/01/1980',
    policyNumber: 'AXK-12345678',
    subscriptionType: 'Premium',
    subscriptionStatus: 'Active',
  });

  // Function to handle the change of input fields
  const handleChange = (key, value) => {
    setProfileData({ ...profileData, [key]: value });
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setEditing(!editing);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Image Placeholder */}
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/100' }} // Placeholder image URL
          style={styles.profileImage}
        />
      </View>

   

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={[styles.input, !editing && styles.readOnlyInput]}
          value={profileData.name}
          editable={editing}
          onChangeText={(text) => handleChange('name', text)}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[styles.input, !editing && styles.readOnlyInput]}
          value={profileData.email}
          editable={editing}
          onChangeText={(text) => handleChange('email', text)}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={[styles.input, !editing && styles.readOnlyInput]}
          value={profileData.phone}
          editable={editing}
          onChangeText={(text) => handleChange('phone', text)}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={[styles.input, !editing && styles.readOnlyInput]}
          value={profileData.address}
          editable={editing}
          onChangeText={(text) => handleChange('address', text)}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Date of Birth</Text>
        <TextInput
          style={[styles.input, !editing && styles.readOnlyInput]}
          value={profileData.dateOfBirth}
          editable={editing}
          onChangeText={(text) => handleChange('dateOfBirth', text)}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Policy Number</Text>
        <TextInput
          style={[styles.input, !editing && styles.readOnlyInput]}
          value={profileData.policyNumber}
          editable={false} // Policy number is usually non-editable
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Subscription Type</Text>
        <TextInput
          style={[styles.input, !editing && styles.readOnlyInput]}
          value={profileData.subscriptionType}
          editable={false} // Subscription type is usually non-editable
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Subscription Status</Text>
        <TextInput
          style={[styles.input, !editing && styles.readOnlyInput]}
          value={profileData.subscriptionStatus}
          editable={false} // Subscription status is usually non-editable
        />
      </View>

      <TouchableOpacity style={styles.editButton} onPress={toggleEdit}>
        <Text style={styles.editButtonText}>{editing ? 'Save' : 'Edit Profile'}</Text>
      </TouchableOpacity>
      <View>
        <Cards />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Makes the image circular
    borderWidth: 2,
    borderColor: Colors.LIGHT_GRAY,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: Colors.PRIMARY,
    marginBottom: 20,
    textAlign: 'center',
  },
  fieldContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: Colors.DARK_GRAY,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    fontFamily: 'Poppins',
    color: Colors.SECONDARY,
  },
  readOnlyInput: {
    backgroundColor: Colors.LIGHTER_GRAY,
  },
  editButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});

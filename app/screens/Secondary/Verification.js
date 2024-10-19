import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';  // For document/image upload
import Colors from '../../../assets/Utils/Colors';  // Assuming you have a Colors file

const { width } = Dimensions.get('window'); // Get screen width for responsiveness

export default function VerificationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [idType, setIdType] = useState('');
  const [document, setDocument] = useState(null); // For storing the uploaded document image

  // Handle the image picker to upload an ID document
  const pickDocument = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setDocument(result.uri);
    }
  };

  const handleSubmit = () => {
    // Handle the submission logic (validation, API call, etc.)
    console.log({
      name,
      email,
      phoneNumber,
      idNumber,
      idType,
      document,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete Your Onboarding</Text>

      {/* Full Name */}
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />

      {/* Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Phone Number */}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />

      {/* ID Type (Dropdown alternative) */}
      <TextInput
        style={styles.input}
        placeholder="ID Type (e.g., National ID, Passport)"
        value={idType}
        onChangeText={setIdType}
      />

      {/* ID Number */}
      <TextInput
        style={styles.input}
        placeholder="ID Number"
        value={idNumber}
        onChangeText={setIdNumber}
      />

      {/* Upload ID Document */}
      <TouchableOpacity style={styles.uploadButton} onPress={pickDocument}>
        <Text style={styles.uploadButtonText}>Upload ID Document</Text>
      </TouchableOpacity>

      {/* Display Uploaded Document */}
      {document && <Image source={{ uri: document }} style={styles.documentPreview} />}

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: Colors.PRIMARY,  // Primary theme color
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
  input: {
    width: width * 0.9,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    fontFamily: 'Poppins',
  },
  uploadButton: {
    backgroundColor: Colors.PRIMARY,
    width: width * 0.9,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  documentPreview: {
    width: width * 0.8,
    height: width * 0.5,
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
  },
  submitButton: {
    backgroundColor: Colors.PRIMARY,
    width: width * 0.9,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
});

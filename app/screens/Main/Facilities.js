import React, { useState } from 'react';
import { View, Text, Dimensions, Image, ScrollView, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../../components/General/Header';
import Colors from '../../../assets/Utils/Colors';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Facilities = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'pharmacies', title: 'Pharmacies' },
    { key: 'hospitals', title: 'Hospitals' },
    { key: 'clinics', title: 'Clinics' },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState(null);

  const FacilityCard = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedFacility(item);
        setModalVisible(true);
      }}
      style={styles.card}>
      <Image
        source={{ uri: item.image }}
        style={styles.cardImage}
      />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardLocation}>Location: {item.location}</Text>
        <Text style={styles.cardCategory}>Category: {item.category}</Text>
        <Text style={styles.cardHours}>Working Hours: {item.hours}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderTabContent = (data) => (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {data.map((item, index) => (
        <FacilityCard key={index} item={item} />
      ))}
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.viewMoreButton}>
          <Text style={styles.buttonText}>View More</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.findLocationButton}>
          <Text style={styles.findLocationText}>Find Closest to Location</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  const PharmaciesRoute = () => renderTabContent([
    {
      title: 'Pharmacy A',
      image: 'https://via.placeholder.com/100',
      category: 'Pharmacy',
      location: 'Downtown, Main Street',
      hours: '8:00 AM - 8:00 PM',
      services: ['Prescription refill', 'OTC meds', 'Health advice']
    },
    {
      title: 'Pharmacy B',
      image: 'https://via.placeholder.com/100',
      category: 'Pharmacy',
      location: 'East Side, Elm Street',
      hours: '9:00 AM - 10:00 PM',
      services: ['Prescription refill', 'Home delivery', 'Vaccinations']
    },
  ]);

  const HospitalsRoute = () => renderTabContent([
    {
      title: 'Hospital A',
      image: 'https://via.placeholder.com/100',
      category: 'Hospital',
      location: 'West End, Pine Avenue',
      hours: '24/7',
      services: ['Emergency care', 'Surgery', 'Pediatrics'],
      acceptance: 'Inpatients'
    },
    {
      title: 'Hospital B',
      image: 'https://via.placeholder.com/100',
      category: 'Hospital',
      location: 'North City, Oak Street',
      hours: '8:00 AM - 5:00 PM',
      services: ['Check-ups', 'Emergency care'],
      acceptance: 'Both'
    },
  ]);

  const ClinicsRoute = () => renderTabContent([
    {
      title: 'Clinic A',
      image: 'https://via.placeholder.com/100',
      category: 'Clinic',
      location: 'South Park, Maple Avenue',
      hours: '9:00 AM - 6:00 PM',
      services: ['General checkups', 'Lab tests', 'Consultations']
    },
    {
      title: 'Clinic B',
      image: 'https://via.placeholder.com/100',
      category: 'Clinic',
      location: 'East Bay, Cedar Street',
      hours: '8:00 AM - 4:00 PM',
      services: ['Vaccinations', 'Check-ups', 'Lab tests']
    },
  ]);

  const renderScene = SceneMap({
    pharmacies: PharmaciesRoute,
    hospitals: HospitalsRoute,
    clinics: ClinicsRoute,
  });

  const FacilityModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{selectedFacility?.title}</Text>
          <Text style={styles.modalSubtitle}>Location: {selectedFacility?.location}</Text>
          <Text style={styles.modalSubtitle}>Working Hours: {selectedFacility?.hours}</Text>
          <Text style={styles.modalSubtitle}>Services:</Text>
          <View style={styles.servicesList}>
            {selectedFacility?.services.map((service, index) => (
              <Text key={index} style={styles.serviceItem}>- {service}</Text>
            ))}
          </View>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.modalButton} onPress={() => alert('Showing on Map')}>
              <Text style={styles.modalButtonText}>Show on Map</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => alert('Booking Appointment')}>
              <Text style={styles.modalButtonText}> Call</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: screenWidth }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: Colors.PRIMARY }}
            style={{ backgroundColor: Colors.WHITE }}
            labelStyle={{ color: Colors.PRIMARY, fontFamily: 'Poppins-Medium' }}
          />
        )}
      />
      {modalVisible && <FacilityModal />}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
    width: screenWidth * 0.9,
    height: 120,
    marginBottom: 20,
  },
  cardImage: {
    width: screenWidth * 0.12,
    height: screenWidth * 0.12,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.WHITE,
  },
  cardInfo: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: Colors.SECONDARY,
  },
  cardLocation: {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: Colors.SECONDARY,
    marginTop: 5,
  },
  cardCategory: {
    fontSize: 14,
    color: Colors.DARK_GRAY,
    marginTop: 5,
    fontFamily: 'Poppins',
  },
  cardHours: {
    fontSize: 14,
    color: Colors.LIGHT_GRAY,
    marginTop: 5,
  },
  
  scrollContent: {
    padding: 20,
  },
  buttonGroup: {
    marginVertical: 20,
  },
  viewMoreButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  findLocationButton: {
    borderWidth: 1,
    borderColor: '#333',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  findLocationText: {
    color: Colors.SECONDARY,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: screenWidth * 0.9,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    marginBottom: 10,
    color: Colors.PRIMARY,
  },
  modalSubtitle: {
    fontSize: 16,
    fontFamily: 'Poppins',
    color: Colors.DARK_GRAY,
    marginBottom: 10,
  },
  servicesList: {
    marginBottom: 20,
  },
  serviceItem: {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: Colors.SECONDARY,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 10,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: Colors.WHITE,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  closeButton: {
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: Colors.DARK_GRAY,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
});

export default Facilities;

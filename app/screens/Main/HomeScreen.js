import React from 'react';
import { View, Text, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons or any other icon set you prefer

import Header from '../../components/General/Header';
import Colors from '../../../assets/Utils/Colors';

import { useNavigation } from '@react-navigation/native';
import GreetingCard from '../../components/General/GreetingsCard';
import QuickActions from '../../components/Home/QuickActions';
import Alert from '../../components/Home/Alert';
import { BarChart } from 'react-native-chart-kit';
import BarChartComponent from '../../components/Home/BarChart';
import TwoCards from '../../components/Home/TwoCards';
import BlogSlider from '../../components/Home/BlogSlider';


export default function HomeScreen() {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

  const navigation = useNavigation();

  const sliderWidth = screenWidth;
  const itemWidth = screenWidth * 0.8; // Adjust item width as needed

  const renderItem = ({ item }) => {
    return (
      <View style={{
        backgroundColor: Colors.PRIMARY,
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: 'row',
        padding: 10,
        width: itemWidth,
        height: 120,
        marginHorizontal: screenWidth * -0.06, // Spacing between items
        paddingHorizontal: 20,
        marginBottom: 20,
      }}>
        <Image
          source={{ uri: item.image }}
          style={{
            width: screenWidth * 0.15,
            height: screenWidth * 0.15,
            borderRadius: 50,
           marginTop: screenHeight * 0.015,
            borderWidth: 1,
            borderColor: Colors.WHITE,
          }}
        />
        <View style={{
          flex: 1,
          marginLeft: 10,
          justifyContent: 'center',
        }}>
        
          <Text style={{
            fontSize: 16,
            fontFamily: 'Poppins-Medium',
            color: Colors.WHITE,
          }}>{item.title}</Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 5,
          }}>
            <MaterialIcons
              name="category" // Replace with the appropriate icon name
              size={14}
              color={Colors.LIGHT_GRAY}
              style={{ marginRight: 5 }}
            />
            <Text style={{
              fontSize: 14,
              color: Colors.LIGHT_GRAY,
            }}>{item.category}</Text>
          </View>
        </View>
      
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView>
      <View style={{ paddingHorizontal: 25, marginVertical: 15 }}>
          <GreetingCard />
        </View>
      
      </ScrollView>
    </View>
  );
}

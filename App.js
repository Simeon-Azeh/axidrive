import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import TabNavigations from './app/navigations/TabNavigations';
import Colors from './assets/Utils/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './app/components/General/CustomDrawerContent';
import LoadingScreen from './app/components/landing/Loading';
import WelcomeScreen from './app/screens/landing/Welcome';
import RegisterScreen from './app/screens/Authentication/Register';
import LoginScreen from './app/screens/Authentication/Login';
import ForgotPassword from './app/screens/Authentication/ForgotPassword';
import Notifications from './app/screens/Secondary/Notifications';
import CustomHeaderTitle from './app/components/General/CustomHeaderTitle';
import Profile from './app/screens/Secondary/Profile';
import Benefits from './app/screens/Secondary/Benefits';
import Verification from './app/screens/Secondary/Verification';
import AllCards from './app/screens/Secondary/AllCards';
import ClaimForm from './app/screens/Secondary/ClaimForm';
import Support from './app/screens/Secondary/Support';
import FAQScreen from './app/screens/Secondary/FAQs';
import ContactScreen from './app/screens/Secondary/Contact';
import Settings from './app/screens/Secondary/Settings';
import Terms from './app/screens/Secondary/Terms';
import BlogDetail from './app/screens/Secondary/BlogDetails';
import ContentPage from './app/screens/Secondary/Content';
import SignupPage from './app/screens/Authentication/SignUp';
import VerifyScreen from './app/screens/Authentication/Verify';
import Onboarding from './app/screens/Authentication/Onboarding';
import MoreInfo from './app/screens/Authentication/MoreInfo';
import AcceptTC from './app/screens/Authentication/AcceptTC';
import PaymentMethod from './app/screens/Authentication/PaymentMethod';
import CardPayment from './app/components/Payment/CardPayment';
import BitcoinPayment from './app/components/Payment/BitcoinPayment';
import MpesaPayment from './app/components/Payment/MpesaPayment';
import PayPalPayment from './app/components/Payment/PayPalPayment';
import PushNotification from './app/screens/Authentication/PushNotification';
import AxiWelcome from './app/screens/Authentication/AxiWelcome';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer Navigator component
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#fff',
          width: screenWidth * 0.7,
          padding: 10,
        },
        drawerActiveTintColor: '#9835ff', // Active item color
        drawerInactiveTintColor: Colors.SECONDARY, // Inactive item color
        drawerLabelStyle: {
          fontFamily: 'Poppins-Medium',
          fontSize: 18,
        },
        drawerPressColor: Colors.PRIMARY, // Press color
        drawerItemStyle: {
          borderRadius: 8,
        },
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={TabNavigations}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />

<Drawer.Screen
        name="Support"
        component={Support}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="support-agent" size={size} color={color} />
          ),
        }}
      />
       <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="user-cog" size={size} color={color} />
          ),
        }}
      />

<Drawer.Screen
        name="Terms"
        component={Terms}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="user-cog" size={size} color={color} />
          ),
        }}
      />

<Drawer.Screen
        name="content"
        component={ContentPage}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="user-cog" size={size} color={color} />
          ),
        }}
      />
     
     
     
    </Drawer.Navigator>
  );
}


export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupPage} options={{ headerShown: false }} />
        <Stack.Screen name="VerifyScreen" component={VerifyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="MoreInfo" component={MoreInfo} options={{ headerShown: false }} />
        <Stack.Screen name="acceptTC" component={AcceptTC} options={{ headerShown: false }} />
        <Stack.Screen name="CardPayment" component={CardPayment} options={{ headerShown: false }} />
        <Stack.Screen name="paymentmethod" component={PaymentMethod} options={{ headerShown: false }} />
        <Stack.Screen name="BitcoinPayment" component={BitcoinPayment} options={{ headerShown: false }} />
        <Stack.Screen name="MpesaPayment" component={MpesaPayment} options={{ headerShown: false }} />
        <Stack.Screen name="PaypalPayment" component={PayPalPayment} options={{ headerShown: false }} />
        <Stack.Screen name="PushNotification" component={PushNotification} options={{ headerShown: false }} />
        <Stack.Screen name="axiwelcome" component={AxiWelcome} options={{ headerShown: false }} />


        <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Notifications" component={Notifications} options={{ title: 'Notifications',
          headerTitle: () => <CustomHeaderTitle title="Notifications" />
         }} />
           <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile',
               headerTitle: () => <CustomHeaderTitle title="Profile" />
             }} />
              <Stack.Screen name="Benefits" component={Benefits} options={{ title: 'Benefits',
          headerTitle: () => <CustomHeaderTitle title="Benefits" />
         }} />
          <Stack.Screen name="verify" component={Verification} options={{ title: 'Verification',
          headerTitle: () => <CustomHeaderTitle title="Verification" />
         }} />
        <Stack.Screen name="allcards" component={AllCards} options={{ title: 'Cards',
          headerTitle: () => <CustomHeaderTitle title="Cards" />
         }} />
    
      
    <Stack.Screen name="ClaimForm" component={ClaimForm} options={{ title: 'Claim form',
  headerTitle: () => <CustomHeaderTitle title="Claim form" /> }} />

<Stack.Screen name="FAQS" component={FAQScreen} options={{ title: 'FAQ',
          headerTitle: () => <CustomHeaderTitle title="FAQ" />
         }} />

<Stack.Screen name="Contact" component={ContactScreen} options={{ title: 'Contact',
          headerTitle: () => <CustomHeaderTitle title="Contact" />
         }} />
           <Stack.Screen name="BlogDetail" component={BlogDetail} options={{ title: 'Blog Details' }} />
      </Stack.Navigator>

    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

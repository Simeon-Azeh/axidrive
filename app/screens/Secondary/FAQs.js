import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { Feather } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get('window');

const FAQScreen = () => {
  const [collapsed, setCollapsed] = useState({}); // Object to track which sections are collapsed

  const toggleExpand = (index) => {
    setCollapsed(prev => ({
      ...prev,
      [index]: !prev[index], // Toggle the specific index
    }));
  };

  const faqs = [
    {
      question: 'What is the purpose of this app?',
      answer: 'This app allows you to easily manage your health insurance, view coverage details, submit claims, and access your benefit limits and available balances.',
    },
    {
      question: 'How do I submit a claim?',
      answer: 'To submit a claim, go to the "Claims" section, fill out the required details about your treatment, and upload any necessary receipts. Our team will review your claim within 14 days.',
    },
    {
      question: 'How do I check my coverage and benefits?',
      answer: 'You can check your coverage, benefit limits, and available balance in the "Benefits" section of the app. You can also track how much of your balance has been used.',
    },
    {
      question: 'Can I update my personal information?',
      answer: 'Yes, you can update your personal details by going to the "Profile" section in the app. Make sure to save changes after updating your information.',
    },
    {
      question: 'What do I do if my claim is denied?',
      answer: 'If your claim is denied, you will receive a notification with details explaining why. You can contact our support team for further clarification or submit an appeal through the app.',
    },
    {
      question: 'What is covered under my insurance?',
      answer: 'Your insurance covers services like inpatient, outpatient, optical, and dental care, depending on your plan. You can view more details under the "Benefits" section of the app.',
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can contact customer support through the "Help & Support" section, use the Live Chat feature, or send an email to support@healthinsuranceapp.com.',
    },
    {
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the "Forgot Password" page and follow the instructions to reset it via email.',
    },
  ];
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.accordionContainer}>
          <TouchableOpacity
            style={styles.accordionHeader}
            onPress={() => toggleExpand(index)}
          >
            <Text style={styles.question}>{faq.question}</Text>
            <Feather
              name={collapsed[index] ? 'chevron-up' : 'chevron-down'}
              size={24}
              color="#333"
            />
          </TouchableOpacity>
          <Collapsible collapsed={!collapsed[index]}>
            <View style={styles.accordionContent}>
              <Text style={styles.answer}>{faq.answer}</Text>
            </View>
          </Collapsible>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: screenWidth * 0.04,
    fontFamily: 'Poppins-Medium',
    marginBottom: 20,
  },
  accordionContainer: {
    marginBottom: 20,
   
  
  },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  question: {
    fontSize: screenWidth * 0.035,
    fontFamily: 'Poppins-Medium',
    color: '#333',
  },
  accordionContent: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  answer: {
    fontSize: screenWidth * 0.03,
    fontFamily: 'Poppins',
    color: '#666',
  },
});

export default FAQScreen;

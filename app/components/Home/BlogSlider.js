import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Hook for navigation
import Colors from '../../../assets/Utils/Colors';
const { width } = Dimensions.get('window');

const blogs = [
  {
    id: 1,
    title: '10 Tips for a Healthy Lifestyle',
    image: require('../../../assets/Images/blog1.jpg'), // Replace with your image path
    date: 'Sep 10, 2024',
    author: 'John Doe',
    content: 'This is the full content of the blog post about healthy lifestyle tips...',
  },
  {
    id: 2,
    title: 'The Importance of Mental Wellness',
    image: require('../../../assets/Images/blog2.jpg'), // Replace with your image path
    date: 'Aug 25, 2024',
    author: 'Jane Smith',
    content: 'This blog post focuses on the importance of mental wellness in daily life...',
  },
  {
    id: 3,
    title: 'Health Insurance Explained',
    image: require('../../../assets/Images/blog3.png'), // Replace with your image path
    date: 'Jul 15, 2024',
    author: 'Samuel Green',
    content: 'In this post, we explain the basics of health insurance, coverage, and claims...',
  },
];

export default function BlogSlider() {
  const navigation = useNavigation(); // Hook to navigate to the detail page

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Latest Blogs</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.slider}
      >
        {blogs.map((blog) => (
          <TouchableOpacity
            key={blog.id}
            style={styles.blogCard}
            onPress={() => navigation.navigate('BlogDetail', { blog })} // Navigate to BlogDetail
          >
            <Image source={blog.image} style={styles.blogImage} />
            <View style={styles.textContainer}>
              <Text style={styles.blogTitle}>{blog.title}</Text>
              <Text style={styles.blogInfo}>{blog.date} | By {blog.author}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    marginBottom: 10,
    color: Colors.SECONDARY,
    paddingHorizontal: 20,
  },
  slider: {
    paddingRight: 20,
  },
  blogCard: {
    width: width * 0.8, // Card width is 80% of the screen width
    marginRight: 15, // Space between cards
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  blogImage: {
    width: '100%',
    height: 150,
  },
  textContainer: {
    padding: 10,
  },
  blogTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#333',
  },
  blogInfo: {
    marginTop: 5,
    fontSize: 14,
    color: '#555',
    fontFamily: 'Poppins',
  },
});

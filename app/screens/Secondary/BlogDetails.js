import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Colors from '../../../assets/Utils/Colors';

export default function BlogDetail({ route }) {
  const { blog } = route.params; // Get the blog details passed from the BlogSlider

  return (
    <ScrollView style={styles.container}>
      <Image source={blog.image} style={styles.blogImage} />
      <Text style={styles.title}>{blog.title}</Text>
      <Text style={styles.info}>{blog.date} | By {blog.author}</Text>
      <Text style={styles.content}>{blog.content}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  blogImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: Colors.PRIMARY,
    marginBottom: 10,
  },
  info: {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: '#777',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    fontFamily: 'Poppins',
    lineHeight: 24,
    color: '#333',
  },
});

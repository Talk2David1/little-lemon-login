import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>All rights reserved by little Lemon 2022</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   marginTop: 20,
    width: '100%',
    backgroundColor: '#EE996F',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 15,
    paddingVertical: 10,
    color: "#000",
  },
});

export default Footer;
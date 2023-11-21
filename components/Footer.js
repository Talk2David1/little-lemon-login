import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View>
      <Text style={styles.welcomeText}>All rights reserved by little Lemon 2022</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    welcomeText: {
        fontSize: 15,
        paddingVertical: 10,
        marginTop: 60,
        color: "#000",
        textAlign: "center",
        backgroundColor: "#EE996F",
      },
      
});
export default Footer;

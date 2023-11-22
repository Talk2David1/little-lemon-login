import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Little Lemon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 100,
    backgroundColor: '#EE996F',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 32,
    alignSelf: "stretch",
  },
  welcomeText: {
    fontSize: 35,
    color: "#000",    
  },
});

export default Header;
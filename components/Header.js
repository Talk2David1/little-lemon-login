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
    backgroundColor: '#EE996F',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    alignSelf: "stretch",
    marginTop: -20,
  },
  welcomeText: {
    fontSize: 32,
    color: "#000",    
  },
});

export default Header;
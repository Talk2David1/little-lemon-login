import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View>
    <Text style={styles.welcomeText}>Little Lemon</Text>
     </View>
  );
};

const styles = StyleSheet.create({
    welcomeText: {
        fontSize: 35,
        paddingVertical: 32,
        marginTop: -70,
        color: "#000",
        textAlign: "center",
        backgroundColor: "#EE996F",
      },
      
      
});
export default Header;

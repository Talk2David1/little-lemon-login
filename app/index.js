import React, { useState } from 'react';
import { View, TextInput, KeyboardAvoidingView, Pressable, StyleSheet, Text, SafeAreaView } from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { router } from 'expo-router'
// import {  useFonts } from 'expo-font'


const index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // fonts settings
  // const [fontsLoaded] = useFonts({
  //   'Roboto': require('./assets/fonts/Roboto-BoldItalic.ttf'),
  // });
  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <SafeAreaView  style={styles.container}>
    <Header />
    <View style={styles.page}>
      <Text style={styles.header}>Welcome to Little Lemon</Text>
      <Text style={styles.text}>Login to continue</Text>
    <KeyboardAvoidingView>             
    <TextInput
        style={styles.inputBox}
        placeholder="test@meta.com"
        value={email}
        onChangeText={setEmail}
      />
          
       <TextInput
       style={styles.inputBox}
        placeholder="......."
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <Pressable onPress={() => router.replace("/Success")}>
        <Text style={styles.btn}
        accessible={true}
        accessibilityLabel={"Login Button"}     
        >Log in</Text>
      </Pressable>
      
      </KeyboardAvoidingView> 
        <Footer />
      </View>

      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    // fontFamily: 'Roboto', 
    fontSize: 40,
    paddingVertical: 40,
    color: "#EDEFEF",
    textAlign: "center",
  },
  page: {
    justifyContent: "center",
    backgroundColor: "#333333",
    flex: 1,
  },
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    borderColor: "#EDEFEE",
    backgroundColor: "#EDEFEE",
    alignSelf: "stretch",
    height: 50,
    margin: 18,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    borderRadius: 9,
  },
  btn: {
    textAlign: "center",
    fontSize: 30,
    backgroundColor: "#EE996F",
    borderColor: "#EE996F",
    borderRadius: 40,
    alignSelf: "stretch",
    marginHorizontal: 90,
    marginBottom: 10,
    padding: 5,
    borderWidth: 5,
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    color: "#F7F4F4"
  }
 
});

export default index;
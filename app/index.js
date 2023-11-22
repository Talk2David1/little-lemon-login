import React, { useState } from 'react';
import { View, Dimensions, TextInput, KeyboardAvoidingView, Pressable, StyleSheet, Text, SafeAreaView } from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { router } from 'expo-router'


const index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView  style={styles.container}>
    <View style={styles.page}>
    <Header />
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

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 30,
    paddingVertical: 10,
    marginBottom: 25,
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
    margin: 10,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    borderRadius: 9,
  },
  btn: {
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "#EE996F",
    borderColor: "#EE996F",
    borderRadius: 40,
    alignSelf: "stretch",
    marginHorizontal: 95,
    marginBottom: 25,
    padding: 3,
    borderWidth: 4,
  },
 text: {
    fontSize: Math.min(width, height) * 0.06,
    color: "#F7F4F4",
    textAlign: "center",
  }, 
});

export default index;
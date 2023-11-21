import React, { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet, Text, SafeAreaView } from 'react-native';
import Constants from "expo-constants";
import Footer from './components/Footer';
// import Footer from ../components/Footer.js;

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <SafeAreaView  style={styles.container}>
    <View style={styles.page}>
    <Text style={styles.welcomeText}>Little Lemon</Text>
    
    
    <Text style={styles.header}>Welcome to Little Lemon</Text>
     
    <Text style={styles.text}>Login to continue</Text>          
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
      <Pressable onPress={handleLogin}>
        <Text style={styles.btn}
        >Log in</Text>
      </Pressable>
        <Text style={styles.text}> {email}</Text>
      <Text style={styles.text}> {password}</Text>

      <Footer />
      </View>

      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
  header: {
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
  welcomeText: {
    fontSize: 35,
    paddingVertical: 20,
    marginTop: -50,
    color: "#000",
    textAlign: "center",
    backgroundColor: "#EE996F",
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
  btnDisabled: {
    backgroundColor: "#f1f4f7",
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    color: "#F7F4F4"
  }
 
});

export default LoginScreen;
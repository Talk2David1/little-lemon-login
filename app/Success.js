import {StatusBar, View, StyleSheet, Text, SafeAreaView } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Success = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.page}>
    <StatusBar backgroundColor="#EE996F" barStyle="light-content" />
    <Header />
    <View style={styles.page}>
        <Text style={styles.header}>Welcome to Little Lemon</Text>
        <Text style={styles.text}>You are logged in!</Text>
        </View>
        <Footer />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:StatusBar.currentHeight,
  },
  header: {
    fontSize: 40,
    paddingVertical: 10,
    color: "#EDEFEF",
    textAlign: "center",
  },
  page: {
    flex: 1,
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    color: "#F7F4F4",
  },
});

export default Success;

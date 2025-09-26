import React from "react";
import Exercise03 from "exercise03";
import {StyleSheet, Text, View, Image, ScrollView} from "react-native";


export default function App() {
  return <Exercise03 /> (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Foto Profil */}
      <Image source={require("./asset/didi.jpg")} style={styles.profileImage} />

      {/* Judul */}
      <Text style={styles.title}>Exercise Data Diri</Text>

      {/* Nama */}
      <Text style={styles.name}>Swindry Kowimbin</Text>

      {/* Tentang Saya */}
      <Text style={styles.subtitle}>Tentang Saya</Text>
      <Text style={styles.content}>Tanggal Lahir: 12 September 2001</Text>
      <Text style={styles.content}>Hobi: Membaca, Menulis, dan Coding</Text>
      <Text style={styles.content}>Alamat: Manokwari, Papua Barat</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    backgroundColor: "silver",
    color: "red",
    fontSize: 30,
    textAlign: "center",
    marginVertical: 20,
    fontWeight: "600",
    padding: 10,
    borderRadius: 10,
    width: "100%",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 15,
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
    marginBottom: 5,
    color: "#555",
  },
});


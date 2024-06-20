import React from 'react';
import { Text, Image, View, StyleSheet, Button, ImageBackground } from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZqnWSvPUf0PnXOgbeH0RQjFmBLd6O2d05oQ&s'
      }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJhJp6FMAaABXcKJoj_idM83IJBNUzHUIiMbA1vZKBfNsgWGjU2MRGX_2233X8ZtfcIA&usqp=CAU'
          }}
          style={styles.logo}
        />
        <Text style={styles.title}>Selamat Datang di JewerlyV</Text>
        <Text style={styles.subtitle}>Selamat Berbelanja dan Nikmati Harimu</Text>
        <View style={styles.buttonContainer}>
          <Button title="Lihat Produk" onPress={() => console.log("Button pressed")} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Warna transparan untuk membuat teks lebih mudah dibaca
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75, 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white', 
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white', 
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
});

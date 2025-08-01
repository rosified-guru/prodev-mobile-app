import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('@/assets/images/background-image.png')}
          style={styles.background}
          resizeMode="cover"
        >
          {/* Company Logo */}
          <View style={styles.companyLogo}>
            <Image source={require('@/assets/images/Logo.png')} />
          </View>

          {/* Title & Texts */}
          <View style={styles.textGroup}>
            <Text style={styles.textLarge}>Find your favorite place here</Text>
            <Text style={styles.textSmall}>The best prices for over 2</Text>
            <Text style={styles.textSmall}>million properties worldwide</Text>
          </View>

          {/* Button Group */}
          <View style={styles.buttonGroup}>
            <Link href="/join" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={{ ...styles.textSmall, color: 'black' }}>Join here</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/Sign" asChild>
              <TouchableOpacity style={styles.transparentButton}>
                <Text style={styles.textSmall}>Sign In</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Navigation Prompt */}
          <View style={{ alignItems: 'center', paddingVertical: 20 }}>
            <Text style={{ color: 'white' }}>Continue to home</Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: Dimensions.get('window').height,
  },
  companyLogo: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
    marginBottom: 50,
  },
  textGroup: {
    alignItems: 'center',
  },
  textLarge: {
    color: 'white',
    fontWeight: '800',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 12,
  },
  textSmall: {
    color: 'white',
    fontSize: 18,
    fontWeight: '200',
    textAlign: 'center',
  },
  transparentButton: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: 'center',
    fontSize: 20,
    flex: 1,
  },
  button: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: 'center',
    fontSize: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 20,
    marginTop: 30,
  },
});

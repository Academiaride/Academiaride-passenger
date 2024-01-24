import React from 'react';
import { ScrollView,View, Text, Image, StyleSheet, TextInput, TouchableOpacity,Linking } from 'react-native';
import Otp from './src';

const App = () => {
  const handleImagePress_01 = () => {
    const url = 'https://www.apple.com'; 
    Linking.openURL(url);
  };
  const handleImagePress_02 = () => {
    const url = 'https://www.google.com';
    Linking.openURL(url);
  };
  const handleImagePress_03 = () => {
    const url = 'https://www.meta.com'; 
    Linking.openURL(url);
  };
  const handleImagePress_04 = () => {
    const url = 'https://www.outlook.com';
    Linking.openURL(url);
  };
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.firstHalf}>

      <Text style={styles.title}>{'\n'}Academia </Text>
      <Text style={styles.title_01}>Ride</Text>
        <Image
          source={require('./assets/bg_removed_car.jpg')}
          style={styles.centeredImage}
          resizeMode="contain"
        />
        
      </View>

      <View style={styles.secondHalf}>
        
        <View style={styles.loginContainer}>
          <Otp/>
        
        </View>

        <View style={styles.anotherContainer}>

        <View style={styles.footer}>
          <Text style={styles.signUpText}>Or {'\n'} {'\n'}Sign up with</Text>
          
          <View style={styles.footer}>
  <View style={styles.signupOptions}>
    <TouchableOpacity style={styles.signupButton} onPress={handleImagePress_01}>
      <Image
        source={require('./assets/apple.jpeg')}
        style={styles.signupButtonImage}
      />
    </TouchableOpacity>
    <TouchableOpacity style={styles.signupButton} onPress={handleImagePress_02}>
      <Image
        source={require('./assets/google.png')}
        style={styles.signupButtonImage}
      />
    </TouchableOpacity>
    <TouchableOpacity style={styles.signupButton} onPress={handleImagePress_03}>
      <Image
        source={require('./assets/meta.jpg')}
        style={styles.signupButtonImage}
      />
    </TouchableOpacity>
    <TouchableOpacity style={styles.signupButton} onPress={handleImagePress_04}>
      <Image
        source={require('./assets/outlook.jpeg')}
        style={styles.signupButtonImage}
      />
    </TouchableOpacity>
  </View>
  </View>
</View>

        </View>
      </View>
      </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  anotherContainer:{
    flex:1,
    backgroundColor: '#22272B',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  firstHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredImage: {
    width: 350,
    height: 400,
  },
  secondHalf: {
    flex: 1,
    padding: 20,
    marginTop: 10,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  loginContainer: {
    width: '100%', 
    marginTop: 20,
  },
  loginTitle: {
    color: '#FFBC07',
    fontSize: 18,
    fontWeight: 'bold',
    // textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    color: '#fff',
    paddingLeft: 10,
    marginTop: 10,
  },
  
  loginButton: {
    backgroundColor: '#FFBC07',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  signUpText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  signupOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  signupButton: {
    borderTopStartRadius: 5,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  signupButtonImage: {
    width: 48, 
    height: 48,
    backgroundColor: '#FFBC07',
    color: '#FFBC07', 
  },
  title_01:{
    color: '#FFBC07',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default App;

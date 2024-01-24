import { View, Text, TouchableOpacity,TextInput, StyleSheet,Alert } from 'react-native'
import React, {useRef,useState} from 'react'
import {FirebaseRecaptchaVerifierModal} from'expo-firebase-recaptcha';
import { firebaseConfig } from '../config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/auth';


const Otp = () => {
  const [phoneNumber,setPhoneNumber]=useState('')
  const [code,setCode]=useState('');
  const[verificationId,setVerificationId]=useState(null);
  const recaptchaVerifier=useRef(null);

  const sendVerification=()=>{
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
        .verifyPhoneNumber(phoneNumber,recaptchaVerifier.current)
        .then(setVerificationId);
        setPhoneNumber('');
  };

  const confirmCode=()=>{
    const credential=firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        code
    );
        firebase.auth().signInWithCredential(credential) 
        .then(()=>{
            setCode('');
        })
        .catch((error)=>{
            alert(error);
        })
        Alert.alert(
            'Welcome to Dashboard. Login Successful.',
        );     
  }
return(
    <View style={styles.container}>
        <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
        />
        <Text style={styles.otpText}>
            Login using OTP
        </Text>    
        <TextInput
            style={styles.textInput}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            onChangeText={setPhoneNumber}
            autoCompleteType='tel'
          />

          <TouchableOpacity style={styles.sendVerification} onPress={sendVerification}>
            <Text style={styles.buttonText}>
              Send verification
            </Text>
          </TouchableOpacity>

          <TextInput
            placeholder="Confirm Code"
            keyboardType="number-pad"
            onChangeText={setCode}
            style={styles.textInput}
          />

          <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
            <Text style={styles.buttonText}>
              Confirm verification
        </Text>
          </TouchableOpacity>
    </View>
)
}

export default Otp

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000',
        alignItems:'center',
        justifyContent:'center',
    },
    sendVerification:{
        padding:20,
        backgroundColor:'#FFBC07',
        borderRadius: 10,
    },
      sendCode:{
        padding:20,
        backgroundColor:'#FFBC07',
        borderRadius:10,
    },
    textInput:{
        paddingTop:40,
        paddingBottom:20,
        paddingHorizontal:20,
        fontSize:24,
        borderBottomColor:'#fff',
        borderBottomWidth:2,
        marginBottom:20,
        textAlign:'center',
        color:'#fff',
    },
    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
    },
    otpText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',
        margin:20,
    }
})
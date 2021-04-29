import { Text, View } from "../components/Themed";
import { Button, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { styles } from "../constants/Styles";
import firebase from "firebase/app";
import "firebase/auth"
import { firebaseConfig } from "../constants/config";
import * as Google from 'expo-google-app-auth';



// @ts-ignore
export default function loginScreen({navigation}){

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  firebase.auth().onAuthStateChanged(
    function(user) {
    if (user) {
      navigation.navigate("Root");
    } else {
      navigation.navigate("Login")
    }
  });

  async function signInWithGoogleAsync() {
    await Google.logInAsync({
      clientId: "750663189972-9vlhc9o3l4rsmv0vmchete414e2dr61i.apps.googleusercontent.com"
    });
  }
  let message = "";
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePass] = React.useState("");
    return (

      <View style={styles.container}>
        <Image source={require('../assets/images/123123.png')}></Image>
        <Image source={require('../assets/images/123123123123.png')}></Image>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder={' Username/Email...'}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder={' Password...'}
          onChangeText={onChangePass}
          value={password}
          secureTextEntry={true}
        />
        <Button
          title="Login"
          onPress={() => navigation.navigate("Root")}></Button>
        <Text>{message}</Text>
        <Text style={styles.link}
              onPress={() => navigation.navigate('Register')}>
          Don't have an account? Register instead.</Text>
      </View>

    );

  }

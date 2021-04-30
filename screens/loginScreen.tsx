import { Text, View } from "../components/Themed";
import { Button, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput, ImageBackground, StyleSheet, Pressable } from "react-native";
import firebase from "firebase/app";
import "firebase/auth"
import { firebaseConfig } from "../constants/config";
import * as Google from 'expo-google-app-auth';

import { tw } from '../constants/styling/tailwind';

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

      <View style={tw('h-full')}>
        <ImageBackground source={require("../assets/GradientBG.png")} style={{resizeMode: 'stretch', flex: 1}}>
          <View style={tw('items-center bg-transparent pt-32')}>    

            <Image source={require('../assets/Logo.png')} />
            <Text style={tw('text-light h1')}>Medilert</Text>

            <View style={tw('bg-transparent p-10')}>

              <Text style={tw('text-light caption')}>Login...</Text>

              <TextInput
                style={tw('caption bg-light w-80 h-12 mt-6 px-5 drop-shadow')}
                onChangeText={onChangeEmail}
                placeholder={' Username/Email...'}
                value={email}
              />

              <TextInput
                style={tw('caption bg-light w-80 h-12 mt-6 px-5 drop-shadow')}
                placeholder={' Password...'}
                onChangeText={onChangePass}
                value={password}
                secureTextEntry={true}
              />

              <View style={tw('bg-transparent flex-row flex justify-center pt-10')}>

                <Pressable
                  onPress={() => navigation.navigate("Register")}
                  style={tw('bg-primary drop-shadow mr-8 px-5 py-2 rounded-md')}
                >
                  <Text style={tw('subheading text-light')}>Register</Text>
                </Pressable>
                <Pressable
                  onPress={() => navigation.navigate("Root")}
                  style={tw('bg-primary drop-shadow ml-8 px-5 py-2 rounded-md')}
                >
                  <Text style={tw('subheading text-light')}>Login</Text>
                </Pressable>

              </View>

            </View>
            <Text>{message}</Text>

          </View>
        </ImageBackground>
      </View>

    );

  }

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

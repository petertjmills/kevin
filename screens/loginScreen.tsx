import { Text, View } from "../components/Themed";
import { Button, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { styles } from "../constants/Styles";

firebase.initializeApp(firebaseConfig);


// @ts-ignore
export default function loginScreen({navigation}){

  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePass] = React.useState('')

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
      onPress={() => navigation.navigate('Root')}

    />
    <Text style={styles.link}
          onPress={() => navigation.navigate('Register')}>
      Don't have an account? Register instead.</Text>
  </View>

  );

}

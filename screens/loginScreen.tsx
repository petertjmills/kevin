import { Text, View } from "../components/Themed";
import { Button } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { styles } from "../constants/Styles";

// @ts-ignore
export default function loginScreen({navigation}){

  const [text, onChangeText] = React.useState("");
  const [password, onChangePass] = React.useState('')

  return (

  <View style={styles.container}>
    <Text style={styles.title}>Welcome to {"{"}Kevin{"}"}</Text>
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      placeholder={' Username/Email...'}
      value={text}
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

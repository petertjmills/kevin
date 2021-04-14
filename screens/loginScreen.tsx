import { Text, View } from "../components/Themed";
import { Button, StyleSheet } from "react-native";
import React, {useState} from "react";
import { TextInput } from "react-native";

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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  list: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  link: {
    color: 'blue',
    fontSize: 12
  }
});

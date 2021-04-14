import { Text, View } from "../components/Themed";
import { Button, StyleSheet } from "react-native";
import React, {useState} from "react";
import { TextInput } from "react-native";

// @ts-ignore
export default function registerScreen({navigation}){

  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePass] = React.useState('')
  const [firstName, onChangeFirstName] = React.useState("");
  const [surname, onChangeSurname] = React.useState("");
  const [username, onChangeUser] = React.useState("");




  return (

    <View style={styles.container}>
      <Text style={styles.title}>Welcome to {"{"}Kevin{"}"}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUser}
        placeholder={' Username...'}
        value={username}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        placeholder={' Email...'}
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeFirstName}
        placeholder={' First Name...'}
        value={firstName}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeSurname}
        placeholder={' Surname...'}
        value={surname}
      />
      <TextInput
        style={styles.input}
        placeholder={' Password...'}
        onChangeText={onChangePass}
        value={password}
        secureTextEntry={true}
      />
      <Button
        title="Register and Begin!"
        onPress={() => navigation.navigate('Root')}

      />
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

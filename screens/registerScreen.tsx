import { Text, View } from "../components/Themed";
import { Button, StyleSheet } from "react-native";
import React, {useState} from "react";
import { TextInput } from "react-native";
import { styles } from "../constants/Styles";

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
        placeholderTextColor = "#D50000"
        onChangeText={onChangePass}
        value={password}
        secureTextEntry={true}
      />
      <Button
        title="Register and Begin!"
        onPress={() => navigation.navigate('Root')}
      />
      <Text style={styles.link}
            onPress={() => navigation.navigate('Login')}>
        Already have an account? Log-in here.</Text>
    </View>

  );

}

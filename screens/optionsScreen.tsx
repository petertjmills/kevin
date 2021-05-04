import * as React from 'react';

import { View } from '../components/Themed';

import { LogoTop } from '../components/LogoTop';

import { tw }  from '../constants/styling/tailwind'
import { StyleSheet, Button, Alert, ScrollView } from "react-native";
import { SearchBar } from "react-native-elements";
import { Avatar, Card, Colors, Paragraph, ProgressBar, Title } from "react-native-paper";

const confirmRequestDataAlert = () =>
  Alert.alert(
    "Are you sure?",
    "You will receive a copy of all of your data via email.",
    [
      { text: "Yes, Send me a copy", onPress: () => doneRequestDataAlert() },
      { text: "No", style: 'cancel'}
    ]
  );
const confirmDeleteDataAlert = () =>
  Alert.alert(
    "Are you sure?",
    "This will mean any data you have saved with us is deleted and your account will be removed from our system.",
    [
      { text: "Yes, Delete it", onPress: () => doneDeleteDataAlert() },
      { text: "No", style: 'cancel'}
    ]
  );
const confirmDeleteAndRequestDataAlert = () =>
  Alert.alert(
    "Are you sure?",
    "This will mean any data you have saved with us is deleted and your account will be removed from our system. You will receive a copy of all of your data via email.",
    [
      { text: "Yes, Delete it", onPress: () => doneDeleteAndRequestDataAlert() },
      { text: "No", style: 'cancel'}
    ]
  );

const doneDeleteDataAlert = () =>
  Alert.alert(
    "Alert",
    "Data is scheduled for deletion and will be wiped from our servers within 30 days. A confirmation email has been sent.",
    [
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

const doneRequestDataAlert = () =>
  Alert.alert(
    "Alert",
    "Your data will be sent to you within 30 days via email. A confirmation email has been sent.",
    [
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

const doneDeleteAndRequestDataAlert = () =>
  Alert.alert(
    "Alert",
    "Your Data is scheduled for deletion and will be wiped from our servers within 30 days. You will also receive your data via email. A confirmation email has been sent.",
    [
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

const AlertThing = () => {

  const requestDataAlert = () =>
    Alert.alert(
      "Request a copy of your data",
      "Would you like to be sent a copy of all of your data via email?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => confirmRequestDataAlert()}
      ]
    );

  const deleteDataAlert = () =>
    Alert.alert(
      "Delete all of your data",
      "Would you like to delete all of your data we have stored on our servers? An email confirmation will be sent to the address you registered with and all data will be deleted within 30 days.",
      [
        {
          text: "Delete and request all of my data.",
          onPress: () => confirmDeleteAndRequestDataAlert()
        },
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => confirmDeleteDataAlert()}
      ]
    );

  return (
    <View style ={{justifyContent: 'flex-end', alignContent:'flex-end'}}>
      <Button title={"Request your data?"} onPress={requestDataAlert} />
      <Button title={"Delete your data?"} onPress={deleteDataAlert} />
    </View>
  );

}



export default function optionsScreen() {
  return (
  <ScrollView style={tw('pt-10 bg-light h-full')} >
    <LogoTop />

    <SearchBar
      placeholder='Search...'
      containerStyle={tw('bg-light')}
      inputStyle={tw('bg-light')}
      platform={'android'}>

    </SearchBar>

    <Card style={tw('drop-shadow bg-light')}>
      <View style={tw('flex flex-row')}>
        <View style={tw('p-8')}>
          <Avatar.Image size={72} source={require('../assets/avatar.png')} />
        </View>
        <View style={tw('pt-8 flex')}>
          <Card.Content style={tw('h-10')}>
            <Title style={tw('text-dark h2 pt-8')}>Joe Mama</Title>
          </Card.Content>
        </View>
      </View>
    </Card>

  <AlertThing></AlertThing>
  </ScrollView>
  );
}

import { Text, View } from "../components/Themed";
import { Button, Image, StyleSheet } from "react-native";
import React, {useState} from "react";
import { TextInput, ImageBackground, Pressable } from "react-native";
import { styles } from "../constants/Styles";

import { tw } from '../constants/styling/tailwind';

// @ts-ignore
export default function registerScreen({navigation}){

  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePass] = React.useState('')
  const [firstName, onChangeFirstName] = React.useState("");
  const [surname, onChangeSurname] = React.useState("");
  const [username, onChangeUser] = React.useState("");


  return (

    <View style={tw('h-full')}>
        <ImageBackground source={require("../assets/GradientBG.png")} style={{resizeMode: 'stretch', flex: 1}}>
          <View style={tw('items-center bg-transparent pt-32')}>    

              <Image source={require('../assets/Logo.png')} />
              <Text style={tw('text-light h1')}>Medilert</Text>
              <View style={tw('bg-transparent p-10')}>

                <Text style={tw('text-light caption')}>Register...</Text>

                <TextInput
                  style={tw('caption bg-light w-80 h-12 mt-6 px-5 drop-shadow')}
                  onChangeText={onChangeUser}
                  placeholder={'First Name'}
                  value={username}
                />
                <TextInput
                  style={tw('caption bg-light w-80 h-12 mt-6 px-5 drop-shadow')}
                  onChangeText={onChangeEmail}
                  placeholder={'Last Name'}
                  value={email}
                />
                <TextInput
                  style={tw('caption bg-light w-80 h-12 mt-6 px-5 drop-shadow')}
                  onChangeText={onChangeFirstName}
                  placeholder={'Email'}
                  value={firstName}
                />
                <TextInput
                  style={tw('caption bg-light w-80 h-12 mt-6 px-5 drop-shadow')}
                  placeholder={'Password'}
                  onChangeText={onChangePass}
                  value={password}
                  secureTextEntry={true}
                />

                <View style={tw('bg-transparent flex-row flex justify-center pt-5')}>

                  <Pressable
                    onPress={() => navigation.navigate("Login")}
                    style={tw('bg-primary drop-shadow mr-8 px-5 py-2 rounded-md')}
                  >
                    <Text style={tw('subheading text-light')}>Back</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => navigation.navigate("Root")}
                    style={tw('bg-primary drop-shadow ml-8 px-5 py-2 rounded-md')}
                  >
                    <Text style={tw('subheading text-light')}>Register</Text>
                  </Pressable>

                </View>

            </View>
              

          </View>
        </ImageBackground>
      </View>

  );

}

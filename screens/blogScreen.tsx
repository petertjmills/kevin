import * as React from 'react';
import { Text, View } from '../components/Themed';
import { styles } from "../constants/Styles";
import {SafeAreaView, FlatList, StyleSheet, StatusBar, TextInput, ScrollView, Pressable } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { SearchBar } from "react-native-elements";

import { LogoTop } from '../components/LogoTop';

import { getColor, tw }  from '../constants/styling/tailwind'

export default function Blog() {
    return (
      <View style={tw('pt-10 bg-light h-full')}>
        <LogoTop />
        <ScrollView style={tw('bg-light')}>
          <SearchBar
            placeholder='Search...'
            containerStyle={tw('bg-light')}
            inputStyle={tw('bg-light')}
            platform={'android'}>

          </SearchBar>

          <Card style={tw('bg-light pt-8 pb-6')}>
            <Title style={tw('h2 px-5 pt-5')}>Blog Title #1</Title>
                  <Paragraph style={tw('text-dark text px-6')}>This is a small piece of text that tells the user about the blog page.</Paragraph>
              <Card.Actions>
                <Pressable
                  style={tw('bg-primary drop-shadow ml-8 px-5 py-2 rounded-md')}
                >
                  <Text style={tw('subheading text-light')}>Read More</Text>
                </Pressable>
              </Card.Actions>
          </Card>

          <Card style={tw('bg-light pt-8 pb-6')}>
            <Title style={tw('h2 px-5 pt-5')}>Blog Title #2</Title>
                  <Paragraph style={tw('text-dark text px-6')}>This is a small piece of text that tells the user about the blog page.</Paragraph>
              <Card.Actions>
                <Pressable
                  style={tw('bg-primary drop-shadow ml-8 px-5 py-2 rounded-md')}
                >
                  <Text style={tw('subheading text-light')}>Read More</Text>
                </Pressable>
              </Card.Actions>
          </Card>

          <Card style={tw('bg-light pt-8 pb-6')}>
            <Title style={tw('h2 px-5 pt-5')}>Blog Title #3</Title>
                  <Paragraph style={tw('text-dark text px-6')}>This is a small piece of text that tells the user about the blog page.</Paragraph>
              <Card.Actions>
                <Pressable
                  style={tw('bg-primary drop-shadow ml-8 px-5 py-2 rounded-md')}
                >
                  <Text style={tw('subheading text-light')}>Read More</Text>
                </Pressable>
              </Card.Actions>
          </Card>

          <Card style={tw('bg-light pt-8 pb-6')}>
            <Title style={tw('h2 px-5 pt-5')}>Blog Title #4</Title>
                  <Paragraph style={tw('text-dark text px-6')}>This is a small piece of text that tells the user about the blog page.</Paragraph>
              <Card.Actions>
                <Pressable
                  style={tw('bg-primary drop-shadow ml-8 px-5 py-2 rounded-md')}
                >
                  <Text style={tw('subheading text-light')}>Read More</Text>
                </Pressable>
              </Card.Actions>
          </Card>

          <Card style={tw('bg-light pt-8 pb-6')}>
            <Title style={tw('h2 px-5 pt-5')}>Blog Title #5</Title>
                  <Paragraph style={tw('text-dark text px-6')}>This is a small piece of text that tells the user about the blog page.</Paragraph>
              <Card.Actions>
                <Pressable
                  style={tw('bg-primary drop-shadow ml-8 px-5 py-2 rounded-md')}
                >
                  <Text style={tw('subheading text-light')}>Read More</Text>
                </Pressable>
              </Card.Actions>
          </Card>

          <Card style={tw('bg-light pt-8 pb-6')}>
            <Title style={tw('h2 px-5 pt-5')}>Blog Title #6</Title>
                  <Paragraph style={tw('text-dark text px-6')}>This is a small piece of text that tells the user about the blog page.</Paragraph>
              <Card.Actions>
                <Pressable
                  style={tw('bg-primary drop-shadow ml-8 px-5 py-2 rounded-md')}
                >
                  <Text style={tw('subheading text-light')}>Read More</Text>
                </Pressable>
              </Card.Actions>
          </Card>

          <Card style={tw('bg-light pt-8 pb-6')}>
            <Title style={tw('h2 px-5 pt-5')}>Blog Title #7</Title>
                  <Paragraph style={tw('text-dark text px-6')}>This is a small piece of text that tells the user about the blog page.</Paragraph>
              <Card.Actions>
                <Pressable
                  style={tw('bg-primary drop-shadow ml-8 px-5 py-2 rounded-md')}
                >
                  <Text style={tw('subheading text-light')}>Read More</Text>
                </Pressable>
              </Card.Actions>
          </Card>


        </ScrollView>
      </View>
    );
}

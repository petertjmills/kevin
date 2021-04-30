import * as React from 'react';
import {
  Card,
  Avatar,
  Title,
  Paragraph,
  ProgressBar,
  Colors,
} from "react-native-paper";
import { ScrollView, View } from "react-native";
import { SearchBar } from 'react-native-elements';

import { LogoTop } from '../components/LogoTop';

import { getColor, tw }  from '../constants/styling/tailwind'

export default function MediFriendsScreen() {
  return (
 <View style={tw('pt-10 bg-light h-full')}>
    <LogoTop />
    <SearchBar
      placeholder='Find a Friend...'
      containerStyle={tw('bg-light')}
      inputStyle={tw('bg-light')}
      platform={'android'}>

    </SearchBar>

    <ScrollView style={tw('bg-light')}>


      <Card style={tw('drop-shadow bg-light')}>
        <View style={tw('flex flex-row')}>
          <View style={tw('p-8')}>
            <Avatar.Image size={72} source={require('../assets/avatar.png')} />
          </View>
          <View style={tw('pt-8 flex')}>
            <Card.Content style={tw('h-10')}>
              <Title style={tw('text-dark h2 pt-8')}>Joe Mama</Title>
            </Card.Content>
            <Card.Content>
              <Paragraph style={tw('text-dark pt-4')}>Progress Today:</Paragraph>
              <ProgressBar progress={0.8} color={Colors.red800} />
            </Card.Content>
          </View>
        </View>
      </Card>

      <Card style={tw('drop-shadow bg-light')}>
        <View style={tw('flex flex-row')}>
          <View style={tw('p-8')}>
            <Avatar.Image size={72} source={require('../assets/avatar.png')} />
          </View>
          <View style={tw('pt-8 flex')}>
            <Card.Content style={tw('h-10')}>
              <Title style={tw('text-dark h2 pt-8')}>Joe Mama</Title>
            </Card.Content>
            <Card.Content>
              <Paragraph style={tw('text-dark pt-4')}>Progress Today:</Paragraph>
              <ProgressBar progress={0.8} color={Colors.red800} />
            </Card.Content>
          </View>
        </View>
      </Card>

      <Card style={tw('drop-shadow bg-light')}>
        <View style={tw('flex flex-row')}>
          <View style={tw('p-8')}>
            <Avatar.Image size={72} source={require('../assets/avatar.png')} />
          </View>
          <View style={tw('pt-8 flex')}>
            <Card.Content style={tw('h-10')}>
              <Title style={tw('text-dark h2 pt-8')}>Joe Mama</Title>
            </Card.Content>
            <Card.Content>
              <Paragraph style={tw('text-dark pt-4')}>Progress Today:</Paragraph>
              <ProgressBar progress={0.8} color={Colors.red800} />
            </Card.Content>
          </View>
        </View>
      </Card>

    </ScrollView>
 </View>
  );
}

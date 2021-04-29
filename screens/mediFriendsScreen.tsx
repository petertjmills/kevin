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


export default function MediFriendsScreen() {
  return (
 <View style={{paddingTop: 25,flex : 1, backgroundColor: '#656C7B'}}>
    <SearchBar
      placeholder='Find a Friend...'
      containerStyle={{backgroundColor: '#141414'}}
      inputStyle={{ paddingLeft: 10,backgroundColor: '#1C1E22'}}
      platform={'default'}>

    </SearchBar>

    <ScrollView style={{flex: 2, backgroundColor: '#141414'}}>


      <Card style={{ backgroundColor:'#2e3238', margin: 15,paddingTop: 10,paddingLeft: 10,paddingRight: 10,paddingBottom:0}}>
          <Avatar.Image size={45} source={require('../assets/avatar.png')} />
        <Card.Content>
          <Title style={{color:'white'}}>Joe Mama</Title>
          <Paragraph style={{color:'#95959d'}}>Address: ??????</Paragraph>
          <Paragraph style={{color:'#95959d'}}>Phone Number: ??????</Paragraph>
          <Paragraph style={{color:'#95959d'}}>Required Medication: ??????</Paragraph>
        </Card.Content>
        <Card.Content>
          <Paragraph style={{color:'#FFFFFF'}}>Progress Today:</Paragraph>
        <ProgressBar progress={0.8} color={Colors.red800} />
        </Card.Content>
      </Card>

      <Card style={{ backgroundColor:'#2e3238', margin: 15,paddingTop: 10,paddingLeft: 10,paddingRight: 10,paddingBottom:0}}>
        <Avatar.Image size={45} source={require('../assets/avatar.png')} />
        <Card.Content>
          <Title style={{color:'white'}}>Joe Mama</Title>
          <Paragraph style={{color:'#95959d'}}>Address: ??????</Paragraph>
          <Paragraph style={{color:'#95959d'}}>Phone Number: ??????</Paragraph>
          <Paragraph style={{color:'#95959d'}}>Required Medication: ??????</Paragraph>
        </Card.Content>
        <Card.Content>
          <Paragraph style={{color:'#FFFFFF'}}>Progress Today:</Paragraph>
          <ProgressBar progress={0.8} color={Colors.red800} />
        </Card.Content>
      </Card>

      <Card style={{ backgroundColor:'#2e3238', margin: 15,paddingTop: 10,paddingLeft: 10,paddingRight: 10,paddingBottom:0}}>
        <Avatar.Image size={45} source={require('../assets/avatar.png')} />
        <Card.Content>
          <Title style={{color:'white'}}>Joe Mama</Title>
          <Paragraph style={{color:'#95959d'}}>Address: ??????</Paragraph>
          <Paragraph style={{color:'#95959d'}}>Phone Number: ??????</Paragraph>
          <Paragraph style={{color:'#95959d'}}>Required Medication: ??????</Paragraph>
        </Card.Content>
        <Card.Content>
          <Paragraph style={{color:'#FFFFFF'}}>Progress Today:</Paragraph>
          <ProgressBar progress={0.8} color={Colors.red800} />
        </Card.Content>
      </Card>



    </ScrollView>
 </View>
  );
}


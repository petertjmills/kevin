import * as React from 'react';
import { Text, View } from '../components/Themed';
import { styles } from "../constants/Styles";
import {SafeAreaView, FlatList, StyleSheet, StatusBar, TextInput, ScrollView} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { SearchBar } from "react-native-elements";

export default function Blog() {
    return (
      <View style={{paddingTop: 25,flex : 1, backgroundColor: '#656C7B'}}>
        <ScrollView style={{backgroundColor: '#141414'}}>
          <SearchBar
            placeholder='Find a Friend...'
            containerStyle={{backgroundColor: '#141414'}}
            inputStyle={{ paddingLeft: 10,backgroundColor: '#1C1E22'}}
            platform={'default'}>

          </SearchBar>

            <Card style={{ backgroundColor:'#2e3238', margin: 15,paddingTop: 10,paddingLeft: 10,paddingRight: 10,paddingBottom:0}}>
              <Title style={{color:'white'}}>Blog Title #1</Title>
                    <Paragraph style={{color:'#95959d'}}>This is a small piece of text that tells the user about the blog page.</Paragraph>
                <Card.Actions>
                    <Button style={styles.blogButton}>Read More</Button>
                </Card.Actions>
            </Card>
          <Card style={{ backgroundColor:'#2e3238', margin: 15,paddingTop: 10,paddingLeft: 10,paddingRight: 10,paddingBottom:0}}>
            <Title style={{color:'white'}}>Blog Title #2</Title>
            <Paragraph style={{color:'#95959d'}}>This is a small piece of text that tells the user about the blog page.</Paragraph>
            <Card.Actions>
              <Button style={styles.blogButton}>Read More</Button>
            </Card.Actions>
          </Card><Card style={{ backgroundColor:'#2e3238', margin: 15,paddingTop: 10,paddingLeft: 10,paddingRight: 10,paddingBottom:0}}>
          <Title style={{color:'white'}}>Blog Title #3</Title>
          <Paragraph style={{color:'#95959d'}}>This is a small piece of text that tells the user about the blog page.</Paragraph>
          <Card.Actions>
            <Button style={styles.blogButton}>Read More</Button>
          </Card.Actions>
        </Card>
          <Card style={{ backgroundColor:'#2e3238', margin: 15,paddingTop: 10,paddingLeft: 10,paddingRight: 10,paddingBottom:0}}>
            <Title style={{color:'white'}}>Blog Title #4</Title>
            <Paragraph style={{color:'#95959d'}}>This is a small piece of text that tells the user about the blog page.</Paragraph>
            <Card.Actions>
              <Button style={styles.blogButton}>Read More</Button>
            </Card.Actions>
          </Card>
          <Card style={{ backgroundColor:'#2e3238', margin: 15,paddingTop: 10,paddingLeft: 10,paddingRight: 10,paddingBottom:0}}>
            <Title style={{color:'white'}}>Blog Title #5</Title>
            <Paragraph style={{color:'#95959d'}}>This is a small piece of text that tells the user about the blog page.</Paragraph>
            <Card.Actions>
              <Button style={styles.blogButton}>Read More</Button>
            </Card.Actions>
          </Card>
          <Card style={{ backgroundColor:'#2e3238', margin: 15,paddingTop: 10,paddingLeft: 10,paddingRight: 10,paddingBottom:0}}>
            <Title style={{color:'white'}}>Blog Title #6</Title>
            <Paragraph style={{color:'#95959d'}}>This is a small piece of text that tells the user about the blog page.</Paragraph>
            <Card.Actions>
              <Button style={styles.blogButton}>Read More</Button>
            </Card.Actions>
          </Card>
          <Card style={{ backgroundColor:'#2e3238', margin: 15,paddingTop: 10,paddingLeft: 10,paddingRight: 10,paddingBottom:0}}>
            <Title style={{color:'white'}}>Blog Title #7</Title>
            <Paragraph style={{color:'#95959d'}}>This is a small piece of text that tells the user about the blog page.</Paragraph>
            <Card.Actions>
              <Button style={styles.blogButton}>Read More</Button>
            </Card.Actions>
          </Card>
          <Card style={{ backgroundColor:'#2e3238', margin: 15,paddingTop: 10,paddingLeft: 10,paddingRight: 10,paddingBottom:0}}>
            <Title style={{color:'white'}}>Blog Title #8</Title>
            <Paragraph style={{color:'#95959d'}}>This is a small piece of text that tells the user about the blog page.</Paragraph>
            <Card.Actions>
              <Button style={styles.blogButton}>Read More</Button>
            </Card.Actions>
          </Card>


        </ScrollView>
      </View>
    );
}

import * as React from 'react';
import { Alert, Button, FlatList, Modal, StyleSheet } from "react-native";
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (

    <View style={styles.container}>
      <Text style={styles.title}> List of current medication, frequency and time </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',

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
});
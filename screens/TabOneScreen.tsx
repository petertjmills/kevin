import * as React from 'react';
import { Text, View } from '../components/Themed';
import { styles } from "../constants/Styles";


export default function TabOneScreen() {
  return (

    <View style={styles.container}>
      <Text style={styles.title}> List of current medication, frequency and time </Text>
    </View>
  );
}


import * as React from 'react';
import { Text, View } from '../components/Themed';
import { styles } from "../constants/Styles";


const cards = [
  {
    id: "0",
    title: "Starry Night",
    picture: require('../assets/starry.jpg'),
    content: <Text>Starry Night</Text>
  },
  {
    id: "1",
    title: "Wheat Field",
    picture: require('../assets/wheat.jpg'),
    content: <Text>Wheat Field with Cypresses</Text>
  },
  {
    id: "2",
    title: "Bedroom in Arles",
    picture: require('../assets/bed.jpg'),
    content: <Text>Bedroom in Arles</Text>
  }
]

export default function TabOneScreen() {
  return (
 <View style={{flex : 1, backgroundColor: 'white'}}>
    <View style={{flex: 1, backgroundColor: 'blue'}}>

      <View style={styles.container}>
      </View>
    </View>
 </View>
  );
}


import * as React from 'react';
import { styles } from "../constants/Styles";
import { Text, View } from '../components/Themed';
// @ts-ignore
import RNSpeedometer from 'react-native-speedometer';


export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gamification Additional Stuff</Text>
      <RNSpeedometer value={50} size={200}/>
      {/* VALUE >=0-Tier 0, >=10-Tier 1,  >=30-Tier 2, >=50-Tier 3, >=70-Tier 4, >=90-Tier 5, >=100-MAXED*/}
    </View>
  );
}


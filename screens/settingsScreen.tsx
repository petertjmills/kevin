import * as React from 'react';
import { styles } from "../constants/Styles";
import { Text, View } from '../components/Themed';
// @ts-ignore
import RNSpeedometer from 'react-native-speedometer';

import { LogoTop } from '../components/LogoTop';

import { getColor, tw }  from '../constants/styling/tailwind'

export default function settingScreen() {
  return (
  <View style={tw('pt-10 bg-light h-full')}>
  <LogoTop />
  </View>
  );
}

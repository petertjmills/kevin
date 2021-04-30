import * as React from 'react';

import { Text } from 'react-native';

import { getColor, tw }  from '../constants/styling/tailwind'

export function LogoTop(props: TextProps) {
  return <Text style={tw("h1 text-primary px-6")} >Medilert</Text>;
}

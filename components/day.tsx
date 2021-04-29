import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import moment from 'moment';
import Moment from 'react-moment';

type Props = {
  isActive?: boolean;
  day?: string;
  pressFunc?: any;
};

export function Day(props: Props) {
  var day = props.day

  return (
    <View>
      <TouchableOpacity 
        style={ [styles.default, props.isActive ? styles.active : styles.inactive] }
        onPress={ () => props.pressFunc(day) }
      >
        <Text 
          style={ props.isActive ? styles.activeText : styles.inactiveText }
        >
          {props.day}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
   default:{
    height: 35,
    width: 35,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    margin:3
  },
  active: { 
    backgroundColor: '#2ed15e'
  },
  inactive: {

  },
  activeText: {
    color: '#ffffff'
  },
  inactiveText: {
    color: '#d3d3d3'
  }
});
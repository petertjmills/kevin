import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import moment from 'moment';
import Moment from 'react-moment';

import { Day } from './day'

type Props = {
  toggleDays?: any
  daysActive?: object
};

export function DayPicker(props: Props) {

  return (
    <View style={ styles.container }>
      <Day day="Sun" isActive={props.daysActive["Sun"]} pressFunc={props.toggleDays}></Day>
      <Day day="Mon" isActive={props.daysActive["Mon"]} pressFunc={props.toggleDays}></Day>
      <Day day="Tue" isActive={props.daysActive["Tue"]} pressFunc={props.toggleDays}></Day>
      <Day day="Wed" isActive={props.daysActive["Wed"]} pressFunc={props.toggleDays}></Day>
      <Day day="Thu" isActive={props.daysActive["Thu"]} pressFunc={props.toggleDays}></Day>
      <Day day="Fri" isActive={props.daysActive["Fri"]} pressFunc={props.toggleDays}></Day>
      <Day day="Sat" isActive={props.daysActive["Sat"]} pressFunc={props.toggleDays}></Day>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'center',
    display: 'flex',
    height: 50,
    alignItems: 'center'
  }
});
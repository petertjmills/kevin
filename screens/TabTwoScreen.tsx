import * as React from 'react';
import { StyleSheet } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


export default function TabTwoScreen(){
  return (

      <View style={styles.calendar}>
        <CalendarList
          markedDates={{
            '2021-04-20': {textColor: 'green'},
            '2021-04-22': {startingDay: true, color: 'green'},
            '2021-04-23': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
            '2021-04-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
          }}
          // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
          markingType={'period'}
        />
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  calendar: {
  flex: 2,
    alignItems: 'center'
  },

});

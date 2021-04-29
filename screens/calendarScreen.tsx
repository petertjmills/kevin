import * as React from 'react';
import {CalendarList,} from 'react-native-calendars';
import { View, } from '../components/Themed';
import { styles } from "../constants/Styles";

export default function CalendarScreen(){
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

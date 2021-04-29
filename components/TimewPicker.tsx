import * as React from 'react';
import { Text, View, StyleSheet, Modal, Pressable, Alert, Button, TextInput, TouchableOpacity } from 'react-native';

import moment from 'moment';
import Moment from 'react-moment';

import DateTimePicker from '@react-native-community/datetimepicker';

type Props = {
  addTime?: any
  id?: number
};

export function TimeSelect(props: Props) {

  const [date, setDate] = React.useState(new Date());
  const [show, setShow] = React.useState(false);

  const onChange = (event, selectedDate) => {
    if (selectedDate == undefined) {
      return
    }
    setShow(false);
    setDate(selectedDate);
    props.addTime(selectedDate, props.id);
  };
  
  return (
    <View>

      <TouchableOpacity onPress={() => {setShow(true)}}>
        <Moment style={styles.modalText} element={Text} format="LT">{date}</Moment>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={date}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />)
      }

    </View>
  );
}

const styles = StyleSheet.create({
  modalText: {
    marginTop: 15,
    textAlign: "center"
  }
});
import * as React from 'react';
import { Text, View, StyleSheet, Modal, Pressable, Alert, Button, TextInput, TouchableOpacity } from 'react-native';

import moment from 'moment';
import Moment from 'react-moment';

import { DayPicker } from "./daypicker"
import { TimeSelect } from "./TimewPicker"
import { Medication } from "./medicationItem"

type Props = {
  save?: any
  refresh?: any
  meds?: object
  deleteItem?: any
  updateAmount?: any
};

export function MedicationList(props: Props) {
  const [modalVisible, setModalVisible] = React.useState(false);

  let days = {
    "Sun":true,
    "Mon":true,
    "Tue":true,
    "Wed":true,
    "Thu":true,
    "Fri":true,
    "Sat":true
  };

  const [daysActive, setDays] = React.useState(days);

  const toggleDays = (day) => {
    var tempDaysActive = { ...daysActive }
    tempDaysActive[day] = !tempDaysActive[day]
    setDays({ ...tempDaysActive });
  }
  
  const [frequency, setFrequency] = React.useState(1);
  const [strfrequency, setStrFrequency] = React.useState("1");
  const [timeselects, setTimeSelects] = React.useState(null);
  
  const [medName, setMedName] = React.useState("");
  const [medAmount, setMedAmount] = React.useState("");
  const [medDose, setMedDose] = React.useState("")

  const [times, setTimes] = React.useState({0:new Date()});

  const addTime = (time, key) => {
    setTimes({...times, [key]:time})
  }

  const saveMed = () => {
    setModalVisible(!modalVisible)
    var medication = {
      name: medName,
      amount: medAmount,
      days: daysActive,
      time: times,
      dose: medDose
    }

    props.save(medication)
    //props.refresh()
  }

  return (
    <View>
      <Text>My Medications</Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Text style={styles.modalText}>Medication Name</Text>

            <TextInput
              placeholder="Name..."
              onChangeText={text => setMedName(text)}
            />

            <Text style={styles.modalText}>Quantity</Text>

            <TextInput
              placeholder="Amount..."
              keyboardType="number-pad"
              onChangeText={text => setMedAmount(text)}
            />

            <Text style={styles.modalText}>Dose</Text>

            <TextInput
              placeholder="Amount..."
              keyboardType="number-pad"
              onChangeText={text => setMedDose(text)}
            />

            <Text style={styles.modalText}>Days</Text>

            <DayPicker toggleDays={toggleDays} daysActive={daysActive}/>

            <Text style={styles.modalText}>Frequency (per day)</Text>

            <TextInput
              keyboardType="numeric"
              value={strfrequency}
              onChangeText={text => {
                var num = parseInt(text)
                if(isNaN(num)){
                  setStrFrequency(text)
                } else {
                  setStrFrequency(text)
                  setFrequency(num)
                }
              }}
              maxLength={1}
            />

            <Text style={styles.modalText}>Times</Text>

            { Array(frequency).fill().map((_, i) => i).map(i => <TimeSelect key={i} id={i} addTime={addTime}/>) }

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => saveMed()}
            >
              <Text style={styles.textStyle}>Save</Text>
            </Pressable>

          </View>
        </View>
      </Modal>

      { Object.keys(props.meds || {}).map((key, i) => <Medication key={i} updateAmount={props.updateAmount} medication={props.meds[key]} id={key} delete={props.deleteItem}/>)  }

      <Button
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
        title="+"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 10
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginTop: 15,
    textAlign: "center"
  }
});
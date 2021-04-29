import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';

import moment from 'moment';
import Moment from 'react-moment';

type Props = {
  med?: object;
  updateAmount?: any
  setMedInstance?: any
  getMedInstance?: any
};

export function AgendaItem(props: Props) {
  const { med } = props;
  const [taken, setTaken] = React.useState("false")

  const takeMed = () => {
    var dose = med.dose

    if(taken == "false"){
      props.updateAmount(med.id, 0-dose)
      props.setMedInstance(med.uid, "true")
    } else {
      props.updateAmount(med.id, dose)
      props.setMedInstance(med.uid, "false")
    }

  }

  React.useEffect(() => {
    const getTaken = async () => {
      const val = await props.getMedInstance(med.uid)
      setTaken(val)
    }
    getTaken()
  })

  return (
    <View style={styles.container}>
      <Moment element={Text} format="LT">{med.time}</Moment>
      <Text>{med.name} x{med.dose}</Text>
      <Text>{med['taken']}</Text>
      <Pressable
            style={[styles.button, taken == "true" ? styles.buttonTapped : styles.buttonDef]}
            onPress={() => takeMed()}
          >
            <Text style={styles.textStyle}>Take!</Text>
      </Pressable>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:10
  },
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
  buttonTapped: {
    backgroundColor: "#F194FF",
  },
  buttonDef: {
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
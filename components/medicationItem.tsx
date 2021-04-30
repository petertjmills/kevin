import * as React from 'react';
import { Text, View, StyleSheet, Modal, Pressable, Alert, Button, TextInput, TouchableOpacity } from 'react-native';

import moment from 'moment';
import Moment from 'react-moment';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

import { getColor, tw }  from '../constants/styling/tailwind'

type Props = {
  medication?: any;
  delete?: any
  id?: string
  updateAmount?: any
};

export function Medication(props: Props) {
  var _menu = null;

  const setMenuRef = ref => {
    _menu = ref;
  };

  const hideMenu = () => {
    _menu.hide();
  };

  const showMenu = () => {
    _menu.show();
  };
  //update
  const [modalVisible, setModalVisible] = React.useState(false);

  const openUpdateModal = () => {
    setModalVisible(true)
    _menu.hide();
  }

  const [medAmount, setMedAmount] = React.useState(props.medication.amount)

  const saveAmount = () => {
    props.updateAmount(props.id, medAmount)
    setModalVisible(false)
  }
  //delete
  const deleteThis = () => {
    props.delete(props.id)
  }

  //get color based on ammount

  const getColorByAmount = (amount, dose) => {
    const doseInt = parseInt(dose)
    if(amount/doseInt <= 2){
      return tw('text-error')
    } else if (amount/doseInt <= 5) {
      return tw('text-warning')
    } else {
      return tw('')
    }
  }

  return (
    <View style={tw('flex flex-row drop-shadow-sm h-20 items-center justify-evenly')}>
      <Text style={tw('h2 flex-auto px-5')}>{props.medication.name}</Text>
      <Text style={[getColorByAmount(props.medication.amount, props.medication.dose), tw('caption')]}>{props.medication.amount} left</Text>

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


            <Text style={styles.modalText}>Add new amount</Text>

            <TextInput
              placeholder="Amount..."
              keyboardType="number-pad"
              onChangeText={text => setMedAmount(text)}
            />

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => saveAmount()}
            >
              <Text style={styles.textStyle}>Save</Text>
            </Pressable>

          </View>
        </View>
      </Modal>

      <Menu
          ref={setMenuRef}
          button={
            <TouchableOpacity onPress={showMenu} style={tw('px-3')}>
                <Icon
                  name='more-horiz'
                  size={37}
                  color={getColor('dark')}
                />
            </TouchableOpacity>
          }

        >
          <MenuItem onPress={openUpdateModal}>
          <Icon
          name='add'
          size={24}
          color={'grey'} />
                  Update
          </MenuItem>

          <MenuDivider />

          <MenuItem onPress={hideMenu}>
          <Icon
          name='edit'
          size={24}
          color={'grey'} />
                  Edit
          </MenuItem>

          <MenuDivider />

          <MenuItem onPress={deleteThis}>
          <Icon
          name='delete'
          size={24}
          color={'grey'} />
                  Delete
          </MenuItem>

        </Menu>
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

import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';

import moment from 'moment';
import Moment from 'react-moment';

import { getColor, tw }  from '../constants/styling/tailwind'
import Icon from 'react-native-vector-icons/MaterialIcons';

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
    <View>
      <Pressable
          onPress={() => takeMed()}
          android-ripple={{color: getColor('grey6'), radius:10}}
      >
        <View style={tw('flex flex-row drop-shadow-sm h-20 items-center justify-evenly')}>

          <Moment element={Text} format="HH:mm" style={taken == "false" ? activeTime:inactiveTime}>{med.time}</Moment>
          <Text style={taken == "false" ? activeName:inactiveName}>{med.name} x{med.dose}</Text>

          <Icon size={52} name={"check"} color={taken == "false" ? getColor("alt"):getColor("grey4")} style={activeCheck}/>
        </View>
      </Pressable>

    </View>
  );
}

const activeTime = tw('text-grey3 h3 px-5')
const inactiveTime = tw('text-grey4 h3 px-5')

const activeName = tw('text-dark h2 flex-auto')
const inactiveName = tw('text-grey4 h2 flex-auto')

const activeCheck = tw('px-2')

const styles = StyleSheet.create({})

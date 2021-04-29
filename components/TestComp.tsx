import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

import moment from 'moment';
import Moment from 'react-moment';
import * as SecureStore from 'expo-secure-store';

import { AgendaItem } from "./agendaitem"

type Props = {
  date?: moment.Moment;
  meds?: any
  updateAmount?: any
};

export function Agenda(props: Props) {
  const { date, meds } = props;
  const [sortedMeds, setSortedMeds] = React.useState([])
  const [left, setLeft] = React.useState(0)
  const [uids, setUids] = React.useState([])
  const [update, setUpdate] = React.useState(false)

  const sortMeds = (meds) => {
    var outArr = []
    var uidArr = []
    var ids = Object.keys(meds)
    //console.log(ids.length)
     
    for (var i = ids.length - 1 ; i >= 0; i--) {
      var id = ids[i]
      var med = meds[id]
      //check if meds are today
      var dayToday = date.format("ddd")
      
      if(med.days[dayToday]){
        var times = med.time
        
        for (var m = Object.keys(times).length - 1; m >= 0; m--) {
          var time = new Date(times[m])
          //set all to 1/1/1970
          time.setFullYear(1970)
          time.setMonth(0)
          time.setUTCDate(1)
          // create med uid
          var daydate = date.set({'hour': time.getHours(), 'minute':time.getMinutes(), 'second':time.getSeconds(), 'millisecond': time.getMilliseconds()})
          var uid = id + daydate
          var meditem = {uid:uid, id: id, name:med.name, time:time, dose:med.dose}
          outArr.push(meditem)
          uidArr.push(uid)
          storeMedInstance(meditem.uid)
        }
      }
      
    }
    outArr.sort((a, b) => a.time - b.time)
    setSortedMeds(outArr)
    setUids(uidArr)
  }

  React.useEffect(() => {
    sortMeds(meds)
  }, [meds, date])

  React.useEffect(() => {
    const getUidTaken = async () => {
      var numLeft = 0
      for (var i = uids.length - 1; i >= 0; i--) {
        var uid = uids[i]
        const taken = await SecureStore.getItemAsync(uid)
        if(taken == "false"){
          numLeft += 1
        }
      }
      setLeft(numLeft)
    }
    getUidTaken()
  }, [uids, update])

  const storeMedInstance = async (key) => {
    const med = await SecureStore.getItemAsync(key)
    if(!med){
      console.log("creating item")
      await SecureStore.setItemAsync(key, "false")
    }
    setUpdate(!update)
  }

  const setMedInstance = async (key, val) => {
    await SecureStore.setItemAsync(key, val)
    setUpdate(!update)
  }

  const getMedInstance = async (key) => {
    const taken = await SecureStore.getItemAsync(key)
    return taken
  }

  return (
    <View>
      <Moment element={Text} format="dddd Do">{date}</Moment>
      <Text>{left} medications left today</Text>
      { sortedMeds.map((med, i) => <AgendaItem key={i} med={med} updateAmount={props.updateAmount} setMedInstance={setMedInstance} getMedInstance={getMedInstance}/>) }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
});
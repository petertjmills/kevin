import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, RefreshControl } from 'react-native';

import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import Moment from 'react-moment';
import * as SecureStore from 'expo-secure-store';
import { v4 as uuidv4 } from 'uuid';

import { Agenda } from '../components/TestComp';
import { MedicationList } from '../components/mymedicationscomp';
import { LogoTop } from '../components/LogoTop';

import { getColor, tw }  from '../constants/styling/tailwind'

export default function TabOneScreen() {
  //currentDate
  const [date, setDate] = React.useState(moment());

  //refresh

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    //getMedications()
    console.log(medications)
    console.log(medIds)
  };

  //medications update
  const [medications, setMedications] = React.useState({});
  const [medIds, setMedIds] = React.useState([]);
  const [update, setUpdate] = React.useState(true)

  React.useEffect(() => {
    const getValue = async () => {
      const ids = await SecureStore.getItemAsync('medications');
      if(ids){
        var idsDat = JSON.parse(ids)
        setMedIds(idsDat)
      }
    }
    getValue();

  }, [update]);

  React.useEffect(() => {
    const getValue = async () => {
      var meds = {}
      for (var i = medIds.length - 1; i >= 0; i--) {
        var id = medIds[i]
        const med = await SecureStore.getItemAsync(id)
        // @ts-ignore
        const medDat = JSON.parse(med)
        // @ts-ignore
        meds[id] = medDat
      }
      setMedications(meds)
    }
    getValue();

  }, [medIds]);
  // @ts-ignore
  const saveNewMedication = async (medication) => {
    var id = uuidv4()
    await SecureStore.setItemAsync(id, JSON.stringify(medication));
    await SecureStore.setItemAsync("medications", JSON.stringify([...medIds, id]));
    setUpdate(!update)
  }
  // @ts-ignore
  const deleteMedication = async (key) =>{
    await SecureStore.deleteItemAsync(key)
    var ids =[...medIds]
    var filteredIds = ids.filter(e => e !== key)
    await SecureStore.setItemAsync('medications', JSON.stringify(filteredIds))
    setUpdate(!update)
  }
  // @ts-ignore
  const getOneMed = async (key) => {
    const med = await SecureStore.getItemAsync(key)
    // @ts-ignore
    return JSON.parse(med)
  }
  // @ts-ignore
  const updateAmount = async (key, amount) => {
    var medication = await getOneMed(key)
    medication.amount = parseInt(medication.amount) + parseInt(amount)
    if(medication.amount < 0){
      medication.amount = 0
    }
    await SecureStore.setItemAsync(key, JSON.stringify(medication));
    setUpdate(!update)
  }

  return (
    <View style={tw('pt-10 bg-light h-full')}>
    <LogoTop />
    <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
    >
      <View style={styles.container}>
        <CalendarStrip
          scrollable
          style={{height:150, paddingTop: 20, paddingBottom: 10}}
          onDateSelected={date => setDate(date)}
          selectedDate={date}
          daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'black'}}
          calendarHeaderStyle={tw('subheading')}
        />

        <Agenda
          date={date}
          meds={medications}
          updateAmount={updateAmount}
        ></Agenda>

        <MedicationList
          updateAmount={updateAmount}
          save={saveNewMedication}
          refresh={onRefresh}
          deleteItem={deleteMedication}
          meds={medications}>
         </MedicationList>
      </View>
     </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

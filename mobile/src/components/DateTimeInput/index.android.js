import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity, 
  Image, 
  TextInput,
  DatePickerAndroid,
  TimePickerAndroid,  
  Alert,
} from 'react-native'
import { format, isPast } from 'date-fns';

import styles from './styles';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

export default function DateTimeInputAndroid({ type, save, date, hour }){
  const [datetime, setDateTime] = useState();

  useEffect(() => {
    if(type == 'date' && date){
      setDateTime(format(new Date(date), 'dd/MM/yyyy'));
      save(format(new Date(date), 'yyyy-MM-dd'));
    }

    if(type == 'hour' && hour){
      setDateTime(format(new Date(hour), 'HH:mm'));
      save(format(new Date(hour), 'HH:mm:ss'));
    }
  },[])

  async function selectDataOrHour(){
    if(type == 'date'){
      const {action, year, month, day} = await DatePickerAndroid.open({
        mode: 'calendar'
      });

      if(action == DatePickerAndroid.dateSetAction)
        if(isPast(new Date(year, month, day, 24, 59, 56, 0))){ 
          return Alert.alert('Você não pode escolhar uma data passada!');
        }else{
          setDateTime(`${day} - ${month} - ${year}`); 
          save(format(new Date(year, month, day), 'yyyy-MM-dd'));
        }
    }else{
      const { action, hour, minute } = await TimePickerAndroid.open({
        is24Hour: true
      });

      if(action !== TimePickerAndroid.dismissedAction)
      setDateTime(`${hour}:${minute}`);
      save(format(new Date(2020, 12, 1, hour, minute, 0, 0), 'HH:mm:ss'));      
    }
  }

  return(
    <TouchableOpacity onPress={selectDataOrHour}>
      <TextInput 
      style={styles.input} 
      placeholder={type == 'date' ? 'Clique aqui para definir a data...' : 'Clique aqui para definir a hora...' }
      editable={false}
      value={datetime}
      />
      <Image 
      style={styles.iconTextInput} 
      source={type == 'date' ? iconCalendar : iconClock} />
    </TouchableOpacity>
  )

}
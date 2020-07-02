import React, { useState } from 'react';
import { Platform } from 'react-native';

import DateTimeInputAndroid from './index.android';
import DateTimeInputIOS from './index.ios';

export default function Index(){
  return(
    Platform.OS === 'android' 
    ? 
    <DateTimeInputAndroid/>
    :
    <DateTimeInputIOS/>

  );
}
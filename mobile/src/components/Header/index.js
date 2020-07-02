import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

// ICONES
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import qrcode from '../../assets/qrcode.png';
import back from '../../assets/back.png';


export default function Header({ showNotification, showBack, pressNotification, late, navigation }){
  function Back(){
    navigation.navigate('Home');
  }

  function OpenQrCode(){
    navigation.navigate('QrCode');
  }
  
  return(
      <View style={styles.header}>

        {
        showBack ?
        <TouchableOpacity style={styles.leftIcon} onPress={Back}>
          <Image source={back} style={styles.leftIconImage} />
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.leftIcon} onPress={OpenQrCode}>
          <Image source={qrcode} style={styles.leftIconImage}/>
        </TouchableOpacity>
        }


        <Image source={logo} style={styles.logo} />

        { 
        showNotification && late > 0 &&         
        <TouchableOpacity style={styles.notification} onPress={pressNotification}>
          <Image source={bell} style={styles.notificationImage} />
          <View style={styles.circle}>
        <Text style={styles.notificationText}>{late}</Text>
          </View>
        </TouchableOpacity>
        }
        
      </View>
  )
}
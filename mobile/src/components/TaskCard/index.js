import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';

import styles from './styles';

// COLEÇÃO DE ÍCONES
import typeIcons from '../../utils/typeIcons';

export default function TaskCard({ done, title, when, type, onPress }){
  return (
    <TouchableOpacity style={[styles.card, done && styles.done]} onPress={onPress}>
      <View style={styles.cardLeft}>
        <Image source={typeIcons[type]} style={styles.typeActive} />
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.cardDate}>{format(new Date(when), 'dd/MM/yyyy')}</Text>
        <Text style={styles.cardTime}>{format(new Date(when), 'HH:mm')}</Text>
      </View>
    </TouchableOpacity>
  )
}
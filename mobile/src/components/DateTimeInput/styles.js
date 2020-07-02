import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
      fontSize: 18,
      padding: 10,
      width: '95%',
      borderBottomWidth: 1, 
      borderBottomColor: '#EE6B26',
      marginHorizontal: 10,
      marginVertical: 20
    },
    iconTextInput: {
      position: 'absolute',
      left: '90%',
      top: 35,
      width: 25,
      height: 25,
      resizeMode: 'contain' 
    }
});

export default styles;
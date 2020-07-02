import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: '90%',
    marginVertical: 10,
    height: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  typeActive: {
    width: 50,
    height: 50
  },
  cardTitle: {
    marginLeft: 10,
    fontWeight: 'bold', 
    fontSize: 16
  },
  cardRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  cardDate: {
    color: '#EE6B26',
    fontWeight: 'bold',
    fontSize: 16
  },
  cardTime: {
    color: '#707070'
  },
  done: {
    opacity: 0.5
  }
});

export default styles;
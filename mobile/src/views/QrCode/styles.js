import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    width: '100%',
    height: 70,
    backgroundColor: '#20295F',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#EE6B26',
    borderBottomWidth: 5
  },
  headerText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  containerButtons: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 70,
  },
  buttonBack: {
    backgroundColor: '#EE6B26',
    width: '45%',
    padding: 10,
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  buttonScanActive: {
    backgroundColor: 'green',
    width: '45%',
    padding: 10,
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    opacity: 1
  },
  buttonScanInative: {
    backgroundColor: '#20295F',
    width: '45%',
    padding: 10,
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    opacity: 0.5,
  },
  textButton: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12
  }
});

export default styles;
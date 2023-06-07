import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#1f1e25',
    height: 56,
    borderRadius: 8,
    color: '#fff',
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 14,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#31cf67',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
  form: {
    marginTop: 36,
    marginBottom: 42,
    flexDirection: 'row',
    width: '100%',
  },
  listEmptyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
})

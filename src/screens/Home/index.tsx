import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'
import { useState } from 'react'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert('Participant exists', 'Participant Already exists')
    }
    setParticipants((item) => [...item, participantName])
    setParticipantName('')
  }
  function handleParticipantRemove(name: string) {
    Alert.alert('Sure?', `U Really want to remove ${name} ?`, [
      {
        text: 'Yes',
        onPress: () => {
          const participantsWithouDeletedOne = participants.filter(
            (participant) => participant !== name,
          )
          setParticipants(participantsWithouDeletedOne)
          Alert.alert('deleted')
        },
      },
      { text: 'no', style: 'cancel' },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Matias Party 🎉</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2023.</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Participant Name"
          placeholderTextColor={'#6b6b6b'}
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity
          style={[
            styles.button,
            participantName.trim() === '' && styles.disabledButton,
          ]}
          disabled={participantName.trim() === ''}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Has no one in the event, Add some participants!
          </Text>
        )}
      />
    </View>
  )
}

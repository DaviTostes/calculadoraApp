import { View, Text } from 'react-native'
import styles from './styles'

export default function Display({ expression, result }) {
  return (
    <View style={styles.container}>
      <Text style={styles.expression}>{expression}</Text>
      <Text style={styles.result}>{result}</Text>
    </View>
  )
}

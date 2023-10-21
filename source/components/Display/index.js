import { View, Text } from 'react-native'
import styles from './styles'
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated'

export default function Display({ expression, result }) {
  return (
    <View style={styles.container}>
      <Text style={styles.expression}>{expression}</Text>
      <Animated.Text style={styles.result} exiting={FadeInDown}>
        {result}
      </Animated.Text>
    </View>
  )
}

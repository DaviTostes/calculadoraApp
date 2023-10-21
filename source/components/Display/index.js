import { Text } from 'react-native'
import styles from './styles'
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated'

export default function Display({ expression, result }) {
  return (
    <Animated.View style={styles.container}>
      <Text style={styles.expression}>{expression}</Text>
      <Animated.Text
        style={styles.result}
        entering={FadeInUp}
        exiting={FadeInDown}
      >
        {result}
      </Animated.Text>
    </Animated.View>
  )
}

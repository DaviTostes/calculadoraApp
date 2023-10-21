import { TouchableOpacity, Text } from 'react-native'
import style from './style'

export default function Botao({ label, color, fontWeight, onPress }) {
  const shade = color ? color : '#fff'
  const fontBold = color ? fontWeight : 'bold'

  return (
    <TouchableOpacity style={style.Button} onPress={onPress}>
      <Text style={[style.ButtonText, { color: shade, fontWeight: fontBold }]}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

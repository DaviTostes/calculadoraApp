import { TouchableOpacity,Text} from "react-native"
import style from "./style";

export default function Botao({label, color, onPress }) {
    const shade= color? color: "#fff";
    
    return (    
        <TouchableOpacity style={style.Button} onPress={onPress}>
            <Text style={ [style.ButtonText, {color: shade}]}>{label}</Text>
        </TouchableOpacity>
    );

}
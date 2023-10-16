import { TouchableOpacity,Text} from "react-native"
import style from "./style";

export default function Botao({label, color}) {
    const shade= color? color: "#fff";
    function handlePress() {
        if(typeof label === 'string')
            return label;
        return '/';
    }
    return (    
        <TouchableOpacity style={style.Button} onPress={()=> handlePress()}>
            <Text style={ [style.ButtonText, {color: shade}]}>{label}</Text>
        </TouchableOpacity>
    );

}
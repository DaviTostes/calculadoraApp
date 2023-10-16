import { TouchableOpacity, View, Text } from "react-native";
import {MaterialCommunityIcons} from  "react-native-vector-icons";

import Button from "../Button";
import styles from "./styles";


export default function Keyboard(){
    return(
        <View style={styles.container}>
        
            <View style={styles.erase}>
                <TouchableOpacity onPress={()=> console.log('daviGay')}>
                    <MaterialCommunityIcons name="backspace" size={34} color="red"/>
                </TouchableOpacity>
            </View>
        
            <View style={styles.line}>
                <Button label="c" color= "#00d315" />
                <Button label="()" color= "#00d315" />
                <Button label="%" color= "#00d315" />
                <Button label= {<MaterialCommunityIcons name="division" 
                    style={styles.icon}/>} color= "#00d315" />
            </View>

            <View style={styles.line}>
                <Button label="7"/>
                <Button label="8"/>
                <Button label="9"/>
                <Button label="x" color= "#00d315"/>
            </View>

            <View style={styles.line}>
                <Button label="4"/>
                <Button label="5"/>
                <Button label="6"/>
                <Button label="-" color= "#00d315" />
            </View>

            <View style={styles.line}>
                <Button label="1"/>
                <Button label="2"/>
                <Button label="3"/>
                <Button label="+" color= "#00d315"/>
            </View>

            <View style={styles.line}>
                <Button label="+/-"/ >
                <Button label="0"/>
                <Button label=","/>
                <Button label="=" color= "#00d315"/>
                
            </View>
        </View>
    )
}
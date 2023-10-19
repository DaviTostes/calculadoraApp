import { TouchableOpacity, View } from "react-native";
import {MaterialCommunityIcons} from  "react-native-vector-icons";
import math from "mathjs";

import buttons from "./buttons";
import Button from "../Button";
import styles from "./styles";

export default function Keyboard(props){
    
    const math= require('mathjs')

    function analyzeExpression(char){
        
        
    }

    function updateExpression(char){
        //if(analyzeExpression(char))return;
        props.setExpression(props.expression + char);
        props.setResult("");
    }
    function erase(){
        props.setExpression(props.expression.slice(0, -1));
    }

    function clear(){
        props.setExpression("");
    }

    function calculate(){
        
        const resultado= math.evaluate(props.expression);
        props.setResult(resultado);
        clear();

    }



    return(
        <View style={styles.container}>
        
            <View style={styles.erase}>
                <TouchableOpacity onPress={erase} onLongPress={clear} delayLongPress={500}>
                    <MaterialCommunityIcons name="backspace" size={34} color="red"/>
                </TouchableOpacity>
            </View>

            <View style={styles.buttons}>
                {buttons.map((button, index) =>{
                    if(button.value === "^"){
                        button.label = <MaterialCommunityIcons
                         name="exponent"
                        size={34}/>
                    }
                    

                    return(
                        <Button
                            key={index}
                            label={button.label} 
                            color={button.color} 
                            onPress={()=>button.value!= "="?updateExpression(button.value):calculate() }
                        />
                    );
                })}
            </View>
        </View>
    );
}
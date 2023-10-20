import { TouchableOpacity, View } from "react-native";
import {MaterialCommunityIcons} from  "react-native-vector-icons";
import math from "mathjs";

import buttons from "./buttons";
import Button from "../Button";
import styles from "./styles";

export default function Keyboard(props){
    
    const operations = ["+", "-", "*", "/"];

    
    const math= require('mathjs')

    function invalidExpression(char){
        if(operations.includes(props.expression[props.expression.length - 1])&&
            operations.includes(char))return true;
   
    }

    function updateExpression(char){
        if(invalidExpression(char))return;
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
        
        try{
            const resultado= math.evaluate(props.expression);
            props.setResult(resultado);
            clear();
        }catch(error)
        {
            props.setResult("Invalid Expression");
            clear();
        }
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
import { TouchableOpacity, View, Text } from "react-native";
import {MaterialCommunityIcons} from  "react-native-vector-icons";
import React, { useState } from 'react';

import Button from "../Button";
import styles from "./styles";


export default function Keyboard(props){

    function handlerPress(value) {
        props.onSendExpression(value)
    }

    function calculate() {
        props.evaluate()
    }

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
                <Button label="%" color= "#00d315" onPress={() => handlerPress("%")}/>
                <Button label= {<MaterialCommunityIcons name="division" 
                    style={styles.icon}/>} color= "#00d315" onPress={() => handlerPress("/")}/>
            </View>

            <View style={styles.line}>
                <Button label="7" onPress={() => handlerPress("7")}/>
                <Button label="8" onPress={() => handlerPress("8")}/>
                <Button label="9" onPress={() => handlerPress("9")}/>
                <Button label="x" color= "#00d315" onPress={() => handlerPress("x")}/>
            </View>

            <View style={styles.line}>
                <Button label="4" onPress={() => handlerPress("4")}/>
                <Button label="5" onPress={() => handlerPress("5")}/>
                <Button label="6" onPress={() => handlerPress("6")}/>
                <Button label="-" color= "#00d315" onPress={() => handlerPress("-")}/>
            </View>

            <View style={styles.line}>
                <Button label="1" onPress={() => handlerPress("1")}/>
                <Button label="2" onPress={() => handlerPress("2")}/>
                <Button label="3" onPress={() => handlerPress("3")}/>
                <Button label="+" color= "#00d315" onPress={() => handlerPress("+")}/>
            </View>

            <View style={styles.line}>
                <Button label="+/-"/ >
                <Button label="0" onPress={() => handlerPress("0")}/>
                <Button label="," onPress={() => handlerPress(".")}/>
                <Button label="=" color= "#00d315" onPress={() => calculate()}/>
                
            </View>
        </View>
    )
}
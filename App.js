import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Keyboard from "./source/components/Keyboard";
import Display from './source/components/Display';
import { useState } from 'react';
import math from 'mathjs';

export default function App() {
  let [expression, setExpression] = useState("")
  let [result, setResult] = useState()

  function handleExpression(value) {
    setExpression([...expression, value].join(""))
  }

  function calculate() {
    console.log(expression)
    console.log(math.evaluate("2+2"))
    setResult(result)
  }

  return (
    <View style={styles.container}>
        <Display expression={expression} result={result} />

        <View style={styles.separator}/>

        <Keyboard onSendExpression={handleExpression} evaluate={calculate}/>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0c',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  separator: {
    bottom: "0",
    width: "100%",
    height: 2,
    alignItems: 'flex-end',
    backgroundColor: "#4a4a4a",

  }
});

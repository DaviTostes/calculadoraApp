import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Keyboard from "./source/components/Keyboard";
import Display from './source/components/Display';

export default function App() {
  return (
    <View style={styles.container}>
        <Display expression= "12-9/2" result="3"/>

        <View style={styles.separator}/>

        <Keyboard/>
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

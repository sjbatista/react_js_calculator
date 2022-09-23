import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import CalcButton from './CalcButton'

export default function App() {

LogBox.ignoreAllLogs();

const [firstNumber, setFirstNumber] = useState(0);
const [secondNumber, setSecondNumber] = useState(0);
const [operatorSign, setOperatorSign] = useState("");
const [stringCalc, setStringCalc] = useState("0");

var numbers = [];

for(var i = 0; i<=9; i++){
  numbers.push(i);
}

  return (
    <View style={styles.container}>
      
      <View style={styles.topo}><Text style={{fontSize:24}}>{stringCalc}</Text></View>

      <View style={{flex:1, flexDirection:'row'}}>
        <TouchableHighlight style={{width:'25%'}}><Text style={{fontSize:24}}>+</Text></TouchableHighlight>
        <TouchableHighlight style={{width:'25%'}}><Text style={{fontSize:24}}>-</Text></TouchableHighlight>
        <TouchableHighlight style={{width:'25%'}}><Text style={{fontSize:24}}>/</Text></TouchableHighlight>
        <TouchableHighlight style={{width:'25%'}}><Text style={{fontSize:24}}>x</Text></TouchableHighlight>
      </View>

      <View>
        {numbers.map(
          function(a){
            return(
            <CalcButton number={a}></CalcButton>
                  )
            }
            )
        }
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
    
  },

  topo: {
    padding:10,
    borderBottomColor:'black',
    borderBottomWidth:2
  },
});
